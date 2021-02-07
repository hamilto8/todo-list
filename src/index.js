const contentDiv = document.querySelector('#content');
const addBtn = document.querySelector('.addBtn');
const homeBtn = document.querySelector('.homeBtn');

// import addNewProject from './addTodoHTML';
import {homePage, showTitles, showTodos, addNewProject} from './homePage';

addBtn.addEventListener('click', addTodoForm);
homeBtn.addEventListener('click', showHome);

function showHome(){
    contentDiv.appendChild(homePage());
}

function addTodoForm(){
    contentDiv.appendChild(addNewProject());
}

window.onload = () => {
    contentDiv.appendChild(showTitles())
}