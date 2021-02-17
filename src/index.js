const contentDiv = document.querySelector('#content');
const addBtn = document.querySelector('.addBtn');
const homeBtn = document.querySelector('.homeBtn');
const deleteBtn = document.querySelector('.delete-btn');

// import addNewProject from './addTodoHTML';
import {homePage, showTitles, showTodos, addNewProject, deleteProject} from './homePage';
import {addTodoToProject} from './addTodoLogic';

addBtn.addEventListener('click', addTodoForm);
homeBtn.addEventListener('click', showHome);
deleteBtn.addEventListener('click', deleteProject)


function showHome(){
    contentDiv.innerHTML = '';
    contentDiv.appendChild(showTitles());
}

function addTodoForm(){
    contentDiv.appendChild(addNewProject());
}

window.onload = () => {
    contentDiv.appendChild(showTitles())
}