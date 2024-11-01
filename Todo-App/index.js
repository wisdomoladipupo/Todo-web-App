const listForm = document.getElementById("listForm");
const todoList = document.getElementById("todos");
const inputElement = document.getElementById("add_todo");

let id = 1;

const todos = [];
const newTodo = listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = inputElement.value.trim();

  if (inputElement.value == "") return;

  const newTodo = { id: id++, text: todoText };

  todos.push(newTodo);
  inputElement.value = "";
  renderSingleTodo(newTodo);
});

function renderSingleTodo(todo) {
  const list = document.createElement("li");
  list.classList.add("todo_item");
  const label = document.createElement("label");
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "delete";
  radio.addEventListener("change", () => removeTodo(todo.id));
  label.appendChild(radio);
  const hr = document.createElement("hr")
  label.appendChild(document.createTextNode(todo.text));
 
  list.appendChild(label);
  list.appendChild(hr)
  todoList.appendChild(list);
}

function removeTodo(id) {
  const index = todos.findIndex((todo) => todo.id == id);
  if (index != -1) {
    todos.splice(index, 1);
    renderAllTodo();
  }
}

function renderAllTodo() {
  todoList.innerHTML = "";
  todos.forEach((todo) => renderSingleTodo(todo));
}

// ascend css logic

const button = document.getElementById("ascend");
const main = document.querySelector("main");

button.addEventListener("click", () => {
  main.classList.toggle("ascend");
});
