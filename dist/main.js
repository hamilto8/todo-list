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

/***/ "./src/homePage.js"
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderActiveProject: () => (/* binding */ renderActiveProject),\n/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar)\n/* harmony export */ });\n/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProject */ \"./src/todoProject.js\");\n\n\n// Escape HTML helper to secure against XSS\nfunction escapeHTML(str) {\n    if (!str) return '';\n    return str\n        .replace(/&/g, '&amp;')\n        .replace(/</g, '&lt;')\n        .replace(/>/g, '&gt;')\n        .replace(/\"/g, '&quot;')\n        .replace(/'/g, '&#039;');\n}\n\nconst renderSidebar = () => {\n    const projectsListEl = document.getElementById('projects-list');\n    if (!projectsListEl) return;\n    \n    projectsListEl.innerHTML = '';\n    \n    const todos = JSON.parse(localStorage.getItem('todos')) || [];\n    let activeProjectIdx = Number(localStorage.getItem('activeProjectIdx') || 0);\n    \n    // Clamp active index\n    if (activeProjectIdx >= todos.length) {\n        activeProjectIdx = Math.max(0, todos.length - 1);\n        localStorage.setItem('activeProjectIdx', activeProjectIdx);\n    }\n    \n    todos.forEach((project, idx) => {\n        const projectEl = document.createElement('div');\n        projectEl.className = 'project-item';\n        if (idx === activeProjectIdx) {\n            projectEl.classList.add('active');\n        }\n        projectEl.dataset.index = idx;\n        \n        projectEl.innerHTML = `\n            <div class=\"project-item-left\">\n                <i class=\"fas fa-folder\"></i>\n                <span class=\"project-title-text\">${escapeHTML(project.title)}</span>\n            </div>\n            <button class=\"delete-project-btn\" title=\"Delete Project\">\n                <i class=\"fas fa-trash-alt\"></i>\n            </button>\n        `;\n        \n        // Click to toggle active project\n        projectEl.addEventListener('click', (e) => {\n            if (e.target.closest('.delete-project-btn')) return;\n            localStorage.setItem('activeProjectIdx', idx);\n            renderSidebar();\n            renderActiveProject();\n        });\n        \n        // Delete project click handler\n        const deleteBtn = projectEl.querySelector('.delete-project-btn');\n        deleteBtn.addEventListener('click', (e) => {\n            e.stopPropagation();\n            if (confirm(`Are you sure you want to delete the project \"${project.title}\"?`)) {\n                let currentTodos = JSON.parse(localStorage.getItem('todos')) || [];\n                currentTodos.splice(idx, 1);\n                localStorage.setItem('todos', JSON.stringify(currentTodos));\n                \n                let currentActive = Number(localStorage.getItem('activeProjectIdx') || 0);\n                if (currentActive >= currentTodos.length) {\n                    currentActive = Math.max(0, currentTodos.length - 1);\n                }\n                localStorage.setItem('activeProjectIdx', currentActive);\n                \n                renderSidebar();\n                renderActiveProject();\n            }\n        });\n        \n        projectsListEl.appendChild(projectEl);\n    });\n};\n\nconst renderActiveProject = () => {\n    const contentEl = document.getElementById('content');\n    if (!contentEl) return;\n    \n    contentEl.innerHTML = '';\n    \n    const todos = JSON.parse(localStorage.getItem('todos')) || [];\n    let activeProjectIdx = Number(localStorage.getItem('activeProjectIdx') || 0);\n    \n    if (activeProjectIdx >= todos.length) {\n        activeProjectIdx = Math.max(0, todos.length - 1);\n        localStorage.setItem('activeProjectIdx', activeProjectIdx);\n    }\n    \n    // Empty state\n    if (todos.length === 0) {\n        contentEl.innerHTML = `\n            <div class=\"empty-state\">\n                <i class=\"fas fa-folder-open\"></i>\n                <h3>No Projects Found</h3>\n                <p>Create a new project in the sidebar to get started!</p>\n            </div>\n        `;\n        return;\n    }\n    \n    const activeProject = todos[activeProjectIdx];\n    \n    // Create Header Panel\n    const headerPanel = document.createElement('div');\n    headerPanel.className = 'project-header-panel';\n    headerPanel.innerHTML = `\n        <div class=\"project-header-info\">\n            <h1>${escapeHTML(activeProject.title)}</h1>\n            <p>${activeProject.todos.length} task${activeProject.todos.length !== 1 ? 's' : ''} total</p>\n        </div>\n        <button class=\"add-task-btn\" id=\"add-task-btn\">\n            <i class=\"fas fa-plus\"></i> Add Task\n        </button>\n    `;\n    \n    // Bind Add Task Dialog open trigger\n    headerPanel.querySelector('#add-task-btn').addEventListener('click', () => {\n        document.getElementById('todo-description').value = '';\n        document.getElementById('todo-due-date').value = new Date().toISOString().split('T')[0];\n        document.getElementById('priority-low').checked = true;\n        document.getElementById('todo-dialog').showModal();\n    });\n    \n    contentEl.appendChild(headerPanel);\n    \n    // Create Tasks list container\n    const tasksContainer = document.createElement('div');\n    tasksContainer.className = 'tasks-container';\n    \n    if (activeProject.todos.length === 0) {\n        const noTasksEl = document.createElement('div');\n        noTasksEl.className = 'empty-state';\n        noTasksEl.style.padding = '3rem 0';\n        noTasksEl.innerHTML = `\n            <i class=\"fas fa-tasks\"></i>\n            <h3>No Tasks Yet</h3>\n            <p>Add your first task to get going!</p>\n        `;\n        tasksContainer.appendChild(noTasksEl);\n    } else {\n        activeProject.todos.forEach((todo, todoIdx) => {\n            const taskCard = document.createElement('div');\n            taskCard.className = 'task-card';\n            if (todo.completedStatus) {\n                taskCard.classList.add('completed');\n            }\n            taskCard.dataset.index = todoIdx;\n            \n            // Check overdue\n            const todayStr = new Date().toISOString().split('T')[0];\n            const isOverdue = !todo.completedStatus && todo.dueDate && todo.dueDate < todayStr;\n            const dueDateClass = isOverdue ? 'task-due-date overdue' : 'task-due-date';\n            \n            taskCard.innerHTML = `\n                <div class=\"task-left\">\n                    <div class=\"task-checkbox-wrapper\" title=\"${todo.completedStatus ? 'Mark Incomplete' : 'Mark Complete'}\">\n                        <i class=\"${todo.completedStatus ? 'fas fa-check-circle' : 'far fa-circle'}\"></i>\n                    </div>\n                    <div class=\"task-content\">\n                        <span class=\"task-title\">${escapeHTML(todo.description)}</span>\n                        <div class=\"task-meta\">\n                            <span class=\"${dueDateClass}\">\n                                <i class=\"far fa-calendar-alt\"></i> ${todo.dueDate || 'No Date'}\n                            </span>\n                            <span class=\"priority-badge ${todo.priority || 'low'}\">${todo.priority || 'low'}</span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"task-right\">\n                    <button class=\"task-action-btn edit-task-btn\" title=\"Edit Task\">\n                        <i class=\"fas fa-edit\"></i>\n                    </button>\n                    <button class=\"task-action-btn delete-task-btn\" title=\"Delete Task\">\n                        <i class=\"fas fa-trash-alt\"></i>\n                    </button>\n                </div>\n            `;\n            \n            // Checkbox completed toggle listener\n            taskCard.querySelector('.task-checkbox-wrapper').addEventListener('click', () => {\n                let currentTodos = JSON.parse(localStorage.getItem('todos'));\n                const currentTodo = currentTodos[activeProjectIdx].todos[todoIdx];\n                currentTodo.completedStatus = !currentTodo.completedStatus;\n                localStorage.setItem('todos', JSON.stringify(currentTodos));\n                renderActiveProject();\n            });\n            \n            // Edit task trigger\n            taskCard.querySelector('.edit-task-btn').addEventListener('click', () => {\n                document.getElementById('edit-project-idx').value = activeProjectIdx;\n                document.getElementById('edit-todo-idx').value = todoIdx;\n                document.getElementById('edit-todo-description').value = todo.description;\n                document.getElementById('edit-todo-due-date').value = todo.dueDate || '';\n                \n                const pVal = todo.priority || 'low';\n                const rad = document.getElementById(`edit-priority-${pVal}`);\n                if (rad) rad.checked = true;\n                \n                document.getElementById('edit-dialog').showModal();\n            });\n            \n            // Delete task handler\n            taskCard.querySelector('.delete-task-btn').addEventListener('click', () => {\n                if (confirm(`Are you sure you want to delete the task \"${todo.description}\"?`)) {\n                    let currentTodos = JSON.parse(localStorage.getItem('todos'));\n                    currentTodos[activeProjectIdx].todos.splice(todoIdx, 1);\n                    localStorage.setItem('todos', JSON.stringify(currentTodos));\n                    renderActiveProject();\n                }\n            });\n            \n            tasksContainer.appendChild(taskCard);\n        });\n    }\n    \n    contentEl.appendChild(tasksContainer);\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/homePage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    // Bind Dialog opening/closing\n    const projectDialog = document.getElementById('project-dialog');\n    const todoDialog = document.getElementById('todo-dialog');\n    const editDialog = document.getElementById('edit-dialog');\n\n    const addProjectBtn = document.getElementById('add-project-btn');\n    const closeProjectDialog = document.getElementById('close-project-dialog');\n    const closeTodoDialog = document.getElementById('close-todo-dialog');\n    const closeEditDialog = document.getElementById('close-edit-dialog');\n\n    addProjectBtn.addEventListener('click', () => {\n        document.getElementById('new-project-title').value = '';\n        projectDialog.showModal();\n    });\n\n    closeProjectDialog.addEventListener('click', () => projectDialog.close());\n    closeTodoDialog.addEventListener('click', () => todoDialog.close());\n    closeEditDialog.addEventListener('click', () => editDialog.close());\n\n    // Close modal if clicked on the backdrop\n    const handleBackdropClick = (e, dialog) => {\n        const rect = dialog.getBoundingClientRect();\n        const isInDialog = (\n            rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&\n            rect.left <= e.clientX && e.clientX <= rect.left + rect.width\n        );\n        if (!isInDialog) {\n            dialog.close();\n        }\n    };\n\n    projectDialog.addEventListener('click', (e) => handleBackdropClick(e, projectDialog));\n    todoDialog.addEventListener('click', (e) => handleBackdropClick(e, todoDialog));\n    editDialog.addEventListener('click', (e) => handleBackdropClick(e, editDialog));\n\n    // Bind Form Submissions\n    const projectForm = document.getElementById('project-form');\n    projectForm.addEventListener('submit', (e) => {\n        const titleInput = document.getElementById('new-project-title');\n        const title = titleInput.value.trim();\n        if (title) {\n            let todos = JSON.parse(localStorage.getItem('todos')) || [];\n            const newProj = { title, shown: false, todos: [] };\n            todos.push(newProj);\n            localStorage.setItem('todos', JSON.stringify(todos));\n            localStorage.setItem('activeProjectIdx', todos.length - 1);\n            \n            (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.renderSidebar)();\n            (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)();\n            projectDialog.close();\n        }\n    });\n\n    const todoForm = document.getElementById('todo-form');\n    todoForm.addEventListener('submit', (e) => {\n        const descriptionInput = document.getElementById('todo-description');\n        const dueDateInput = document.getElementById('todo-due-date');\n        const priorityRadios = document.getElementsByName('priority');\n        \n        const description = descriptionInput.value.trim();\n        const dueDate = dueDateInput.value;\n        let priority = 'low';\n        \n        priorityRadios.forEach(radio => {\n            if (radio.checked && radio.id.startsWith('priority-')) {\n                priority = radio.value;\n            }\n        });\n\n        if (description && dueDate) {\n            let todos = JSON.parse(localStorage.getItem('todos')) || [];\n            const activeIdx = Number(localStorage.getItem('activeProjectIdx') || 0);\n            \n            if (todos[activeIdx]) {\n                const newTodo = {\n                    description,\n                    completedStatus: false,\n                    dueDate,\n                    priority\n                };\n                todos[activeIdx].todos.push(newTodo);\n                localStorage.setItem('todos', JSON.stringify(todos));\n                \n                (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)();\n                todoForm.reset();\n                todoDialog.close();\n            }\n        }\n    });\n\n    const editForm = document.getElementById('edit-form');\n    editForm.addEventListener('submit', (e) => {\n        const descriptionInput = document.getElementById('edit-todo-description');\n        const dueDateInput = document.getElementById('edit-todo-due-date');\n        const priorityRadios = document.getElementsByName('priority');\n        \n        const projectIdx = Number(document.getElementById('edit-project-idx').value);\n        const todoIdx = Number(document.getElementById('edit-todo-idx').value);\n        \n        const description = descriptionInput.value.trim();\n        const dueDate = dueDateInput.value;\n        let priority = 'low';\n        \n        priorityRadios.forEach(radio => {\n            if (radio.checked && radio.id.startsWith('edit-priority-')) {\n                priority = radio.value;\n            }\n        });\n\n        if (description && dueDate) {\n            let todos = JSON.parse(localStorage.getItem('todos')) || [];\n            if (todos[projectIdx] && todos[projectIdx].todos[todoIdx]) {\n                todos[projectIdx].todos[todoIdx].description = description;\n                todos[projectIdx].todos[todoIdx].dueDate = dueDate;\n                todos[projectIdx].todos[todoIdx].priority = priority;\n                \n                localStorage.setItem('todos', JSON.stringify(todos));\n                (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)();\n                editDialog.close();\n            }\n        }\n    });\n\n    // Render initially\n    (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.renderSidebar)();\n    (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)();\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass todo {\r\n   constructor(description, completedStatus, dueDate, priority){\r\n       this.description = description;\r\n       this.completedStatus = completedStatus;\r\n       this.dueDate = dueDate;\r\n       this.priority = priority;\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?\n}");

/***/ },

/***/ "./src/todoProject.js"
/*!****************************!*\
  !*** ./src/todoProject.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoListArr: () => (/* reexport safe */ _todoProjectList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   todoProject: () => (/* binding */ todoProject),\n/* harmony export */   todoProjectListUl: () => (/* binding */ todoProjectListUl)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoProjectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProjectList */ \"./src/todoProjectList.js\");\n\r\n\r\n\r\nclass todoProject {\r\n    constructor(title = 'Untitled Project', shown = false, todos = []){\r\n        this.title = title;\r\n        this.shown = shown;\r\n        this.todos = todos;\r\n    }\r\n}\r\n\r\nconst firstProject = new todoProject('My First Project', false);\r\nconst secondProject = new todoProject('My Second Project', false);\r\n\r\nconst firstTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Buy Milk', false, '2021-02-11', 'low');\r\nconst secondTodo = new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Go to work', false, '2022-03-01', 'low');\r\n\r\nfirstProject.todos.push(firstTodo);\r\nfirstProject.todos.push(secondTodo);\r\n\r\nlet demoStart = localStorage.getItem('demoStart');\r\nif(demoStart === null){\r\n    localStorage.setItem('demoStart', '1');\r\n    let currentTodos = JSON.parse(localStorage.getItem('todos'));\r\n    if (!currentTodos || currentTodos.length === 0) {\r\n        localStorage.setItem('todos', JSON.stringify([firstProject, secondProject]));\r\n    }\r\n}\r\n\r\nlet todoProjectListUl = document.createElement('ul');\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoProject.js?\n}");

/***/ },

/***/ "./src/todoProjectList.js"
/*!********************************!*\
  !*** ./src/todoProjectList.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet todoListArr = [];\r\nlet todoAppInitiated = JSON.parse(localStorage.getItem('initiated'));\r\n\r\nif(todoAppInitiated === null){\r\n    localStorage.setItem('initiated', JSON.stringify('1'));\r\n    localStorage.setItem('todos', JSON.stringify(todoListArr));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoListArr);\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoProjectList.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;