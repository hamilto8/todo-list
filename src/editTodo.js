import todoListArr from './todoProjectList';

const editTodoForm = (e) => {
    const contentDiv = document.querySelector('#content');
    const selectedTodo = e.target.parentElement.parentElement;
    const selectedTodoIdx = selectedTodo.dataset.index;
    const projectIdx = selectedTodo.parentElement.parentElement.dataset.index;
    
    const editTodoDiv = document.createElement('div');
        editTodoDiv.classList.add('edit-todo-form');
    
    const projectLabel = document.createElement('span');
        projectLabel.classList.add('edit-project-label');
        projectLabel.dataset.index = projectIdx;

    const todoLabel = document.createElement('span');
        todoLabel.classList.add('edit-todo-label');
        todoLabel.dataset.index = selectedTodoIdx;

    const editPage = `<p>Edit Todo Information Here</p>`;

    editTodoDiv.innerHTML += editPage;

    const editTodoDescription = document.createElement('input');
        editTodoDescription.classList.add('edit-description');
        editTodoDescription.type = 'text';
        editTodoDescription.value = todoListArr[projectIdx].todos[selectedTodoIdx].description;

    const editTodoDueDate = document.createElement('input');
        editTodoDueDate.classList.add('edit-date');
        editTodoDueDate.type = 'date';
        editTodoDueDate.value = todoListArr[projectIdx].todos[selectedTodoIdx].dueDate;

    const confirmEditBtn = document.createElement('button');
        confirmEditBtn.classList.add('confirm-edit-btn');
        confirmEditBtn.innerText = "Confirm";
        confirmEditBtn.addEventListener('click', confirmEdits);
    
    editTodoDiv.appendChild(projectLabel);
    editTodoDiv.appendChild(todoLabel);
    editTodoDiv.appendChild(editTodoDescription);
    editTodoDiv.appendChild(editTodoDueDate);
    editTodoDiv.appendChild(confirmEditBtn);

    contentDiv.innerHTML = '';
    contentDiv.appendChild(editTodoDiv);
}

const confirmEdits = () => {
    const editForm = document.querySelector('.edit-todo-form');
    const newDescription = editForm.querySelector('.edit-description').value;
    const newDate = editForm.querySelector('.edit-date').value;
    const projectIdx = editForm.querySelector('.edit-project-label').dataset.index;
    const todoIdx = editForm.querySelector('.edit-todo-label').dataset.index;

    console.log('confirming edits...');
    console.log(`The Project IDX is ${projectIdx}. The Todo IDX is ${todoIdx}`);
    console.log(`New Description: ${newDescription}`)
    console.log(`New Date: ${newDate}`)
}

export {editTodoForm, confirmEdits}