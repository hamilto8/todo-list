import { add } from 'date-fns';
import createTodoProject from './addTodoLogic';
// import addNewProject from './homePage';

const addTodoHTML = () => {
    let addDiv = document.createElement('div');
    let addBtn = document.createElement('button');
    addBtn.innerText = 'Submit'
    addBtn.addEventListener('click', addNewProject);
    let addForm = `
        <form id="add-todo-project-form">
            <label for="new-todo">Add Your Project here</label>
            <input id="new-todo" type="text"/>
        </form>
    `;    
    addDiv.appendChild(addBtn);
    return addBtn;
}

const addNewProject = () => {
    console.log(`You clicked the button!`);
}

export default addTodoHTML