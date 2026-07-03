import Todo from './todo';

class TodoProject {
    constructor(title = 'Untitled Project', shown = false, todos = []) {
        this.title = title;
        this.shown = shown;
        this.todos = todos;
    }
}

// Initialize and seed LocalStorage on first run
function initializeStorage() {
    const isInitiated = localStorage.getItem('taskflow_initiated');
    if (!isInitiated) {
        localStorage.setItem('taskflow_initiated', '1');
        const existingTodos = JSON.parse(localStorage.getItem('todos'));
        if (!existingTodos || existingTodos.length === 0) {
            const firstProject = new TodoProject('Personal Tasks', false, [
                new Todo('Buy Groceries', false, new Date(Date.now() + 86400000).toISOString().split('T')[0], 'medium'),
                new Todo('Schedule Dentist Appointment', false, new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], 'low')
            ]);
            const secondProject = new TodoProject('Work & Projects', false, [
                new Todo('Prepare Weekly Report', false, new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0], 'high'),
                new Todo('Review Pull Requests', true, new Date().toISOString().split('T')[0], 'medium')
            ]);
            localStorage.setItem('todos', JSON.stringify([firstProject, secondProject]));
            localStorage.setItem('activeProjectIdx', '0');
        }
    }
}

// Run storage initialization
initializeStorage();

export { TodoProject, initializeStorage };