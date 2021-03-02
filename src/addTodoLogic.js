import todo from './todo';
import {addTodoToHTML} from './addTodoHTML';
import {showTitles, showTodos} from './homePage';


function createTodoProject(projectName){
    return `
    <div class="project">${projectName}</div>
    `
}

const addTodoToProject = (e) => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    // const getTodoForm = e.target.parentElement;
    const getTodoForm = document.querySelector('.get-todo-form');
    const projectDiv = getTodoForm.parentElement;
    const contentDiv = document.querySelector('#content');
    const projectUl = projectDiv.querySelector('.todo-project');
    const projectIdx = projectDiv.dataset.index;
    const todoPriorityInput = getTodoForm.querySelector('.todo-priority').querySelector('div').querySelectorAll('input[name="todo-priority"]');
    const todoDescription = getTodoForm.querySelector('.todo-description').value;
    const todoDueDate = getTodoForm.querySelector('.due-date').value;
    let todoPriority;

    todoPriorityInput.forEach((el)=> {
        if(el.checked){
            todoPriority = el.value;
        }
    });
    const newTodo = new todo(todoDescription, false, todoDueDate, todoPriority);
    
    localStorageArr[projectIdx].todos.push(JSON.stringify(newTodo));
    localStorage.setItem('todos', JSON.stringify(localStorageArr));
    
    projectDiv.removeChild(getTodoForm);
    projectUl.appendChild(addTodoToHTML(projectIdx, newTodo));
    console.log(JSON.parse(localStorage.getItem('todos')));
    return newTodo;
}

export {createTodoProject, addTodoToProject}