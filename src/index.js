import { renderSidebar, renderActiveProject, activeProjectIdx } from './homePage';

document.addEventListener('DOMContentLoaded', () => {
    // Bind Dialog opening/closing
    const projectDialog = document.getElementById('project-dialog');
    const todoDialog = document.getElementById('todo-dialog');
    const editDialog = document.getElementById('edit-dialog');

    const addProjectBtn = document.getElementById('add-project-btn');
    const closeProjectDialog = document.getElementById('close-project-dialog');
    const closeTodoDialog = document.getElementById('close-todo-dialog');
    const closeEditDialog = document.getElementById('close-edit-dialog');

    addProjectBtn.addEventListener('click', () => {
        document.getElementById('new-project-title').value = '';
        projectDialog.showModal();
    });

    closeProjectDialog.addEventListener('click', () => projectDialog.close());
    closeTodoDialog.addEventListener('click', () => todoDialog.close());
    closeEditDialog.addEventListener('click', () => editDialog.close());

    // Close modal if clicked on the backdrop
    const handleBackdropClick = (e, dialog) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
            rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX && e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
            dialog.close();
        }
    };

    projectDialog.addEventListener('click', (e) => handleBackdropClick(e, projectDialog));
    todoDialog.addEventListener('click', (e) => handleBackdropClick(e, todoDialog));
    editDialog.addEventListener('click', (e) => handleBackdropClick(e, editDialog));

    // Bind Form Submissions
    const projectForm = document.getElementById('project-form');
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const titleInput = document.getElementById('new-project-title');
        const title = titleInput.value.trim();
        if (title) {
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            const newProj = { title, shown: false, todos: [] };
            todos.push(newProj);
            localStorage.setItem('todos', JSON.stringify(todos));
            localStorage.setItem('activeProjectIdx', todos.length - 1);
            
            renderSidebar();
            renderActiveProject();
            projectDialog.close();
        }
    });

    const todoForm = document.getElementById('todo-form');
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const descriptionInput = document.getElementById('todo-description');
        const dueDateInput = document.getElementById('todo-due-date');
        const priorityRadios = document.getElementsByName('priority');
        
        const description = descriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        let priority = 'low';
        
        priorityRadios.forEach(radio => {
            if (radio.checked && radio.id.startsWith('priority-')) {
                priority = radio.value;
            }
        });

        if (description && dueDate) {
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            const activeIdx = Number(localStorage.getItem('activeProjectIdx') || 0);
            
            if (todos[activeIdx]) {
                const newTodo = {
                    description,
                    completedStatus: false,
                    dueDate,
                    priority
                };
                todos[activeIdx].todos.push(newTodo);
                localStorage.setItem('todos', JSON.stringify(todos));
                
                renderActiveProject();
                todoForm.reset();
                todoDialog.close();
            }
        }
    });

    const editForm = document.getElementById('edit-form');
    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const descriptionInput = document.getElementById('edit-todo-description');
        const dueDateInput = document.getElementById('edit-todo-due-date');
        const priorityRadios = document.getElementsByName('priority');
        
        const projectIdx = Number(document.getElementById('edit-project-idx').value);
        const todoIdx = Number(document.getElementById('edit-todo-idx').value);
        
        const description = descriptionInput.value.trim();
        const dueDate = dueDateInput.value;
        let priority = 'low';
        
        priorityRadios.forEach(radio => {
            if (radio.checked && radio.id.startsWith('edit-priority-')) {
                priority = radio.value;
            }
        });

        if (description && dueDate) {
            let todos = JSON.parse(localStorage.getItem('todos')) || [];
            if (todos[projectIdx] && todos[projectIdx].todos[todoIdx]) {
                todos[projectIdx].todos[todoIdx].description = description;
                todos[projectIdx].todos[todoIdx].dueDate = dueDate;
                todos[projectIdx].todos[todoIdx].priority = priority;
                
                localStorage.setItem('todos', JSON.stringify(todos));
                renderActiveProject();
                editDialog.close();
            }
        }
    });

    // Render initially
    renderSidebar();
    renderActiveProject();
});