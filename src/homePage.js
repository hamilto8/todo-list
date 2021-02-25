import { hr } from 'date-fns/locale';
import todo from './todo';
import {getTodoForm} from './getTodoForm';
import {logTodos, todoListArr, todoProject} from './todoProject';
import {editTodoForm} from './editTodo';

let completeDOT = `<i class="fas fa-circle"></i>`;

// let localStorageArr = JSON.parse(localStorage.getItem('todos'));

const homePage = () => {
    
}

const showTitles = () => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    const projectList = document.createElement('div');
        projectList.classList.add('project-list');
    localStorageArr.forEach((project, idx)=>{
        const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.dataset.index = idx;
        const titleSpan = document.createElement('span');
            titleSpan.classList.add('project-title');
        const h5 = document.createElement('h5');
            h5.innerText = project.title;
        
        titleSpan.appendChild(h5);
        titleSpan.addEventListener('click', showTodos)
        
        projectDiv.appendChild(titleSpan);
        projectList.appendChild(projectDiv);
    });
    return projectList;
}

const showTodos = (e) => {
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    const projectIdx = e.target.parentElement.parentElement.dataset.index;
    if(!localStorageArr[projectIdx].shown){
        localStorageArr[projectIdx].shown = true;
        const project = e.target.parentElement.parentElement.querySelector('.project-title');
        
        const addNewTodoBtn = document.createElement('div');
        addNewTodoBtn.classList.add('add-todo-btn');
        addNewTodoBtn.innerHTML = `<i class="fas fa-plus"></i>`;
        addNewTodoBtn.addEventListener('click', addNewTodo);
        project.appendChild(addNewTodoBtn);

        const todoListUl = document.createElement('ul');
            todoListUl.classList.add('todo-project');
        localStorageArr[projectIdx].todos.forEach((todo, idx)=>{
            const li = document.createElement('li');
                li.classList.add('todo')
                if(JSON.parse(localStorageArr[projectIdx].todos[idx]).completedStatus){
                    li.classList.add('todo-complete');
                }
                li.innerHTML = `<i class="far fa-circle"></i>`;
            const deleteSpan = document.createElement('span');
                deleteSpan.classList.add('delete-todo');
                deleteSpan.innerHTML = `<i class="far fa-trash-alt"></i>`;
                deleteSpan.addEventListener('click', deleteTodo);
            
            const editTodoSpan = document.createElement('span');
                editTodoSpan.classList.add('edit-todo');
                editTodoSpan.innerHTML = `<i class="fas fa-edit"></i>`;
                editTodoSpan.addEventListener('click', editTodoForm);
                
                const todoTitle = JSON.parse(todo).description;
                const dueDate = JSON.parse(todo).dueDate;
                const todoPriority = JSON.parse(todo).priority;

                const todoText = document.createElement('p');
                    todoText.innerHTML = `<strong>Todo:</strong> ${todoTitle} -- <strong>Due:</strong> ${dueDate} -- <strong>Priority:</strong> <span class="todo-priority">${todoPriority}</span>`;
                    todoText.addEventListener('click', markComplete);

                
                li.dataset.index = idx;
                li.appendChild(todoText);
                li.appendChild(deleteSpan);
                li.appendChild(editTodoSpan);
                todoListUl.appendChild(li);
        });
        localStorage.setItem('todos', JSON.stringify(localStorageArr));
        e.target.parentElement.parentElement.appendChild(todoListUl);

    } else {
        let localStorageArr = JSON.parse(localStorage.getItem('todos'));
        localStorageArr[projectIdx].shown = false;
        const project = e.target.parentElement.parentElement;
        const oldChild = e.target.parentElement.parentElement.querySelector('ul');
        const addBtn = e.target.parentElement.parentElement.querySelector('.add-todo-btn');
        oldChild.parentNode.removeChild(oldChild);
        addBtn.parentNode.removeChild(addBtn);
        localStorage.setItem('todos', JSON.stringify(localStorageArr));
    }
}

const markComplete = (e) => {
    const parentLI = e.target.parentElement;
    const parentLiIdx = parentLI.dataset.index;
    const projectIdx = parentLI.parentElement.parentElement.dataset.index;

    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    let localTodo = JSON.parse(localStorageArr[projectIdx].todos[parentLiIdx]);

    if(localTodo.completedStatus === false){
        localTodo.completedStatus = true;
        localStorageArr[projectIdx].todos[parentLiIdx] = JSON.stringify(localTodo);
        localStorage.setItem('todos', JSON.stringify(localStorageArr));
        parentLI.classList.add('todo-complete');
    } else if(localTodo.completedStatus === true){
        localTodo.completedStatus = false;
        localStorageArr[projectIdx].todos[parentLiIdx] = JSON.stringify(localTodo);
        localStorage.setItem('todos', JSON.stringify(localStorageArr));
        parentLI.classList.remove('todo-complete');
    }
}

const deleteTodo = (e) =>{
    const parentLI = e.target.parentElement.parentElement;
    const parentLiIdx = parentLI.dataset.index;
    const projectUl = parentLI.parentElement;
    const mainProject = parentLI.parentElement.parentElement;
    const project = parentLI.parentElement.parentElement.querySelector('.todo-project');
    const projectTitle = parentLI.parentElement.parentElement.querySelector('.project-title');
    const addBtn = parentLI.parentElement.parentElement.querySelector('.add-todo-btn');
    const projectIdx = parentLI.parentElement.parentElement.dataset.index;
    
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    
    localStorageArr[projectIdx].todos.splice(parentLiIdx, 1);
    localStorageArr[projectIdx].shown = false;
    localStorage.setItem('todos', JSON.stringify(localStorageArr));
    projectTitle.removeChild(addBtn);
    mainProject.removeChild(project);
}

const editTodo = (e) =>{
    console.log('editing the todo...');
}


const addNewTodo = (e) =>{
    const project = e.target.parentElement.parentElement.parentElement;
    const contentDiv = project.parentElement.parentElement;
    const projectUl = project.querySelector('ul');
    const projectIdx = e.target.parentElement.parentElement.parentElement.dataset.index;

    // console.log('adding...')
    project.appendChild(getTodoForm());
}

const addTodoToProject = () => {
    
}

const addNewProject = () => {
    const projectListDiv = document.querySelector('.project-list');
    const contentDiv = document.querySelector('#content');
    
    contentDiv.removeChild(projectListDiv);

    const addNewProjectDiv = document.createElement('div');
        addNewProjectDiv.classList.add('add-new-project');

    const projectP = document.createElement('p');
            projectP.innerText = 'You are Adding a New Project!';

    let inputProject = document.createElement('input');
        inputProject.type = 'text';
        inputProject.classList.add('new-project-title');
        inputProject.placeholder = 'Enter your project name here';
        inputProject.addEventListener('keydown', e => {
            if(e.key === 'Enter'){
                if(e.target.value !== ''){
                    confirmAdd(e);
                }
            }
        });


    const confirmAddBtn = document.createElement('button');
        confirmAddBtn.innerText = 'Confirm!'
        confirmAddBtn.addEventListener('click', confirmAdd);

        addNewProjectDiv.appendChild(projectP)
        addNewProjectDiv.appendChild(inputProject);
        addNewProjectDiv.appendChild(confirmAddBtn);

        return addNewProjectDiv
}

const confirmAdd = (e)=>{
    const newProjTitle = e.target.parentElement.querySelector('.new-project-title').value;
    const contentDiv = document.querySelector('#content')
    const addNewProjectDiv = document.querySelector('.add-new-project');

    if(newProjTitle.length > 0){
        const newProj = new todoProject(newProjTitle, false, []);
        let localStorageArr = JSON.parse(localStorage.getItem('todos'));
        localStorageArr.push(newProj);
        localStorage.setItem('todos', JSON.stringify(localStorageArr));
        console.log(todoListArr);
    }
    contentDiv.removeChild(addNewProjectDiv);

    contentDiv.appendChild(showTitles());
    
}

const deleteProject = (e) => {
    const contentDiv = e.target.parentElement.parentElement.querySelector('#content');
    const projectListDiv = contentDiv.querySelector('.project-list');
    contentDiv.removeChild(projectListDiv);
    
    const removeProjectPage = document.createElement('div');
        removeProjectPage.classList.add('remove-project-page');
        removeProjectPage.innerHTML = `<p>Choose a Project to Remove</p>`;
    
    const goBackButton = document.createElement('button');
        goBackButton.classList.add('go-back-button');
        goBackButton.innerText = "Go Back";
        goBackButton.addEventListener('click', returnToHome);
    
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));

    localStorageArr.forEach((project, idx) => {
        const title = project.title;
        const titleDiv = document.createElement('div');
            titleDiv.classList.add('remove-project-title')
            titleDiv.innerHTML = `
                <div class="title-div">  
                    <i class="fas fa-circle"></i>
                    <p>${title}</p>
                </div>
            `;
            titleDiv.dataset.index = idx;
            titleDiv.addEventListener('click', confirmRemoveProject);
        removeProjectPage.appendChild(titleDiv);
    });

    contentDiv.appendChild(removeProjectPage);
    contentDiv.appendChild(goBackButton);
}

const returnToHome = (e) => {
    const contentDiv = e.target.parentElement;
    const removeProjectPage = contentDiv.querySelector('.remove-project-page');
    const goBackBtn = e.target;
    contentDiv.removeChild(goBackBtn);
    contentDiv.removeChild(removeProjectPage);
    contentDiv.appendChild(showTitles());
}

const confirmRemoveProject = (e) =>{
    const contentDiv = e.target.parentElement.parentElement.parentElement.parentElement;
    const removeProjectPage = contentDiv.querySelector('.remove-project-page');
    const goBackBtn = contentDiv.querySelector('.go-back-button');
    const projectIdx = e.target.parentElement.parentElement.dataset.index;
    const projectTitle = todoListArr[projectIdx].title;

    let localStorageArr = JSON.parse(localStorage.getItem('todos'));

    localStorageArr.splice(projectIdx, 1);
    localStorage.setItem('todos', JSON.stringify(localStorageArr));

    contentDiv.removeChild(removeProjectPage);
    contentDiv.removeChild(goBackBtn);
    const removeP = document.createElement('p');
        removeP.innerText = `Project "${projectTitle}" Removed!`;
        removeP.classList.add('remove-message');

        contentDiv.appendChild(removeP);
        contentDiv.appendChild(showTitles());
        setTimeout(() => {
            contentDiv.removeChild(removeP);
        }, 1000);
}

export {homePage, showTitles, showTodos, addNewProject, deleteProject, deleteTodo, markComplete}