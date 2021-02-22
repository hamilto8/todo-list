import todo from './todo';
import todoListArr from './todoProjectList';

// let todoListArr = [];

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

firstProject.todos.push(JSON.stringify(firstTodo));

let localStorageArr = JSON.parse(localStorage.getItem('todos'));
localStorageArr.push(firstProject);
localStorage.setItem('todos', JSON.stringify(localStorageArr));
let todoProjectListUl = document.createElement('ul');

export {todoProjectListUl, todoListArr, todoProject}