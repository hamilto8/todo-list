import createTodoProject from './addTodoLogic';

const addTodoHTML = () => {
    return `
        <div>
            <form id="add-todo-project-form">
                <label for="new-todo">Add Your Project here</label>
                <input id="new-todo" type="text"/>
            </form>
        </div>
    `
}

export default addTodoHTML