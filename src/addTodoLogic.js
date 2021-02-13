import todo from './todo';

function createTodoProject(projectName){
    return `
        <div class="project">${projectName}</div>
    `
}

const addTodoToProject = (e) => {
    const getTodoForm = e.target.parentElement;
    const contentDiv = getTodoForm.parentElement;
    const todoDescription = getTodoForm.querySelector('.todo-description').value;
    const todoDueDate = getTodoForm.querySelector('.due-date').value;

    const newTodo = new todo(todoDescription, false, todoDueDate, 'low');
    contentDiv.removeChild(getTodoForm);
    console.log("Adding the todo!");
    return newTodo;
}

export {createTodoProject, addTodoToProject}