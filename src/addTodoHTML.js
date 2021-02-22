import { add } from 'date-fns';
import createTodoProject from './addTodoLogic';
import {deleteTodo, markComplete} from './homePage';
// import todoListArr from './todoProjectList';


const addNewProject = () => {
    console.log(`You clicked the button!`);
}

const addTodoToHTML = (projectIdx) => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    const newLi = document.createElement('li');
        newLi.classList.add('todo');
        newLi.innerHTML = `<i class="far fa-circle"></i>`;

    const deleteSpan = document.createElement('span');
            deleteSpan.classList.add('delete-todo');
            deleteSpan.innerHTML = `<i class="far fa-trash-alt"></i>`;
            deleteSpan.addEventListener('click', deleteTodo);

    const todoText = document.createElement('p');
            todoText.innerText = `${JSON.parse(localStorageArr[projectIdx].todos[0]).description}`;
            todoText.addEventListener('click', markComplete);
        
        newLi.dataset.index = localStorageArr[projectIdx].todos.length - 1;
        newLi.appendChild(todoText);
        newLi.appendChild(deleteSpan);

    return newLi;     
}

export {addNewProject, addTodoToHTML}