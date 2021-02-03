import { hr } from 'date-fns/locale';
import todo from './todo';
import {logTodos, todoListArr} from './todoProject';

const homePage = () => {
    
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
        todoListArr[projectIdx].todos.forEach((todo, idx)=>{
            let li = document.createElement('li');
                li.dataset.index = idx;
                li.innerText = todo[0];
                todoListUl.appendChild(li);
        });
        e.target.parentElement.appendChild(todoListUl);

    } else {
        todoListArr[projectIdx].shown = false;
        let oldChild = e.target.parentElement.querySelector('ul');
        oldChild.parentNode.removeChild(oldChild)
    }
}

const deleteTodo = (e) =>{

}

const markComplete = (e) => {

}

const addNewTodo = () =>{

}

const addNewProject = () => {

}

export {homePage, showTitles, showTodos}