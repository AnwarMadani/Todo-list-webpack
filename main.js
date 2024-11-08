/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var today = new Date();\r\nvar dd = String(today.getDate()).padStart(2, '0');\r\nvar mm = String(today.getMonth() + 1).padStart(2, '0');\r\nvar yyyy = today.getFullYear();\r\n\r\ntoday = yyyy + '-' + mm + '-' + dd;\r\n\r\nlet myTasks = [];\r\nconst addTaskBtn = document.getElementById('addTask');\r\nconst modal = document.getElementById('modal');\r\nconst overlay = document.getElementById('overlay');\r\nconst form = document.getElementById('form');\r\nconst datePicker = document.getElementById('dueDate');\r\ndatePicker.min = yyyy + '/' + mm + '/' + dd;\r\nconst container = document.getElementById('container');\r\n\r\naddTaskBtn.addEventListener(\"click\", openModal);\r\noverlay.addEventListener(\"click\", closeModal);\r\n\r\nfunction openModal(){\r\n    form.reset();\r\n    modal.classList.add('active');\r\n    overlay.classList.add('active');\r\n}\r\n\r\nfunction closeModal(){\r\n    modal.classList.remove('active');\r\n    overlay.classList.remove('active');\r\n}\r\n\r\n\r\nclass Task {\r\n    constructor(title, dueDate, priority, description=''){\r\n        this.title = title,\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n    }\r\n    \r\n    getName() {\r\n        return this.name\r\n    }\r\n    \r\n    \r\n    getDate() {\r\n        return this.dueDate\r\n    }\r\n\r\n}\r\n\r\nfunction addTaskToTasks(newTask){\r\n    if(!myTasks.includes(newTask)){\r\n        myTasks.push(newTask);\r\n    }\r\n}\r\n\r\nfunction removeTaskFromTasks(title){\r\n    myTasks = myTasks.filter(task => task.title !== title)\r\n}\r\n\r\nfunction getTask(title){\r\n    return myTasks.find(task => task.title === title)\r\n}\r\n\r\n\r\nfunction updateTasksContainer(tasks){\r\n    container.innerHTML = '';\r\n    for(let task of tasks){\r\n        createTaskCard(task);\r\n    }\r\n}\r\n\r\nfunction createTask(){\r\n    const title = document.getElementById('title').value;\r\n    const dueDate = document.getElementById('dueDate').value;\r\n    let description = document.getElementById('description').value;\r\n    let priority;\r\n    if(document.getElementById('low').checked){\r\n        priority = 'low';\r\n    } else if(document.getElementById('normal').checked){\r\n        priority = 'normal';\r\n    } else {\r\n        priority = 'high';\r\n    }\r\n\r\n    const newTask = new Task(title, dueDate, priority, description);\r\n    return newTask;\r\n}\r\n\r\nfunction createTaskCard(task){\r\n        const taskDiv = document.createElement('div');\r\n        const leftSideDiv = document.createElement('div');\r\n        const deleteIcon = document.createElement('img');\r\n        deleteIcon.src = './img/delete.png';\r\n        taskDiv.classList.add('task');\r\n        const taskTitle = document.createElement('h3');\r\n        taskTitle.textContent = task.title;\r\n        const taskDueDate = document.createElement('p');\r\n        taskDueDate.textContent = task.dueDate;\r\n        const firstDiv = document.createElement('div');\r\n        firstDiv.classList.add('first');\r\n        const taskDescription = document.createElement('p');\r\n        const descriptionDiv = document.createElement('div');\r\n        taskDescription.textContent = task.description;\r\n\r\n        deleteIcon.addEventListener(\"click\", (e) => deleteTask(e))\r\n        \r\n        descriptionDiv.appendChild(taskDescription);\r\n        leftSideDiv.appendChild(deleteIcon);\r\n        leftSideDiv.appendChild(taskTitle);\r\n        firstDiv.appendChild(leftSideDiv);\r\n\r\n        taskDiv.classList.add(task.priority)\r\n        firstDiv.appendChild(taskDueDate);\r\n        taskDiv.appendChild(firstDiv);\r\n        taskDiv.appendChild(descriptionDiv)\r\n        container.appendChild(taskDiv);\r\n}\r\n\r\nform.addEventListener(\"submit\", (e) => addTask(e));\r\n\r\nfunction deleteTask(e){\r\n    let title = e.target.parentNode.parentNode.firstChild.innerHTML;\r\n    title = title.split('<h3>');\r\n    title = title[1].split('<');\r\n    title = title[0];\r\n    removeTaskFromTasks(title);\r\n    updateTasksContainer(myTasks);\r\n}\r\n\r\nfunction addTask(e){\r\n    e.preventDefault();\r\n    const newTask = createTask()\r\n    addTaskToTasks(newTask);\r\n    updateTasksContainer(myTasks);\r\n    closeModal();\r\n}\r\n\r\n\r\n// Inbox Button\r\n\r\nconst inboxBtn = document.getElementById('inbox');\r\nconst todayBtn = document.getElementById('today');\r\nlet todayTasks = [];\r\n\r\ninboxBtn.addEventListener('click', (e) => updateTasksContainer(myTasks));\r\n\r\ntodayBtn.addEventListener('click', (e) => {\r\n    todayTasks = [];\r\n    myTasks.filter((task) => {\r\n        if(task.getDate() === today){\r\n            if(!todayTasks.includes(task)){\r\n                todayTasks.push(task);\r\n            }\r\n        }});\r\n    updateTasksContainer(todayTasks);\r\n});\r\n\r\n\n\n//# sourceURL=webpack://todo-list-webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;