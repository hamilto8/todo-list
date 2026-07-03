import { TodoProject } from './todoProject';

// Escape HTML helper to secure against XSS
function escapeHTML(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

const renderSidebar = () => {
    const projectsListEl = document.getElementById('projects-list');
    if (!projectsListEl) return;
    
    projectsListEl.innerHTML = '';
    
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    let activeProjectIdx = Number(localStorage.getItem('activeProjectIdx') || 0);
    
    // Clamp active index
    if (activeProjectIdx >= todos.length) {
        activeProjectIdx = Math.max(0, todos.length - 1);
        localStorage.setItem('activeProjectIdx', activeProjectIdx);
    }
    
    todos.forEach((project, idx) => {
        const projectEl = document.createElement('div');
        projectEl.className = 'project-item';
        if (idx === activeProjectIdx) {
            projectEl.classList.add('active');
        }
        projectEl.dataset.index = idx;
        
        projectEl.innerHTML = `
            <div class="project-item-left">
                <i class="fas fa-folder"></i>
                <span class="project-title-text">${escapeHTML(project.title)}</span>
            </div>
            <button type="button" class="delete-project-btn" title="Delete Project" aria-label="Delete project: ${escapeHTML(project.title)}">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        
        // Click to toggle active project
        projectEl.addEventListener('click', (e) => {
            if (e.target.closest('.delete-project-btn')) return;
            localStorage.setItem('activeProjectIdx', idx);
            renderSidebar();
            renderActiveProject();
        });
        
        // Delete project click handler
        const deleteBtn = projectEl.querySelector('.delete-project-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (confirm(`Are you sure you want to delete the project "${project.title}"?`)) {
                let currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
                currentTodos.splice(idx, 1);
                localStorage.setItem('todos', JSON.stringify(currentTodos));
                
                let currentActive = Number(localStorage.getItem('activeProjectIdx') || 0);
                if (currentActive >= currentTodos.length) {
                    currentActive = Math.max(0, currentTodos.length - 1);
                }
                localStorage.setItem('activeProjectIdx', currentActive);
                
                renderSidebar();
                renderActiveProject();
            }
        });
        
        projectsListEl.appendChild(projectEl);
    });
};

const renderActiveProject = () => {
    const contentEl = document.getElementById('content');
    if (!contentEl) return;
    
    contentEl.innerHTML = '';
    
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    let activeProjectIdx = Number(localStorage.getItem('activeProjectIdx') || 0);
    
    if (activeProjectIdx >= todos.length) {
        activeProjectIdx = Math.max(0, todos.length - 1);
        localStorage.setItem('activeProjectIdx', activeProjectIdx);
    }
    
    // Empty state
    if (todos.length === 0) {
        contentEl.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>No Projects Found</h3>
                <p>Create a new project in the sidebar to get started!</p>
            </div>
        `;
        return;
    }
    
    const activeProject = todos[activeProjectIdx];
    
    // Create Header Panel
    const headerPanel = document.createElement('div');
    headerPanel.className = 'project-header-panel';
    headerPanel.innerHTML = `
        <div class="project-header-info">
            <h1>${escapeHTML(activeProject.title)}</h1>
            <p>${activeProject.todos.length} task${activeProject.todos.length !== 1 ? 's' : ''} total</p>
        </div>
        <button type="button" class="add-task-btn" id="add-task-btn">
            <i class="fas fa-plus"></i> Add Task
        </button>
    `;
    
    // Bind Add Task Dialog open trigger
    headerPanel.querySelector('#add-task-btn').addEventListener('click', () => {
        document.getElementById('todo-description').value = '';
        document.getElementById('todo-due-date').value = new Date().toISOString().split('T')[0];
        document.getElementById('priority-low').checked = true;
        document.getElementById('todo-dialog').showModal();
    });
    
    contentEl.appendChild(headerPanel);
    
    // Create Tasks list container
    const tasksContainer = document.createElement('div');
    tasksContainer.className = 'tasks-container';
    
    if (activeProject.todos.length === 0) {
        const noTasksEl = document.createElement('div');
        noTasksEl.className = 'empty-state';
        noTasksEl.style.padding = '3rem 0';
        noTasksEl.innerHTML = `
            <i class="fas fa-tasks"></i>
            <h3>No Tasks Yet</h3>
            <p>Add your first task to get going!</p>
        `;
        tasksContainer.appendChild(noTasksEl);
    } else {
        activeProject.todos.forEach((todo, todoIdx) => {
            const taskCard = document.createElement('div');
            taskCard.className = 'task-card';
            if (todo.completedStatus) {
                taskCard.classList.add('completed');
            }
            taskCard.dataset.index = todoIdx;
            
            // Check overdue
            const todayStr = new Date().toISOString().split('T')[0];
            const isOverdue = !todo.completedStatus && todo.dueDate && todo.dueDate < todayStr;
            const dueDateClass = isOverdue ? 'task-due-date overdue' : 'task-due-date';
            
            taskCard.innerHTML = `
                <div class="task-left">
                    <button type="button" class="task-checkbox-wrapper" title="${todo.completedStatus ? 'Mark Incomplete' : 'Mark Complete'}" aria-label="${todo.completedStatus ? 'Mark task incomplete: ' : 'Mark task complete: '}${escapeHTML(todo.description)}">
                        <i class="${todo.completedStatus ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
                    </button>
                    <div class="task-content">
                        <span class="task-title">${escapeHTML(todo.description)}</span>
                        <div class="task-meta">
                            <span class="${dueDateClass}">
                                <i class="far fa-calendar-alt"></i> ${escapeHTML(todo.dueDate || 'No Date')}
                            </span>
                            <span class="priority-badge ${escapeHTML(todo.priority || 'low')}">${escapeHTML(todo.priority || 'low')}</span>
                        </div>
                    </div>
                </div>
                <div class="task-right">
                    <button type="button" class="task-action-btn edit-task-btn" title="Edit Task" aria-label="Edit task: ${escapeHTML(todo.description)}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="task-action-btn delete-task-btn" title="Delete Task" aria-label="Delete task: ${escapeHTML(todo.description)}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            
            // Checkbox completed toggle listener
            taskCard.querySelector('.task-checkbox-wrapper').addEventListener('click', () => {
                let currentTodos = JSON.parse(localStorage.getItem('todos'));
                const currentTodo = currentTodos[activeProjectIdx].todos[todoIdx];
                currentTodo.completedStatus = !currentTodo.completedStatus;
                localStorage.setItem('todos', JSON.stringify(currentTodos));
                renderActiveProject();
            });
            
            // Edit task trigger
            taskCard.querySelector('.edit-task-btn').addEventListener('click', () => {
                document.getElementById('edit-project-idx').value = activeProjectIdx;
                document.getElementById('edit-todo-idx').value = todoIdx;
                document.getElementById('edit-todo-description').value = todo.description;
                document.getElementById('edit-todo-due-date').value = todo.dueDate || '';
                
                const pVal = todo.priority || 'low';
                const rad = document.getElementById(`edit-priority-${pVal}`);
                if (rad) rad.checked = true;
                
                document.getElementById('edit-dialog').showModal();
            });
            
            // Delete task handler
            taskCard.querySelector('.delete-task-btn').addEventListener('click', () => {
                if (confirm(`Are you sure you want to delete the task "${todo.description}"?`)) {
                    let currentTodos = JSON.parse(localStorage.getItem('todos'));
                    currentTodos[activeProjectIdx].todos.splice(todoIdx, 1);
                    localStorage.setItem('todos', JSON.stringify(currentTodos));
                    renderActiveProject();
                }
            });
            
            tasksContainer.appendChild(taskCard);
        });
    }
    
    contentEl.appendChild(tasksContainer);
};

export { renderSidebar, renderActiveProject };