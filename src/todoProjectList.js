let todoListArr = [];
let todoAppInitiated = JSON.parse(localStorage.getItem('initiated'));

if(todoAppInitiated === null){
    localStorage.setItem('initiated', JSON.stringify('1'));
    localStorage.setItem('todos', JSON.stringify(todoListArr));
}

export default todoListArr
