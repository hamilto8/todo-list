// import todoListArr from './todoProjectList';
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

    contentDiv.innerHTML = '';
    contentDiv.appendChild(editTodoDiv);
    // console.log(todoPriority);
}

const confirmEdits = () => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    const contentDiv = document.querySelector('#content');
    const editForm = document.querySelector('.edit-todo-form');
    const newDescription = editForm.querySelector('.edit-description').value;
    const newDate = editForm.querySelector('.edit-date').value;
    const projectIdx = editForm.querySelector('.edit-project-label').dataset.index;
    const todoIdx = editForm.querySelector('.edit-todo-label').dataset.index;
    const editPriorityInput = editForm.querySelector('.edit-priority-form').querySelector('div').querySelectorAll('input[name="todo-priority"]');

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



    console.log('confirming edits...');
    
    localStorageArr[projectIdx].todos[todoIdx].description = newDescription;
    localStorageArr[projectIdx].todos[todoIdx].dueDate = newDate;
    localStorageArr[projectIdx].todos[todoIdx].priority = todoPriority;
    localStorage.setItem('todos', JSON.stringify(localStorageArr));
    
    contentDiv.innerHTML = '';
    contentDiv.appendChild(confirmMessage);
    setTimeout(() => {
        contentDiv.innerHTML = '';
        contentDiv.appendChild(showTitles())
    }, 1000);
}

export {editTodoForm, confirmEdits}