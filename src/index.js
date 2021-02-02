const contentDiv = document.querySelector('#content');
const addBtn = document.querySelector('.addBtn');
const homeBtn = document.querySelector('.homeBtn');

import addTodoHTML from './addTodoHTML';
import homePage from './homePage';
import todo from './todo';
import {logTodos} from './todoProject';

addBtn.addEventListener('click', addTodoForm);
homeBtn.addEventListener('click', showHome);

function showHome(){
    contentDiv.innerHTML = homePage();
}

function addTodoForm(){
    contentDiv.innerHTML = addTodoHTML();
}

window.onload = () => {
    contentDiv.appendChild(homePage());
    console.log(contentDiv);
}