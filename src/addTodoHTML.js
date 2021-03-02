import { add } from 'date-fns';
import createTodoProject from './addTodoLogic';
import {deleteTodo, markComplete} from './homePage';
import {editTodoForm} from './editTodo';

const addNewProject = () => {
    console.log(`You clicked the button!`);
}

const addTodoToHTML = (idx, todo) => {
    
    let localStorageArr = JSON.parse(localStorage.getItem('todos'));
    let todoIdx = localStorageArr[idx].todos.length-1;
    const newLi = document.createElement('li');
        newLi.classList.add('todo');
        newLi.innerHTML = `<i class="far fa-circle"></i>`;

    const deleteSpan = document.createElement('span');
            deleteSpan.classList.add('delete-todo');
            deleteSpan.innerHTML = `<i class="far fa-trash-alt"></i>`;
            deleteSpan.addEventListener('click', deleteTodo);

    const editTodoSpan = document.createElement('span');
        editTodoSpan.classList.add('edit-todo');
        editTodoSpan.innerHTML = `<i class="fas fa-edit"></i>`;
        editTodoSpan.addEventListener('click', editTodoForm);

    const todoTitle = todo.description;
    const dueDate = todo.dueDate;
    const todoPriority = todo.priority;

    const todoText = document.createElement('p');
        todoText.innerHTML = `<strong>Todo:</strong> ${todoTitle} -- <strong>Due:</strong> ${dueDate} -- <strong>Priority:</strong> <span class="todo-priority">${todoPriority}</span>`;
        todoText.addEventListener('click', markComplete);

        newLi.dataset.index = todoIdx;
            newLi.appendChild(todoText);
            newLi.appendChild(deleteSpan);
            newLi.appendChild(editTodoSpan);

    return newLi;     
}

export {addNewProject, addTodoToHTML}