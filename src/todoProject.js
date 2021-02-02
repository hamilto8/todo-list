let todoListArr = [['Buy milk', true], ['Put gas in car', false]];

let todoProjectListUl = document.createElement('ul');

todoListArr.forEach((el, idx)=>{
    let li = document.createElement('li');
    li.innerText = el[0];
    if(el[1]){
        li.innerHTML += `<p data-index=${idx}>O</p>`
    } else {
        li.innerHTML += `<p data-index=${idx}>X</p>`
    }
    todoProjectListUl.appendChild(li);
});

function logTodos(){
    console.log(todoProjectListUl);
}

const todoProject = () => {
    return todoProjectListUl
}

export {todoProjectListUl, logTodos}