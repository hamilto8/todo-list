let todoListArr = [];

class todoProject {
    constructor(title = 'Untitled Project', shown = false, todos = []){
        this.title = title;
        this.shown = shown;
        this.todos = todos;
    }
}

const firstProject = new todoProject('My First Project', 
    false, [
    ['Buy milk', false], 
    ['Put gas in car', false]]);
const secondProject = new todoProject('My Second Project', 
    false, [
    ['Eat at Wendy\'s', false], 
    ['Ride into the sunset', false]]);

todoListArr.push(firstProject);
todoListArr.push(secondProject);

let todoProjectListUl = document.createElement('ul');

export {todoProjectListUl, todoListArr, todoProject}