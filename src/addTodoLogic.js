import todo from './todo';
import todoListArr from './todoProjectList';
import {addTodoToHTML} from './addTodoHTML';

function createTodoProject(projectName){
    return `
        <div class="project">${projectName}</div>
    `
}

const addTodoToProject = (e) => {
    const getTodoForm = e.target.parentElement;
    const contentDiv = getTodoForm.parentElement;
    const projectIdx = contentDiv.dataset.index;
    const todoPriorityInput = getTodoForm.querySelector('.todo-priority').querySelector('div').querySelectorAll('input[name="todo-priority"]');
    const todoDescription = getTodoForm.querySelector('.todo-description').value;
    const todoDueDate = getTodoForm.querySelector('.due-date').value;
    let todoPriority;
    contentDiv.removeChild(getTodoForm);
    todoPriorityInput.forEach((el)=> {
        if(el.checked){
            todoPriority = el.value;
        }
    });
    const newTodo = new todo(todoDescription, false, todoDueDate, todoPriority);
    
    todoListArr[projectIdx].todos.push(newTodo);
    console.log(todoListArr[projectIdx].todos);
    const newLiHTML = addTodoToHTML(projectIdx);
    contentDiv.appendChild(newLiHTML);
    return newTodo;
}

export {createTodoProject, addTodoToProject}