import todo from './todo';
import todoListArr from './todoProjectList';

class todoProject {
    constructor(title = 'Untitled Project', shown = false, todos = []){
        this.title = title;
        this.shown = shown;
        this.todos = todos;
    }
}

const firstProject = new todoProject('My First Project', false);
const secondProject = new todoProject('My Second Project', false);

const firstTodo = new todo('Buy Milk', false, '2021-02-11', 'low');
const secondTodo = new todo('Go to work', false, '2022-03-01', 'low');

firstProject.todos.push(firstTodo);
firstProject.todos.push(secondTodo);

let demoStart = localStorage.getItem('demoStart');
if(demoStart === null){
    localStorage.setItem('demoStart', '1');
    let currentTodos = JSON.parse(localStorage.getItem('todos'));
    if (!currentTodos || currentTodos.length === 0) {
        localStorage.setItem('todos', JSON.stringify([firstProject, secondProject]));
    }
}

let todoProjectListUl = document.createElement('ul');

export {todoProjectListUl, todoListArr, todoProject}