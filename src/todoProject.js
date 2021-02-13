import todo from './todo';

let todoListArr = [];

class todoProject {
    constructor(title = 'Untitled Project', shown = false, todos = []){
        this.title = title;
        this.shown = shown;
        this.todos = todos;
    }
}

// class todo {
//     constructor(description, completedStatus, dueDate, priority){
//         this.description = description;
//         this.completedStatus = completedStatus;
//         this.dueDate = dueDate;
//         this.priority = priority;
//     }
// }

// const firstProject = new todoProject('My First Project', 
//     false, [
//     ['Buy milk', false, '10/22/2022','low'], 
//     ['Put gas in car', false, '03/21/2023','low']]);
// const secondProject = new todoProject('My Second Project', 
//     false, [
//     ['Eat at Wendy\'s', false, '12/30/2021','high'], 
//     ['Ride into the sunset', false, '09/10/2011','low']]);

const firstProject = new todoProject('My First Project', false);
const secondProject = new todoProject('My Second Project', false);

const firstTodo = new todo('Buy Milk', false, '10/21/2022', 'low');

firstProject.todos.push(firstTodo);

console.log(firstProject);

todoListArr.push(firstProject);
todoListArr.push(secondProject);

let todoProjectListUl = document.createElement('ul');

export {todoProjectListUl, todoListArr, todoProject}