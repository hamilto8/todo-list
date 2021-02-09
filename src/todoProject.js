let todoListArr = [
    {
    title: "My First Project", 
    shown: false,
    todos: [['Buy milk', false], ['Put gas in car', false]]
    }, 
    {
        title: "My Second Project",
        shown: false,
        todos: [['Eat at Wendy\'s', false], ['Ride into the sunset', false]]
    }
];

class todoProject {
    constructor(title, shown = false, todos = []){
        this.title = title;
        this.shown = shown;
        this.todos = todos;
    }
}

let todoProjectListUl = document.createElement('ul');

// const todoProject = () => {
    
// }

export {todoProjectListUl, todoListArr, todoProject}