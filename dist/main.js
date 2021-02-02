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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addTodoLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoLogic */ \"./src/addTodoLogic.js\");\n\r\n\r\nconst addTodoHTML = () => {\r\n    return `\r\n        <div>\r\n            <form id=\"add-todo-project-form\">\r\n                <label for=\"new-todo\">Add Your Project here</label>\r\n                <input id=\"new-todo\" type=\"text\"/>\r\n            </form>\r\n        </div>\r\n    `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoHTML);\n\n//# sourceURL=webpack://todo-list/./src/addTodoHTML.js?");

/***/ }),

/***/ "./src/addTodoLogic.js":
/*!*****************************!*\
  !*** ./src/addTodoLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTodoProject(projectName){\r\n    return `\r\n        <div class=\"project\">${projectName}</div>\r\n    `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoProject);\n\n//# sourceURL=webpack://todo-list/./src/addTodoLogic.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoProject */ \"./src/todoProject.js\");\n\r\n\r\n\r\n\r\nconst homePage = () => {\r\n    let div = document.createElement('div');\r\n    let h4 = document.createElement('h4');\r\n    h4.innerText = 'Projects';\r\n    div.appendChild(h4);\r\n    div.appendChild(_todoProject__WEBPACK_IMPORTED_MODULE_1__.todoProjectListUl);\r\n    return div;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://todo-list/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addTodoHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTodoHTML */ \"./src/addTodoHTML.js\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoProject */ \"./src/todoProject.js\");\nconst contentDiv = document.querySelector('#content');\r\nconst addBtn = document.querySelector('.addBtn');\r\nconst homeBtn = document.querySelector('.homeBtn');\r\n\r\n\r\n\r\n\r\n\r\n\r\naddBtn.addEventListener('click', addTodoForm);\r\nhomeBtn.addEventListener('click', showHome);\r\n\r\nfunction showHome(){\r\n    contentDiv.innerHTML = (0,_homePage__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n}\r\n\r\nfunction addTodoForm(){\r\n    contentDiv.innerHTML = (0,_addTodoHTML__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\r\n\r\nwindow.onload = () => {\r\n    contentDiv.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n    console.log(contentDiv);\r\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todo = () => {\r\n   return `\r\n   \r\n   `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoProject.js":
/*!****************************!*\
  !*** ./src/todoProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoProjectListUl\": () => (/* binding */ todoProjectListUl),\n/* harmony export */   \"logTodos\": () => (/* binding */ logTodos)\n/* harmony export */ });\nlet todoListArr = [['Buy milk', true], ['Put gas in car', false]];\r\n\r\nlet todoProjectListUl = document.createElement('ul');\r\n\r\ntodoListArr.forEach((el, idx)=>{\r\n    let li = document.createElement('li');\r\n    li.innerText = el[0];\r\n    if(el[1]){\r\n        li.innerHTML += `<p data-index=${idx}>O</p>`\r\n    } else {\r\n        li.innerHTML += `<p data-index=${idx}>X</p>`\r\n    }\r\n    todoProjectListUl.appendChild(li);\r\n});\r\n\r\nfunction logTodos(){\r\n    console.log(todoProjectListUl);\r\n}\r\n\r\nconst todoProject = () => {\r\n    return todoProjectListUl\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/todoProject.js?");

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