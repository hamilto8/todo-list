import { hr } from 'date-fns/locale';
import todo from './todo';
import {logTodos, todoListArr} from './todoProject';

let completeDOT = `<i class="fas fa-circle"></i>`;

const homePage = () => {
    
}

const showTitles = () => {
    const projectList = document.createElement('div');
        projectList.classList.add('project-list');
    todoListArr.forEach((project, idx)=>{
        const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.dataset.index = idx;
        const titleSpan = document.createElement('span');
            titleSpan.classList.add('project-title');
        const h5 = document.createElement('h5');
            h5.innerText = project.title;
            // h5.addEventListener('click', showTodos);
        
        titleSpan.appendChild(h5);
        titleSpan.addEventListener('click', showTodos)

        
        projectDiv.appendChild(titleSpan);
        projectList.appendChild(projectDiv);
        

    })
    return projectList;
}

const showTodos = (e) => {
    const projectIdx = e.target.parentElement.parentElement.dataset.index;
    if(!todoListArr[projectIdx].shown){
        todoListArr[projectIdx].shown = true;
        const project = e.target.parentElement.parentElement.querySelector('.project-title');
        
        const addNewTodoBtn = document.createElement('div');
        addNewTodoBtn.classList.add('add-todo-btn');
        addNewTodoBtn.innerHTML = `<i class="fas fa-plus"></i>`;
        addNewTodoBtn.addEventListener('click', addNewTodo);
        project.appendChild(addNewTodoBtn);

        const todoListUl = document.createElement('ul');
            todoListUl.classList.add('todo-project');
        todoListArr[projectIdx].todos.forEach((todo, idx)=>{
            const li = document.createElement('li');
                li.classList.add('todo')
                if(todoListArr[projectIdx].todos[idx][1]){
                    li.classList.add('todo-complete');
                }
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
        e.target.parentElement.parentElement.appendChild(todoListUl);

    } else {
        todoListArr[projectIdx].shown = false;
        const project = e.target.parentElement.parentElement;
        const oldChild = e.target.parentElement.parentElement.querySelector('ul');
        const addBtn = e.target.parentElement.parentElement.querySelector('.add-todo-btn');
        oldChild.parentNode.removeChild(oldChild);
        addBtn.parentNode.removeChild(addBtn);
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


const addNewTodo = (e) =>{
    const project = e.target.parentElement.parentElement.parentElement;
    const projectUl = project.querySelector('ul');
    const projectIdx = e.target.parentElement.parentElement.parentElement.dataset.index;

    const newThingTodo = ['Eat some stew', false];

    todoListArr[projectIdx].todos.push(newThingTodo);

    const newLi = document.createElement('li');
        newLi.classList.add('todo');
        newLi.innerHTML = `<i class="far fa-circle"></i>`;

    const deleteSpan = document.createElement('span');
            deleteSpan.classList.add('delete-todo');
            deleteSpan.innerHTML = `<i class="far fa-trash-alt"></i>`;
            deleteSpan.addEventListener('click', deleteTodo);

    const todoText = document.createElement('p');
            todoText.innerText = `${newThingTodo[0]}`;
            todoText.addEventListener('click', markComplete);
        
        newLi.dataset.index = todoListArr[projectIdx].todos.length - 1;
        newLi.appendChild(todoText);
        newLi.appendChild(deleteSpan);

        projectUl.appendChild(newLi);
}

const showAddTodoForm = () => {
    
}

const addNewProject = () => {
    const projectListDiv = document.querySelector('.project-list');
        projectListDiv.style.display = 'none';

    const addNewProjectDiv = document.createElement('div');
        addNewProjectDiv.classList.add('add-new-project');

    const projectP = document.createElement('p');
            projectP.innerText = 'You are Adding a New Project!';

    const confirmAddBtn = document.createElement('button');
        confirmAddBtn.innerText = 'Confirm!'
        confirmAddBtn.addEventListener('click', confirmAdd);

        addNewProjectDiv.appendChild(projectP)
        addNewProjectDiv.appendChild(confirmAddBtn);

        return addNewProjectDiv
}

const confirmAdd = ()=>{
    const contentDiv = document.querySelector('#content')
    const addNewProjectDiv = document.querySelector('.add-new-project');
    contentDiv.removeChild(addNewProjectDiv);
    
    const projectListDiv = document.querySelector('.project-list');
    projectListDiv.style.display = 'block';
    
    console.log('confirmed!');
}

export {homePage, showTitles, showTodos, addNewProject}