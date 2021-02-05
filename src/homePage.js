import { hr } from 'date-fns/locale';
import todo from './todo';
import {logTodos, todoListArr} from './todoProject';

let completeDOT = `<i class="fas fa-circle"></i>`;

const homePage = () => {
    
}

const resetPageDisplay = () => {

}

const showTitles = () => {
    let projectList = document.createElement('div');
    todoListArr.forEach((project, idx)=>{
        let projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.dataset.index = idx;
            let h5 = document.createElement('h5');
                h5.innerText = project.title;
                h5.addEventListener('click', showTodos)
                projectDiv.appendChild(h5);
        projectList.appendChild(projectDiv);
    })
    return projectList;
}

const showTodos = (e) => {
    let projectIdx = e.target.parentElement.dataset.index;
    if(!todoListArr[projectIdx].shown){
        todoListArr[projectIdx].shown = true;
        let todoListUl = document.createElement('ul');
            todoListUl.classList.add('todo-project');
        todoListArr[projectIdx].todos.forEach((todo, idx)=>{
            let li = document.createElement('li');
                li.classList.add('todo')
                li.innerHTML = `<i class="far fa-circle"></i>`;

            let deleteSpan = document.createElement('span');
                deleteSpan.classList.add('delete-todo');
                deleteSpan.innerHTML = `<i class="far fa-trash-alt"></i>`;
                deleteSpan.addEventListener('click', deleteTodo);

                let todoText = document.createElement('p');
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
        let oldChild = e.target.parentElement.querySelector('ul');
        oldChild.parentNode.removeChild(oldChild)
    }
}

const markComplete = (e) => {
    let parentLI = e.target.parentElement;
    let parentLiIdx = parentLI.dataset.index;
    let projectIdx = parentLI.parentElement.parentElement.dataset.index;

    if(todoListArr[projectIdx].todos[parentLiIdx][1] === false){
        todoListArr[projectIdx].todos[parentLiIdx][1] = true;
        parentLI.classList.add('todo-complete');
    } else if(todoListArr[projectIdx].todos[parentLiIdx][1] === true){
        todoListArr[projectIdx].todos[parentLiIdx][1] = false;
        parentLI.classList.remove('todo-complete');
    }
}

const deleteTodo = (e) =>{
    let parentLI = e.target.parentElement.parentElement;
    let parentLiIdx = parentLI.dataset.index;
    let projectIdx = parentLI.parentElement.parentElement.dataset.index;

    // todoListArr[projectIdx].todos.splice(parentLiIdx, 1);
    console.log('You clicked Delete Todo')
}


const addNewTodo = () =>{

}

const addNewProject = () => {
    console.log(`You clicked the button!`);
}

export {homePage, showTitles, showTodos, addNewProject, resetPageDisplay}