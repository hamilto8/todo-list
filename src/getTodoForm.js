import {addTodoToProject} from './addTodoLogic';

const getTodoForm = () =>{
    const todoForm = document.createElement('div');
        todoForm.classList.add('get-todo-form');

    const todoFormHTML = `
        <input class="todo-description" placeholder="Todo Description" type="text"/>
        <input class="due-date" type="date"/>
        <div class="todo-priority">
            <p>Priority</p>
            <div>
            <input id="low" name="todo-priority" value="low" type="radio" checked/>
            <label for="low">Low</label>
            <input id="medium" name="todo-priority" value="medium" type="radio" />
            <label for="medium">Medium</label>
            <input id="high" name="todo-priority" value="high" type="radio" />
            <label for="high">High</label>
            </div>
        </div>
        `;

        todoForm.innerHTML = todoFormHTML;
        const confirmBTN = document.createElement('button');
            confirmBTN.classList.add('confirm-todo');
            confirmBTN.innerText = 'Confirm';
            confirmBTN.addEventListener('click', addTodoToProject);
        
        todoForm.appendChild(confirmBTN);

    return todoForm;
}

export {getTodoForm}