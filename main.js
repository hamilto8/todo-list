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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"addTodoToHTML\": () => (/* binding */ addTodoToHTML)\n/* harmony export */ });\n/* harmony import */ var _addTodoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoLogic */ \"./src/addTodoLogic.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _todoProjectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoProjectList */ \"./src/todoProjectList.js\");\n\r\n\r\n\r\n\r\n\r\nconst addNewProject = () => {\r\n    console.log(`You clicked the button!`);\r\n}\r\n\r\nconst addTodoToHTML = (projectIdx) => {\r\n    const newLi = document.createElement('li');\r\n        newLi.classList.add('todo');\r\n        newLi.innerHTML = `<i class=\"far fa-circle\"></i>`;\r\n\r\n    const deleteSpan = document.createElement('span');\r\n            deleteSpan.classList.add('delete-todo');\r\n            deleteSpan.innerHTML = `<i class=\"far fa-trash-alt\"></i>`;\r\n            deleteSpan.addEventListener('click', _homePage__WEBPACK_IMPORTED_MODULE_1__.deleteTodo);\r\n\r\n    const todoText = document.createElement('p');\r\n            todoText.innerText = `${_todoProjectList__WEBPACK_IMPORTED_MODULE_2__.default[projectIdx].todos[0].description}`;\r\n            todoText.addEventListener('click', _homePage__WEBPACK_IMPORTED_MODULE_1__.markComplete);\r\n        \r\n        newLi.dataset.index = _todoProjectList__WEBPACK_IMPORTED_MODULE_2__.default[projectIdx].todos.length - 1;\r\n        newLi.appendChild(todoText);\r\n        newLi.appendChild(deleteSpan);\r\n\r\n    return newLi;     \r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/addTodoHTML.js?");

/***/ }),

/***/ "./src/addTodoLogic.js":
/*!*****************************!*\
  !*** ./src/addTodoLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodoProject\": () => (/* binding */ createTodoProject),\n/* harmony export */   \"addTodoToProject\": () => (/* binding */ addTodoToProject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProjectList */ \"./src/todoProjectList.js\");\n/* harmony import */ var _addTodoHTML__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTodoHTML */ \"./src/addTodoHTML.js\");\n\r\n\r\n\r\n\r\nfunction createTodoProject(projectName){\r\n    return `\r\n        <div class=\"project\">${projectName}</div>\r\n    `\r\n}\r\n\r\nconst addTodoToProject = (e) => {\r\n    const getTodoForm = e.target.parentElement;\r\n    const contentDiv = getTodoForm.parentElement;\r\n    const projectIdx = contentDiv.dataset.index;\r\n    const todoPriorityInput = getTodoForm.querySelector('.todo-priority').querySelector('div').querySelectorAll('input[name=\"todo-priority\"]');\r\n    const todoDescription = getTodoForm.querySelector('.todo-description').value;\r\n    const todoDueDate = getTodoForm.querySelector('.due-date').value;\r\n    let todoPriority;\r\n    contentDiv.removeChild(getTodoForm);\r\n    todoPriorityInput.forEach((el)=> {\r\n        if(el.checked){\r\n            todoPriority = el.value;\r\n        }\r\n    });\r\n    const newTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default(todoDescription, false, todoDueDate, todoPriority);\r\n    \r\n    _todoProjectList__WEBPACK_IMPORTED_MODULE_1__.default[projectIdx].todos.push(newTodo);\r\n    const newLiHTML = (0,_addTodoHTML__WEBPACK_IMPORTED_MODULE_2__.addTodoToHTML)(projectIdx);\r\n    contentDiv.appendChild(newLiHTML);\r\n    return newTodo;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/addTodoLogic.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage),\n/* harmony export */   \"showTitles\": () => (/* binding */ showTitles),\n/* harmony export */   \"showTodos\": () => (/* binding */ showTodos),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"markComplete\": () => (/* binding */ markComplete)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _getTodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTodoForm */ \"./src/getTodoForm.js\");\n/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoProject */ \"./src/todoProject.js\");\n\r\n\r\n\r\n\r\n\r\nlet completeDOT = `<i class=\"fas fa-circle\"></i>`;\r\n\r\nconst homePage = () => {\r\n    \r\n}\r\n\r\nconst showTitles = () => {\r\n    const projectList = document.createElement('div');\r\n        projectList.classList.add('project-list');\r\n    _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr.forEach((project, idx)=>{\r\n        const projectDiv = document.createElement('div');\r\n            projectDiv.classList.add('project');\r\n            projectDiv.dataset.index = idx;\r\n        const titleSpan = document.createElement('span');\r\n            titleSpan.classList.add('project-title');\r\n        const h5 = document.createElement('h5');\r\n            h5.innerText = project.title;\r\n        \r\n        titleSpan.appendChild(h5);\r\n        titleSpan.addEventListener('click', showTodos)\r\n        \r\n        projectDiv.appendChild(titleSpan);\r\n        projectList.appendChild(projectDiv);\r\n    });\r\n    return projectList;\r\n}\r\n\r\nconst showTodos = (e) => {\r\n    const projectIdx = e.target.parentElement.parentElement.dataset.index;\r\n    if(!_todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].shown){\r\n        _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].shown = true;\r\n        const project = e.target.parentElement.parentElement.querySelector('.project-title');\r\n        \r\n        const addNewTodoBtn = document.createElement('div');\r\n        addNewTodoBtn.classList.add('add-todo-btn');\r\n        addNewTodoBtn.innerHTML = `<i class=\"fas fa-plus\"></i>`;\r\n        addNewTodoBtn.addEventListener('click', addNewTodo);\r\n        project.appendChild(addNewTodoBtn);\r\n\r\n        const todoListUl = document.createElement('ul');\r\n            todoListUl.classList.add('todo-project');\r\n        _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].todos.forEach((todo, idx)=>{\r\n            const li = document.createElement('li');\r\n                li.classList.add('todo')\r\n                if(_todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].todos[idx].completedStatus){\r\n                    li.classList.add('todo-complete');\r\n                }\r\n                li.innerHTML = `<i class=\"far fa-circle\"></i>`;\r\n            const deleteSpan = document.createElement('span');\r\n                deleteSpan.classList.add('delete-todo');\r\n                deleteSpan.innerHTML = `<i class=\"far fa-trash-alt\"></i>`;\r\n                deleteSpan.addEventListener('click', deleteTodo);\r\n                \r\n                const todoTitle = todo.description;\r\n                const dueDate = todo.dueDate;\r\n                const todoPriority = todo.priority;\r\n\r\n                const todoText = document.createElement('p');\r\n                    todoText.innerHTML = `<strong>Todo:</strong> ${todoTitle} -- <strong>Due:</strong> ${dueDate} -- <strong>Priority:</strong> ${todoPriority}`;\r\n                    todoText.addEventListener('click', markComplete);\r\n\r\n                \r\n                li.dataset.index = idx;\r\n                li.appendChild(todoText);\r\n                li.appendChild(deleteSpan);\r\n                todoListUl.appendChild(li);\r\n        });\r\n        e.target.parentElement.parentElement.appendChild(todoListUl);\r\n\r\n    } else {\r\n        _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].shown = false;\r\n        const project = e.target.parentElement.parentElement;\r\n        const oldChild = e.target.parentElement.parentElement.querySelector('ul');\r\n        const addBtn = e.target.parentElement.parentElement.querySelector('.add-todo-btn');\r\n        oldChild.parentNode.removeChild(oldChild);\r\n        addBtn.parentNode.removeChild(addBtn);\r\n    }\r\n}\r\n\r\nconst markComplete = (e) => {\r\n    const parentLI = e.target.parentElement;\r\n    const parentLiIdx = parentLI.dataset.index;\r\n    const projectIdx = parentLI.parentElement.parentElement.dataset.index;\r\n\r\n    if(_todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].todos[parentLiIdx].completedStatus === false){\r\n        _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].todos[parentLiIdx].completedStatus = true;\r\n        parentLI.classList.add('todo-complete');\r\n    } else if(_todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].todos[parentLiIdx].completedStatus === true){\r\n        _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].todos[parentLiIdx].completedStatus = false;\r\n        parentLI.classList.remove('todo-complete');\r\n    }\r\n}\r\n\r\nconst deleteTodo = (e) =>{\r\n    const parentLI = e.target.parentElement.parentElement;\r\n    const parentLiIdx = parentLI.dataset.index;\r\n    const projectUl = parentLI.parentElement;\r\n    const mainProject = parentLI.parentElement.parentElement;\r\n    const project = parentLI.parentElement.parentElement.querySelector('.todo-project');\r\n    const projectTitle = parentLI.parentElement.parentElement.querySelector('.project-title');\r\n    const addBtn = parentLI.parentElement.parentElement.querySelector('.add-todo-btn');\r\n    const projectIdx = parentLI.parentElement.parentElement.dataset.index;\r\n    \r\n    \r\n    _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].todos.splice(parentLiIdx, 1);\r\n    _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].shown = false;\r\n    projectTitle.removeChild(addBtn);\r\n    mainProject.removeChild(project);\r\n}\r\n\r\n\r\nconst addNewTodo = (e) =>{\r\n    const project = e.target.parentElement.parentElement.parentElement;\r\n    const contentDiv = project.parentElement.parentElement;\r\n    const projectUl = project.querySelector('ul');\r\n    const projectIdx = e.target.parentElement.parentElement.parentElement.dataset.index;\r\n\r\n    \r\n    project.appendChild((0,_getTodoForm__WEBPACK_IMPORTED_MODULE_1__.getTodoForm)());\r\n}\r\n\r\nconst addTodoToProject = () => {\r\n    \r\n}\r\n\r\nconst addNewProject = () => {\r\n    const projectListDiv = document.querySelector('.project-list');\r\n    const contentDiv = document.querySelector('#content');\r\n    \r\n    contentDiv.removeChild(projectListDiv);\r\n\r\n    const addNewProjectDiv = document.createElement('div');\r\n        addNewProjectDiv.classList.add('add-new-project');\r\n\r\n    const projectP = document.createElement('p');\r\n            projectP.innerText = 'You are Adding a New Project!';\r\n\r\n    let inputProject = document.createElement('input');\r\n        inputProject.type = 'text';\r\n        inputProject.classList.add('new-project-title');\r\n        inputProject.placeholder = 'Enter your project name here';\r\n        inputProject.addEventListener('keydown', e => {\r\n            if(e.key === 'Enter'){\r\n                if(e.target.value !== ''){\r\n                    confirmAdd(e);\r\n                }\r\n            }\r\n        });\r\n\r\n\r\n    const confirmAddBtn = document.createElement('button');\r\n        confirmAddBtn.innerText = 'Confirm!'\r\n        confirmAddBtn.addEventListener('click', confirmAdd);\r\n\r\n        addNewProjectDiv.appendChild(projectP)\r\n        addNewProjectDiv.appendChild(inputProject);\r\n        addNewProjectDiv.appendChild(confirmAddBtn);\r\n\r\n        return addNewProjectDiv\r\n}\r\n\r\nconst confirmAdd = (e)=>{\r\n    const newProjTitle = e.target.parentElement.querySelector('.new-project-title').value;\r\n    const contentDiv = document.querySelector('#content')\r\n    const addNewProjectDiv = document.querySelector('.add-new-project');\r\n\r\n    if(newProjTitle.length > 0){\r\n        const newProj = new _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoProject(newProjTitle, false, []);\r\n        _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr.push(newProj);\r\n        console.log(_todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr);\r\n    }\r\n    contentDiv.removeChild(addNewProjectDiv);\r\n\r\n    contentDiv.appendChild(showTitles());\r\n    \r\n}\r\n\r\nconst deleteProject = (e) => {\r\n    const contentDiv = e.target.parentElement.parentElement.querySelector('#content');\r\n    const projectListDiv = contentDiv.querySelector('.project-list');\r\n    contentDiv.removeChild(projectListDiv);\r\n    \r\n    const removeProjectPage = document.createElement('div');\r\n        removeProjectPage.classList.add('remove-project-page');\r\n        removeProjectPage.innerHTML = `<p>Choose a Project to Remove</p>`;\r\n    \r\n    const goBackButton = document.createElement('button');\r\n        goBackButton.classList.add('go-back-button');\r\n        goBackButton.innerText = \"Go Back\";\r\n        goBackButton.addEventListener('click', returnToHome);\r\n\r\n    _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr.forEach((project, idx) => {\r\n        const title = project.title;\r\n        const titleDiv = document.createElement('div');\r\n            titleDiv.classList.add('remove-project-title')\r\n            titleDiv.innerHTML = `\r\n                <div class=\"title-div\">  \r\n                    <i class=\"fas fa-circle\"></i>\r\n                    <p>${title}</p>\r\n                </div>\r\n            `;\r\n            titleDiv.dataset.index = idx;\r\n            titleDiv.addEventListener('click', confirmRemoveProject);\r\n        removeProjectPage.appendChild(titleDiv);\r\n    });\r\n\r\n    contentDiv.appendChild(removeProjectPage);\r\n    contentDiv.appendChild(goBackButton);\r\n}\r\n\r\nconst returnToHome = (e) => {\r\n    const contentDiv = e.target.parentElement;\r\n    const removeProjectPage = contentDiv.querySelector('.remove-project-page');\r\n    const goBackBtn = e.target;\r\n    contentDiv.removeChild(goBackBtn);\r\n    contentDiv.removeChild(removeProjectPage);\r\n    contentDiv.appendChild(showTitles());\r\n}\r\n\r\nconst confirmRemoveProject = (e) =>{\r\n    const contentDiv = e.target.parentElement.parentElement.parentElement.parentElement;\r\n    const removeProjectPage = contentDiv.querySelector('.remove-project-page');\r\n    const goBackBtn = contentDiv.querySelector('.go-back-button');\r\n    const projectIdx = e.target.parentElement.parentElement.dataset.index;\r\n    const projectTitle = _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr[projectIdx].title;\r\n\r\n    _todoProject__WEBPACK_IMPORTED_MODULE_2__.todoListArr.splice(projectIdx, 1);\r\n\r\n    contentDiv.removeChild(removeProjectPage);\r\n    contentDiv.removeChild(goBackBtn);\r\n    const removeP = document.createElement('p');\r\n        removeP.innerText = `Project \"${projectTitle}\" Removed!`;\r\n        removeP.classList.add('remove-message');\r\n\r\n        contentDiv.appendChild(removeP);\r\n        contentDiv.appendChild(showTitles());\r\n        setTimeout(() => {\r\n            contentDiv.removeChild(removeP);\r\n        }, 1000);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _addTodoLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoLogic */ \"./src/addTodoLogic.js\");\nconst contentDiv = document.querySelector('#content');\r\nconst addBtn = document.querySelector('.addBtn');\r\nconst homeBtn = document.querySelector('.homeBtn');\r\nconst deleteBtn = document.querySelector('.delete-btn');\r\n\r\n// import addNewProject from './addTodoHTML';\r\n\r\n\r\n\r\naddBtn.addEventListener('click', addTodoForm);\r\nhomeBtn.addEventListener('click', showHome);\r\ndeleteBtn.addEventListener('click', _homePage__WEBPACK_IMPORTED_MODULE_0__.deleteProject)\r\n\r\n\r\nfunction showHome(){\r\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.homePage)());\r\n}\r\n\r\nfunction addTodoForm(){\r\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.addNewProject)());\r\n}\r\n\r\nwindow.onload = () => {\r\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.showTitles)())\r\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoProjectListUl\": () => (/* binding */ todoProjectListUl),\n/* harmony export */   \"todoListArr\": () => (/* reexport safe */ _todoProjectList__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"todoProject\": () => (/* binding */ todoProject)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProjectList */ \"./src/todoProjectList.js\");\n\r\n\r\n\r\n// let todoListArr = [];\r\n\r\nclass todoProject {\r\n    constructor(title = 'Untitled Project', shown = false, todos = []){\r\n        this.title = title;\r\n        this.shown = shown;\r\n        this.todos = todos;\r\n    }\r\n}\r\n\r\nconst firstProject = new todoProject('My First Project', false);\r\nconst secondProject = new todoProject('My Second Project', false);\r\n\r\nconst firstTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__.default('Buy Milk', false, '10/21/2022', 'low');\r\n\r\nfirstProject.todos.push(firstTodo);\r\n\r\nconsole.log(firstProject);\r\n\r\n_todoProjectList__WEBPACK_IMPORTED_MODULE_1__.default.push(firstProject);\r\n_todoProjectList__WEBPACK_IMPORTED_MODULE_1__.default.push(secondProject);\r\n\r\nlet todoProjectListUl = document.createElement('ul');\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoProject.js?");

/***/ }),

/***/ "./src/todoProjectList.js":
/*!********************************!*\
  !*** ./src/todoProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet todoListArr = [];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoListArr);\n\n//# sourceURL=webpack://todo-list/./src/todoProjectList.js?");

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