import todo from './todo';
import todoListArr from './todoProjectList';

let demoStart = JSON.parse(localStorage.getItem('demoStart'));

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

firstProject.todos.push(JSON.stringify(firstTodo));
firstProject.todos.push(JSON.stringify(secondTodo));

let localStorageArr = JSON.parse(localStorage.getItem('todos'));
if(demoStart === null){
    localStorage.setItem('demoStart', JSON.stringify('1'));
}

let todoProjectListUl = document.createElement('ul');

export {todoProjectListUl, todoListArr, todoProject}