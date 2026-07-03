class Todo {
    constructor(description, completedStatus = false, dueDate = '', priority = 'low') {
        this.description = description;
        this.completedStatus = completedStatus;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export default Todo;