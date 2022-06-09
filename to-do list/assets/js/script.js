const form = document.getElementById('task-form');
const taskList = document.getElementById('task');

 form.onsubmit = function (e) {
     e.preventDefault();
     const inputField = document.getElementById('input');
     addTask(inputField.value);
     form.reset();
 }

 function addTask(description) {
     const taskContainer = document.createElement ('div');
     const newTask = document.createElement ('input');
     const  taskDescriptionNode = document.createTextNode(description);
 }