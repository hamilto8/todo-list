import todoListArr from './todoProjectList';
import {showTitles} from './homePage';

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
    const contentDiv = document.querySelector('#content');
    const editForm = document.querySelector('.edit-todo-form');
    const newDescription = editForm.querySelector('.edit-description').value;
    const newDate = editForm.querySelector('.edit-date').value;
    const projectIdx = editForm.querySelector('.edit-project-label').dataset.index;
    const todoIdx = editForm.querySelector('.edit-todo-label').dataset.index;

    const confirmMessage = document.createElement('p');
        confirmMessage.classList.add('confirm-message');
        confirmMessage.innerText = 'Edits Saved';

    let editsConfirmed = false;

    console.log('confirming edits...');
    
    todoListArr[projectIdx].todos[todoIdx].description = newDescription;
    todoListArr[projectIdx].todos[todoIdx].dueDate = newDate;
    
    contentDiv.innerHTML = '';
    contentDiv.appendChild(confirmMessage);
    setTimeout(() => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(showTitles())
    }, 1000);
}

export {editTodoForm, confirmEdits}