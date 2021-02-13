const getTodoForm = () =>{
    const todoForm = `
    <div class="get-todo-form">
        <input class="todo-description" placeholder="Todo Description" type="text"/>
        <input class="due-date" type="date"/>
        <div class="todo-priority">
            <p>Priority</p>
            <div>
            <input id="low" name="todo-priority" value="low" type="radio" checked/>
            <label for="low">Low</label>
            <input id="medium" name="todo-priority" value="medium" type="radio" />
            <label for="medium">Medium</label>
            <input id="high" name="todo-priority" value="high" type="radio" />
            <label for="high">High</label>
            </div>
        </div>
        <button class="confirm-todo">Confirm</button>
    </div>
    `;
    return todoForm;
}

export default getTodoForm