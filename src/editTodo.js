import {showTitles} from './homePage';

const editTodoForm = (e) => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    const contentDiv = document.querySelector('#content');
    const projectListDiv = contentDiv.querySelector('.project-list');
    const selectedTodo = e.target.parentElement.parentElement;
    const selectedTodoIdx = selectedTodo.dataset.index;
    const projectIdx = selectedTodo.parentElement.parentElement.dataset.index;
    let localTodo = JSON.parse(localStorageArr[projectIdx].todos[selectedTodoIdx]);
    
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
        editTodoDescription.value = localTodo.description;

    const editTodoDueDate = document.createElement('input');
        editTodoDueDate.classList.add('edit-date');
        editTodoDueDate.type = 'date';
        editTodoDueDate.value = localTodo.dueDate;
    
    const confirmEditBtn = document.createElement('button');
        confirmEditBtn.classList.add('confirm-edit-btn');
        confirmEditBtn.innerText = "Confirm";
        confirmEditBtn.addEventListener('click', confirmEdits);

    const todoPriority = selectedTodo.querySelector('p').querySelector('.todo-priority').innerText;
    const todoPriorityForm = document.createElement('div');
        todoPriorityForm.classList.add('edit-priority-form');
        
    const todoPriorityFormHTML = `
            <p>Priority</p>
            <div>
            <input id="low" name="todo-priority" value="low" type="radio" checked/>
            <label for="low">Low</label>
            <input id="medium" name="todo-priority" value="medium" type="radio" />
            <label for="medium">Medium</label>
            <input id="high" name="todo-priority" value="high" type="radio" />
            <label for="high">High</label>
            </div>
    `;

    todoPriorityForm.innerHTML = todoPriorityFormHTML;

    editTodoDiv.appendChild(projectLabel);
    editTodoDiv.appendChild(todoLabel);
    editTodoDiv.appendChild(editTodoDescription);
    editTodoDiv.appendChild(editTodoDueDate);
    editTodoDiv.appendChild(todoPriorityForm);
    editTodoDiv.appendChild(confirmEditBtn);

    projectListDiv.style.display = 'none';
    contentDiv.appendChild(editTodoDiv);
}

const confirmEdits = () => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    const contentDiv = document.querySelector('#content');
    const editForm = document.querySelector('.edit-todo-form');
    const newDescription = editForm.querySelector('.edit-description').value;
    const newDate = editForm.querySelector('.edit-date').value;
    const projectIdx = editForm.querySelector('.edit-project-label').dataset.index;
    const todoIdx = editForm.querySelector('.edit-todo-label').dataset.index;
    let localTodo = JSON.parse(localStorageArr[projectIdx].todos[todoIdx]);
    const editPriorityInput = editForm.querySelector('.edit-priority-form').querySelector('div').querySelectorAll('input[name="todo-priority"]');
    const editTodoForm = contentDiv.querySelector('.edit-todo-form');
    const projectListDiv = contentDiv.querySelector('.project-list');
    const projectDiv = projectListDiv.querySelectorAll(`.project`);
    let todoProjectDiv;

    projectDiv.forEach((project)=>{
        if(project.dataset.index === projectIdx) {
            todoProjectDiv = project;
        }
    });

    let allTodosInProject = todoProjectDiv.querySelectorAll('.todo');

    let editedTodo;

    allTodosInProject.forEach((todo)=>{
        if(todo.dataset.index === todoIdx){
            editedTodo = todo;
        }
    });

    let todoPriority;
    
    editPriorityInput.forEach((el)=> {
        if(el.checked){
            todoPriority = el.value;
        }
    });
    
    const confirmMessage = document.createElement('p');
    confirmMessage.classList.add('confirm-message');
    confirmMessage.innerText = 'Edits Saved';
    
    let editsConfirmed = false;
    
    localTodo.description = newDescription;
    localTodo.dueDate = newDate;
    localTodo.priority = todoPriority;
    localStorageArr[projectIdx].todos[todoIdx] = JSON.stringify(localTodo);
    localStorage.setItem('todos', JSON.stringify(localStorageArr));
    
    const todoText = editedTodo.querySelector('p');
    todoText.innerHTML = `<strong>Todo:</strong> ${newDescription} -- <strong>Due:</strong> ${newDate} -- <strong>Priority:</strong> <span class="todo-priority">${todoPriority}</span>`;
    contentDiv.appendChild(confirmMessage);
    setTimeout(() => {
        contentDiv.removeChild(confirmMessage);
        contentDiv.removeChild(editTodoForm);
        projectListDiv.style.display = 'grid';
    }, 1000);
}

export {editTodoForm, confirmEdits}