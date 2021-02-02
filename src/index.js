const contentDiv = document.querySelector('#content');
const addBtn = document.querySelector('.addBtn');
const homeBtn = document.querySelector('.homeBtn');

import addTodo from './addTodo';
import homePage from './homePage';
import todo from './todo';
import todoProject from './todoProject';

addBtn.addEventListener('click', addTodoForm);
homeBtn.addEventListener('click', showHome);

function showHome(){
    contentDiv.innerHTML = homePage();
}

function addTodoForm(){
    contentDiv.innerHTML = addTodo();
}

window.onload = () => {
    contentDiv.innerHTML = todoProject();
}