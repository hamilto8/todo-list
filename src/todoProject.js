let todoListArr = [
    {
    title: "My First Project", 
    shown: false,
    todos: [['Buy milk', false], ['Put gas in car', false]]
    }, 
    {
        title: "My Second Project",
        todos: [['Eat at Wendy\'s', false], ['Ride into the sunset', false]]
    }
];

let todoProjectListUl = document.createElement('ul');

todoListArr.forEach((el, idx)=>{
    // TBD
    
});

function logTodos(){
    
}

const todoProject = () => {
    
}

export {todoProjectListUl, logTodos, todoListArr}