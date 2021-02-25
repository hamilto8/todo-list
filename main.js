/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTodoHTML.js":
/*!****************************!*\
  !*** ./src/addTodoHTML.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"addTodoToHTML\": () => (/* binding */ addTodoToHTML)\n/* harmony export */ });\n/* harmony import */ var _addTodoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoLogic */ \"./src/addTodoLogic.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n\r\n\r\n\r\n// import todoListArr from './todoProjectList';\r\n\r\n\r\nconst addNewProject = () => {\r\n    console.log(`You clicked the button!`);\r\n}\r\n\r\nconst addTodoToHTML = (projectIdx) => {\r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n    const newLi = document.createElement('li');\r\n        newLi.classList.add('todo');\r\n        newLi.innerHTML = `<i class=\"far fa-circle\"></i>`;\r\n\r\n    const deleteSpan = document.createElement('span');\r\n            deleteSpan.classList.add('delete-todo');\r\n            deleteSpan.innerHTML = `<i class=\"far fa-trash-alt\"></i>`;\r\n            deleteSpan.addEventListener('click', _homePage__WEBPACK_IMPORTED_MODULE_1__.deleteTodo);\r\n\r\n    const todoText = document.createElement('p');\r\n            todoText.innerText = `${JSON.parse(localStorageArr[projectIdx].todos[0]).description}`;\r\n            todoText.addEventListener('click', _homePage__WEBPACK_IMPORTED_MODULE_1__.markComplete);\r\n        \r\n        newLi.dataset.index = JSON.parse(localStorageArr[projectIdx].todos).length - 1;\r\n        newLi.appendChild(todoText);\r\n        newLi.appendChild(deleteSpan);\r\n\r\n    return newLi;     \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/addTodoHTML.js?");

/***/ }),

/***/ "./src/addTodoLogic.js":
/*!*****************************!*\
  !*** ./src/addTodoLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoProject\": () => (/* binding */ createTodoProject),\n/* harmony export */   \"addTodoToProject\": () => (/* binding */ addTodoToProject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _addTodoHTML__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoHTML */ \"./src/addTodoHTML.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n\r\n// import todoListArr from './todoProjectList';\r\n\r\n\r\n\r\n\r\nfunction createTodoProject(projectName){\r\n    return `\r\n    <div class=\"project\">${projectName}</div>\r\n    `\r\n}\r\n\r\nconst addTodoToProject = (e) => {\r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n    const getTodoForm = e.target.parentElement;\r\n    const contentDiv = getTodoForm.parentElement;\r\n    const consentVid = document.querySelector('#content');\r\n    const projectIdx = contentDiv.dataset.index;\r\n    const todoPriorityInput = getTodoForm.querySelector('.todo-priority').querySelector('div').querySelectorAll('input[name=\"todo-priority\"]');\r\n    const todoDescription = getTodoForm.querySelector('.todo-description').value;\r\n    const todoDueDate = getTodoForm.querySelector('.due-date').value;\r\n    let todoPriority;\r\n    // contentDiv.removeChild(getTodoForm);\r\n    todoPriorityInput.forEach((el)=> {\r\n        if(el.checked){\r\n            todoPriority = el.value;\r\n        }\r\n    });\r\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todoDescription, false, todoDueDate, todoPriority);\r\n    \r\n    localStorageArr[projectIdx].todos.push(JSON.stringify(newTodo));\r\n    localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n    // console.log(consentVid);\r\n    // contentDiv.innerHTML = '';\r\n    // contentDiv.appendChild(showTitles());\r\n    // const newLiHTML = addTodoToHTML(projectIdx);\r\n    // contentDiv.appendChild(newLiHTML);\r\n    consentVid.innerHTML = '';\r\n    consentVid.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_2__.showTitles)());\r\n    console.log(JSON.parse(localStorage.getItem('todos')));\r\n    return newTodo;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/addTodoLogic.js?");

/***/ }),

/***/ "./src/editTodo.js":
/*!*************************!*\
  !*** ./src/editTodo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editTodoForm\": () => (/* binding */ editTodoForm),\n/* harmony export */   \"confirmEdits\": () => (/* binding */ confirmEdits)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n// import todoListArr from './todoProjectList';\r\n\r\n\r\nconst editTodoForm = (e) => {\r\n    const contentDiv = document.querySelector('#content');\r\n    const selectedTodo = e.target.parentElement.parentElement;\r\n    const selectedTodoIdx = selectedTodo.dataset.index;\r\n    const projectIdx = selectedTodo.parentElement.parentElement.dataset.index;\r\n    \r\n    const editTodoDiv = document.createElement('div');\r\n        editTodoDiv.classList.add('edit-todo-form');\r\n    \r\n    const projectLabel = document.createElement('span');\r\n        projectLabel.classList.add('edit-project-label');\r\n        projectLabel.dataset.index = projectIdx;\r\n\r\n    const todoLabel = document.createElement('span');\r\n        todoLabel.classList.add('edit-todo-label');\r\n        todoLabel.dataset.index = selectedTodoIdx;\r\n\r\n    const editPage = `<p>Edit Todo Information Here</p>`;\r\n\r\n    editTodoDiv.innerHTML += editPage;\r\n\r\n    const editTodoDescription = document.createElement('input');\r\n        editTodoDescription.classList.add('edit-description');\r\n        editTodoDescription.type = 'text';\r\n        editTodoDescription.value = todoListArr[projectIdx].todos[selectedTodoIdx].description;\r\n\r\n    const editTodoDueDate = document.createElement('input');\r\n        editTodoDueDate.classList.add('edit-date');\r\n        editTodoDueDate.type = 'date';\r\n        editTodoDueDate.value = todoListArr[projectIdx].todos[selectedTodoIdx].dueDate;\r\n\r\n    \r\n    \r\n    const confirmEditBtn = document.createElement('button');\r\n        confirmEditBtn.classList.add('confirm-edit-btn');\r\n        confirmEditBtn.innerText = \"Confirm\";\r\n        confirmEditBtn.addEventListener('click', confirmEdits);\r\n\r\n    const todoPriority = selectedTodo.querySelector('p').querySelector('.todo-priority').innerText;\r\n    const todoPriorityForm = document.createElement('div');\r\n        todoPriorityForm.classList.add('edit-priority-form');\r\n        \r\n    const todoPriorityFormHTML = `\r\n            <p>Priority</p>\r\n            <div>\r\n            <input id=\"low\" name=\"todo-priority\" value=\"low\" type=\"radio\" checked/>\r\n            <label for=\"low\">Low</label>\r\n            <input id=\"medium\" name=\"todo-priority\" value=\"medium\" type=\"radio\" />\r\n            <label for=\"medium\">Medium</label>\r\n            <input id=\"high\" name=\"todo-priority\" value=\"high\" type=\"radio\" />\r\n            <label for=\"high\">High</label>\r\n            </div>\r\n    `;\r\n\r\n    todoPriorityForm.innerHTML = todoPriorityFormHTML;\r\n\r\n    editTodoDiv.appendChild(projectLabel);\r\n    editTodoDiv.appendChild(todoLabel);\r\n    editTodoDiv.appendChild(editTodoDescription);\r\n    editTodoDiv.appendChild(editTodoDueDate);\r\n    editTodoDiv.appendChild(todoPriorityForm);\r\n    editTodoDiv.appendChild(confirmEditBtn);\r\n\r\n    contentDiv.innerHTML = '';\r\n    contentDiv.appendChild(editTodoDiv);\r\n    // console.log(todoPriority);\r\n}\r\n\r\nconst confirmEdits = () => {\r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n    const contentDiv = document.querySelector('#content');\r\n    const editForm = document.querySelector('.edit-todo-form');\r\n    const newDescription = editForm.querySelector('.edit-description').value;\r\n    const newDate = editForm.querySelector('.edit-date').value;\r\n    const projectIdx = editForm.querySelector('.edit-project-label').dataset.index;\r\n    const todoIdx = editForm.querySelector('.edit-todo-label').dataset.index;\r\n    const editPriorityInput = editForm.querySelector('.edit-priority-form').querySelector('div').querySelectorAll('input[name=\"todo-priority\"]');\r\n\r\n    let todoPriority;\r\n    \r\n    editPriorityInput.forEach((el)=> {\r\n        if(el.checked){\r\n            todoPriority = el.value;\r\n        }\r\n    });\r\n\r\n    const confirmMessage = document.createElement('p');\r\n        confirmMessage.classList.add('confirm-message');\r\n        confirmMessage.innerText = 'Edits Saved';\r\n\r\n    let editsConfirmed = false;\r\n\r\n\r\n\r\n    console.log('confirming edits...');\r\n    \r\n    localStorageArr[projectIdx].todos[todoIdx].description = newDescription;\r\n    localStorageArr[projectIdx].todos[todoIdx].dueDate = newDate;\r\n    localStorageArr[projectIdx].todos[todoIdx].priority = todoPriority;\r\n    localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n    \r\n    contentDiv.innerHTML = '';\r\n    contentDiv.appendChild(confirmMessage);\r\n    setTimeout(() => {\r\n        contentDiv.innerHTML = '';\r\n        contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.showTitles)())\r\n    }, 1000);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/editTodo.js?");

/***/ }),

/***/ "./src/getTodoForm.js":
/*!****************************!*\
  !*** ./src/getTodoForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodoForm\": () => (/* binding */ getTodoForm)\n/* harmony export */ });\n/* harmony import */ var _addTodoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoLogic */ \"./src/addTodoLogic.js\");\n\r\n\r\nconst getTodoForm = () =>{\r\n    const todoForm = document.createElement('div');\r\n        todoForm.classList.add('get-todo-form');\r\n\r\n    const todoFormHTML = `\r\n        <input class=\"todo-description\" placeholder=\"Todo Description\" type=\"text\"/>\r\n        <input class=\"due-date\" type=\"date\"/>\r\n        <div class=\"todo-priority\">\r\n            <p>Priority</p>\r\n            <div>\r\n            <input id=\"low\" name=\"todo-priority\" value=\"low\" type=\"radio\" checked/>\r\n            <label for=\"low\">Low</label>\r\n            <input id=\"medium\" name=\"todo-priority\" value=\"medium\" type=\"radio\" />\r\n            <label for=\"medium\">Medium</label>\r\n            <input id=\"high\" name=\"todo-priority\" value=\"high\" type=\"radio\" />\r\n            <label for=\"high\">High</label>\r\n            </div>\r\n        </div>\r\n        `;\r\n\r\n        todoForm.innerHTML = todoFormHTML;\r\n        const confirmBTN = document.createElement('button');\r\n            confirmBTN.classList.add('confirm-todo');\r\n            confirmBTN.innerText = 'Confirm';\r\n            confirmBTN.addEventListener('click', _addTodoLogic__WEBPACK_IMPORTED_MODULE_0__.addTodoToProject);\r\n        \r\n        todoForm.appendChild(confirmBTN);\r\n\r\n    return todoForm;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/getTodoForm.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"showTitles\": () => (/* binding */ showTitles),\n/* harmony export */   \"showTodos\": () => (/* binding */ showTodos),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"markComplete\": () => (/* binding */ markComplete)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _getTodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTodoForm */ \"./src/getTodoForm.js\");\n/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoProject */ \"./src/todoProject.js\");\n/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTodo */ \"./src/editTodo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet completeDOT = `<i class=\"fas fa-circle\"></i>`;\r\n\r\n// let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n\r\nconst homePage = () => {\r\n    \r\n}\r\n\r\nconst showTitles = () => {\r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n    const projectList = document.createElement('div');\r\n        projectList.classList.add('project-list');\r\n    localStorageArr.forEach((project, idx)=>{\r\n        const projectDiv = document.createElement('div');\r\n            projectDiv.classList.add('project');\r\n            projectDiv.dataset.index = idx;\r\n        const titleSpan = document.createElement('span');\r\n            titleSpan.classList.add('project-title');\r\n        const h5 = document.createElement('h5');\r\n            h5.innerText = project.title;\r\n        \r\n        titleSpan.appendChild(h5);\r\n        titleSpan.addEventListener('click', showTodos)\r\n        \r\n        projectDiv.appendChild(titleSpan);\r\n        projectList.appendChild(projectDiv);\r\n    });\r\n    return projectList;\r\n}\r\n\r\nconst showTodos = (e) => {\r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n    const projectIdx = e.target.parentElement.parentElement.dataset.index;\r\n    if(!localStorageArr[projectIdx].shown){\r\n        localStorageArr[projectIdx].shown = true;\r\n        const project = e.target.parentElement.parentElement.querySelector('.project-title');\r\n        \r\n        const addNewTodoBtn = document.createElement('div');\r\n        addNewTodoBtn.classList.add('add-todo-btn');\r\n        addNewTodoBtn.innerHTML = `<i class=\"fas fa-plus\"></i>`;\r\n        addNewTodoBtn.addEventListener('click', addNewTodo);\r\n        project.appendChild(addNewTodoBtn);\r\n\r\n        const todoListUl = document.createElement('ul');\r\n            todoListUl.classList.add('todo-project');\r\n        localStorageArr[projectIdx].todos.forEach((todo, idx)=>{\r\n            const li = document.createElement('li');\r\n                li.classList.add('todo')\r\n                if(JSON.parse(localStorageArr[projectIdx].todos[idx]).completedStatus){\r\n                    li.classList.add('todo-complete');\r\n                }\r\n                li.innerHTML = `<i class=\"far fa-circle\"></i>`;\r\n            const deleteSpan = document.createElement('span');\r\n                deleteSpan.classList.add('delete-todo');\r\n                deleteSpan.innerHTML = `<i class=\"far fa-trash-alt\"></i>`;\r\n                deleteSpan.addEventListener('click', deleteTodo);\r\n            \r\n            const editTodoSpan = document.createElement('span');\r\n                editTodoSpan.classList.add('edit-todo');\r\n                editTodoSpan.innerHTML = `<i class=\"fas fa-edit\"></i>`;\r\n                editTodoSpan.addEventListener('click', _editTodo__WEBPACK_IMPORTED_MODULE_3__.editTodoForm);\r\n                \r\n                const todoTitle = JSON.parse(todo).description;\r\n                const dueDate = JSON.parse(todo).dueDate;\r\n                const todoPriority = JSON.parse(todo).priority;\r\n\r\n                const todoText = document.createElement('p');\r\n                    todoText.innerHTML = `<strong>Todo:</strong> ${todoTitle} -- <strong>Due:</strong> ${dueDate} -- <strong>Priority:</strong> <span class=\"todo-priority\">${todoPriority}</span>`;\r\n                    todoText.addEventListener('click', markComplete);\r\n\r\n                \r\n                li.dataset.index = idx;\r\n                li.appendChild(todoText);\r\n                li.appendChild(deleteSpan);\r\n                li.appendChild(editTodoSpan);\r\n                todoListUl.appendChild(li);\r\n        });\r\n        localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n        e.target.parentElement.parentElement.appendChild(todoListUl);\r\n\r\n    } else {\r\n        let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n        localStorageArr[projectIdx].shown = false;\r\n        const project = e.target.parentElement.parentElement;\r\n        const oldChild = e.target.parentElement.parentElement.querySelector('ul');\r\n        const addBtn = e.target.parentElement.parentElement.querySelector('.add-todo-btn');\r\n        oldChild.parentNode.removeChild(oldChild);\r\n        addBtn.parentNode.removeChild(addBtn);\r\n        localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n    }\r\n}\r\n\r\nconst markComplete = (e) => {\r\n    const parentLI = e.target.parentElement;\r\n    const parentLiIdx = parentLI.dataset.index;\r\n    const projectIdx = parentLI.parentElement.parentElement.dataset.index;\r\n\r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n    let localTodo = JSON.parse(localStorageArr[projectIdx].todos[parentLiIdx]);\r\n\r\n    if(localTodo.completedStatus === false){\r\n        localTodo.completedStatus = true;\r\n        localStorageArr[projectIdx].todos[parentLiIdx] = JSON.stringify(localTodo);\r\n        localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n        parentLI.classList.add('todo-complete');\r\n    } else if(localTodo.completedStatus === true){\r\n        localTodo.completedStatus = false;\r\n        localStorageArr[projectIdx].todos[parentLiIdx] = JSON.stringify(localTodo);\r\n        localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n        parentLI.classList.remove('todo-complete');\r\n    }\r\n}\r\n\r\nconst deleteTodo = (e) =>{\r\n    const parentLI = e.target.parentElement.parentElement;\r\n    const parentLiIdx = parentLI.dataset.index;\r\n    const projectUl = parentLI.parentElement;\r\n    const mainProject = parentLI.parentElement.parentElement;\r\n    const project = parentLI.parentElement.parentElement.querySelector('.todo-project');\r\n    const projectTitle = parentLI.parentElement.parentElement.querySelector('.project-title');\r\n    const addBtn = parentLI.parentElement.parentElement.querySelector('.add-todo-btn');\r\n    const projectIdx = parentLI.parentElement.parentElement.dataset.index;\r\n    \r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n    \r\n    localStorageArr[projectIdx].todos.splice(parentLiIdx, 1);\r\n    localStorageArr[projectIdx].shown = false;\r\n    localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n    projectTitle.removeChild(addBtn);\r\n    mainProject.removeChild(project);\r\n}\r\n\r\nconst editTodo = (e) =>{\r\n    console.log('editing the todo...');\r\n}\r\n\r\n\r\nconst addNewTodo = (e) =>{\r\n    const project = e.target.parentElement.parentElement.parentElement;\r\n    const contentDiv = project.parentElement.parentElement;\r\n    const projectUl = project.querySelector('ul');\r\n    const projectIdx = e.target.parentElement.parentElement.parentElement.dataset.index;\r\n\r\n    // console.log('adding...')\r\n    project.appendChild((0,_getTodoForm__WEBPACK_IMPORTED_MODULE_1__.getTodoForm)());\r\n}\r\n\r\nconst addTodoToProject = () => {\r\n    \r\n}\r\n\r\nconst addNewProject = () => {\r\n    const projectListDiv = document.querySelector('.project-list');\r\n    const contentDiv = document.querySelector('#content');\r\n    \r\n    contentDiv.removeChild(projectListDiv);\r\n\r\n    const addNewProjectDiv = document.createElement('div');\r\n        addNewProjectDiv.classList.add('add-new-project');\r\n\r\n    const projectP = document.createElement('p');\r\n            projectP.innerText = 'You are Adding a New Project!';\r\n\r\n    let inputProject = document.createElement('input');\r\n        inputProject.type = 'text';\r\n        inputProject.classList.add('new-project-title');\r\n        inputProject.placeholder = 'Enter your project name here';\r\n        inputProject.addEventListener('keydown', e => {\r\n            if(e.key === 'Enter'){\r\n                if(e.target.value !== ''){\r\n                    confirmAdd(e);\r\n                }\r\n            }\r\n        });\r\n\r\n\r\n    const confirmAddBtn = document.createElement('button');\r\n        confirmAddBtn.innerText = 'Confirm!'\r\n        confirmAddBtn.addEventListener('click', confirmAdd);\r\n\r\n        addNewProjectDiv.appendChild(projectP)\r\n        addNewProjectDiv.appendChild(inputProject);\r\n        addNewProjectDiv.appendChild(confirmAddBtn);\r\n\r\n        return addNewProjectDiv\r\n}\r\n\r\nconst confirmAdd = (e)=>{\r\n    const newProjTitle = e.target.parentElement.querySelector('.new-project-title').value;\r\n    const contentDiv = document.querySelector('#content')\r\n    const addNewProjectDiv = document.querySelector('.add-new-project');\r\n\r\n    if(newProjTitle.length > 0){\r\n        const newProj = new _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoProject(newProjTitle, false, []);\r\n        let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n        localStorageArr.push(newProj);\r\n        localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n        console.log(_todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr);\r\n    }\r\n    contentDiv.removeChild(addNewProjectDiv);\r\n\r\n    contentDiv.appendChild(showTitles());\r\n    \r\n}\r\n\r\nconst deleteProject = (e) => {\r\n    const contentDiv = e.target.parentElement.parentElement.querySelector('#content');\r\n    const projectListDiv = contentDiv.querySelector('.project-list');\r\n    contentDiv.removeChild(projectListDiv);\r\n    \r\n    const removeProjectPage = document.createElement('div');\r\n        removeProjectPage.classList.add('remove-project-page');\r\n        removeProjectPage.innerHTML = `<p>Choose a Project to Remove</p>`;\r\n    \r\n    const goBackButton = document.createElement('button');\r\n        goBackButton.classList.add('go-back-button');\r\n        goBackButton.innerText = \"Go Back\";\r\n        goBackButton.addEventListener('click', returnToHome);\r\n    \r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n\r\n    localStorageArr.forEach((project, idx) => {\r\n        const title = project.title;\r\n        const titleDiv = document.createElement('div');\r\n            titleDiv.classList.add('remove-project-title')\r\n            titleDiv.innerHTML = `\r\n                <div class=\"title-div\">  \r\n                    <i class=\"fas fa-circle\"></i>\r\n                    <p>${title}</p>\r\n                </div>\r\n            `;\r\n            titleDiv.dataset.index = idx;\r\n            titleDiv.addEventListener('click', confirmRemoveProject);\r\n        removeProjectPage.appendChild(titleDiv);\r\n    });\r\n\r\n    contentDiv.appendChild(removeProjectPage);\r\n    contentDiv.appendChild(goBackButton);\r\n}\r\n\r\nconst returnToHome = (e) => {\r\n    const contentDiv = e.target.parentElement;\r\n    const removeProjectPage = contentDiv.querySelector('.remove-project-page');\r\n    const goBackBtn = e.target;\r\n    contentDiv.removeChild(goBackBtn);\r\n    contentDiv.removeChild(removeProjectPage);\r\n    contentDiv.appendChild(showTitles());\r\n}\r\n\r\nconst confirmRemoveProject = (e) =>{\r\n    const contentDiv = e.target.parentElement.parentElement.parentElement.parentElement;\r\n    const removeProjectPage = contentDiv.querySelector('.remove-project-page');\r\n    const goBackBtn = contentDiv.querySelector('.go-back-button');\r\n    const projectIdx = e.target.parentElement.parentElement.dataset.index;\r\n    const projectTitle = _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].title;\r\n\r\n    let localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\n\r\n    localStorageArr.splice(projectIdx, 1);\r\n    localStorage.setItem('todos', JSON.stringify(localStorageArr));\r\n\r\n    contentDiv.removeChild(removeProjectPage);\r\n    contentDiv.removeChild(goBackBtn);\r\n    const removeP = document.createElement('p');\r\n        removeP.innerText = `Project \"${projectTitle}\" Removed!`;\r\n        removeP.classList.add('remove-message');\r\n\r\n        contentDiv.appendChild(removeP);\r\n        contentDiv.appendChild(showTitles());\r\n        setTimeout(() => {\r\n            contentDiv.removeChild(removeP);\r\n        }, 1000);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _addTodoLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoLogic */ \"./src/addTodoLogic.js\");\nconst contentDiv = document.querySelector('#content');\r\nconst addBtn = document.querySelector('.addBtn');\r\nconst homeBtn = document.querySelector('.homeBtn');\r\nconst deleteBtn = document.querySelector('.delete-btn');\r\n\r\n// import addNewProject from './addTodoHTML';\r\n\r\n\r\n\r\naddBtn.addEventListener('click', addTodoForm);\r\nhomeBtn.addEventListener('click', showHome);\r\ndeleteBtn.addEventListener('click', _homePage__WEBPACK_IMPORTED_MODULE_0__.deleteProject)\r\n\r\n\r\nfunction showHome(){\r\n    contentDiv.innerHTML = '';\r\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.showTitles)());\r\n}\r\n\r\nfunction addTodoForm(){\r\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.addNewProject)());\r\n}\r\n\r\nwindow.onload = () => {\r\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.showTitles)())\r\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass todo {\r\n   constructor(description, completedStatus, dueDate, priority){\r\n       this.description = description;\r\n       this.completedStatus = completedStatus;\r\n       this.dueDate = dueDate;\r\n       this.priority = priority;\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoProject.js":
/*!****************************!*\
  !*** ./src/todoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoProjectListUl\": () => (/* binding */ todoProjectListUl),\n/* harmony export */   \"todoListArr\": () => (/* reexport safe */ _todoProjectList__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"todoProject\": () => (/* binding */ todoProject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProjectList */ \"./src/todoProjectList.js\");\n\r\n\r\n\r\n// let todoListArr = [];\r\n\r\nclass todoProject {\r\n    constructor(title = 'Untitled Project', shown = false, todos = []){\r\n        this.title = title;\r\n        this.shown = shown;\r\n        this.todos = todos;\r\n    }\r\n}\r\n\r\nconst firstProject = new todoProject('My First Project', false);\r\nconst secondProject = new todoProject('My Second Project', false);\r\n\r\nconst firstTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default('Buy Milk', false, '2021-02-11', 'low');\r\nconst secondTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default('Go to work', false, '2022-03-01', 'low');\r\n\r\nfirstProject.todos.push(JSON.stringify(firstTodo));\r\nfirstProject.todos.push(JSON.stringify(secondTodo));\r\n\r\nlet localStorageArr = JSON.parse(localStorage.getItem('todos'));\r\nlocalStorageArr.push(firstProject);\r\nlocalStorage.setItem('todos', JSON.stringify(localStorageArr));\r\nlet todoProjectListUl = document.createElement('ul');\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoProject.js?");

/***/ }),

/***/ "./src/todoProjectList.js":
/*!********************************!*\
  !*** ./src/todoProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet todoListArr = [];\r\nlocalStorage.setItem('todos', JSON.stringify(todoListArr));\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoListArr);\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoProjectList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;