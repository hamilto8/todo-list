const contentDiv = document.querySelector('#content');
const addBtn = document.querySelector('.addBtn');
const homeBtn = document.querySelector('.homeBtn');

import addTodoHTML from './addTodoHTML';
import {homePage, showTitles, showTodos} from './homePage';
import todo from './todo';
import {logTodos, todoListArr} from './todoProject';

addBtn.addEventListener('click', addTodoForm);
homeBtn.addEventListener('click', showHome);

const newProjectDiv = document.createElement('div');
newProjectDiv.classList.add('project');
newProjectDiv.innerText = 'My New Project';

newProjectDiv.addEventListener('click', showHome);

function showHome(){
    contentDiv.appendChild(homePage());
}

function addTodoForm(){
    contentDiv.innerHTML = addTodoHTML();
}

window.onload = () => {
    contentDiv.appendChild(showTitles())
}