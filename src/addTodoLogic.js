import todo from './todo';
// import todoListArr from './todoProjectList';
import {addTodoToHTML} from './addTodoHTML';
import {showTitles} from './homePage';


function createTodoProject(projectName){
    return `
    <div class="project">${projectName}</div>
    `
}

const addTodoToProject = (e) => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    const getTodoForm = e.target.parentElement;
    const contentDiv = getTodoForm.parentElement;
    const consentVid = document.querySelector('#content');
    const projectIdx = contentDiv.dataset.index;
    const todoPriorityInput = getTodoForm.querySelector('.todo-priority').querySelector('div').querySelectorAll('input[name="todo-priority"]');
    const todoDescription = getTodoForm.querySelector('.todo-description').value;
    const todoDueDate = getTodoForm.querySelector('.due-date').value;
    let todoPriority;
    // contentDiv.removeChild(getTodoForm);
    todoPriorityInput.forEach((el)=> {
        if(el.checked){
            todoPriority = el.value;
        }
    });
    const newTodo = new todo(todoDescription, false, todoDueDate, todoPriority);
    
    localStorageArr[projectIdx].todos.push(JSON.stringify(newTodo));
    localStorage.setItem('todos', JSON.stringify(localStorageArr));
    // console.log(consentVid);
    // contentDiv.innerHTML = '';
    // contentDiv.appendChild(showTitles());
    // const newLiHTML = addTodoToHTML(projectIdx);
    // contentDiv.appendChild(newLiHTML);
    consentVid.innerHTML = '';
    consentVid.appendChild(showTitles());
    console.log(JSON.parse(localStorage.getItem('todos')));
    return newTodo;
}

export {createTodoProject, addTodoToProject}