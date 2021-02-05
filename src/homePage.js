import { hr } from 'date-fns/locale';
import todo from './todo';
import {logTodos, todoListArr} from './todoProject';

let completeDOT = `<i class="fas fa-circle"></i>`;

const homePage = () => {
    
}

const resetPageDisplay = () => {

}

const showTitles = () => {
    const projectList = document.createElement('div');
    todoListArr.forEach((project, idx)=>{
        const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.dataset.index = idx;
            const h5 = document.createElement('h5');
                h5.innerText = project.title;
                h5.addEventListener('click', showTodos)
                projectDiv.appendChild(h5);
        projectList.appendChild(projectDiv);
    })
    return projectList;
}

const showTodos = (e) => {
    const projectIdx = e.target.parentElement.dataset.index;
    if(!todoListArr[projectIdx].shown){
        todoListArr[projectIdx].shown = true;
        const todoListUl = document.createElement('ul');
            todoListUl.classList.add('todo-project');
        todoListArr[projectIdx].todos.forEach((todo, idx)=>{
            const li = document.createElement('li');
                li.classList.add('todo')
                li.innerHTML = `<i class="far fa-circle"></i>`;

            const deleteSpan = document.createElement('span');
                deleteSpan.classList.add('delete-todo');
                deleteSpan.innerHTML = `<i class="far fa-trash-alt"></i>`;
                deleteSpan.addEventListener('click', deleteTodo);

                const todoText = document.createElement('p');
                    todoText.innerText = `${todo[0]}`;
                    todoText.addEventListener('click', markComplete);
                
                li.dataset.index = idx;
                li.appendChild(todoText);
                li.appendChild(deleteSpan);
                todoListUl.appendChild(li);
        });
        e.target.parentElement.appendChild(todoListUl);

    } else {
        todoListArr[projectIdx].shown = false;
        const oldChild = e.target.parentElement.querySelector('ul');
        oldChild.parentNode.removeChild(oldChild)
    }
}

const markComplete = (e) => {
    const parentLI = e.target.parentElement;
    const parentLiIdx = parentLI.dataset.index;
    const projectIdx = parentLI.parentElement.parentElement.dataset.index;

    if(todoListArr[projectIdx].todos[parentLiIdx][1] === false){
        todoListArr[projectIdx].todos[parentLiIdx][1] = true;
        parentLI.classList.add('todo-complete');
    } else if(todoListArr[projectIdx].todos[parentLiIdx][1] === true){
        todoListArr[projectIdx].todos[parentLiIdx][1] = false;
        parentLI.classList.remove('todo-complete');
    }
}

const deleteTodo = (e) =>{
    const parentLI = e.target.parentElement.parentElement;
    const parentLiIdx = parentLI.dataset.index;
    const projectUl = parentLI.parentElement;
    const projectIdx = parentLI.parentElement.parentElement.dataset.index;

    projectUl.removeChild(parentLI);
    todoListArr[projectIdx].todos.splice(parentLiIdx, 1);
    console.log(todoListArr[projectIdx].todos)
}


const addNewTodo = () =>{

}

const addNewProject = () => {
    console.log(`You clicked the button!`);
}

export {homePage, showTitles, showTodos, addNewProject, resetPageDisplay}