var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var addedToDos = [];

todoList.textContent = "";
todoCountSpan.textContent = 0;
console.log("submit");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  userToDo = todoInput.value;
  todos.push(userToDo);
  renderToDoList();
});

function renderToDoList() {
  for (let i = 0; i < todos.length; i++) {
    if (addedToDos.includes(todos[i])) {
    } else {
      var newToDo = document.createElement("Li");
      console.log(addedToDos);
      newToDo.textContent = todos[i];
      todoList.appendChild(newToDo);
      addedToDos.push(todos[i]);
      todoCountSpan.textContent = addedToDos.length;
    }
  }
}
