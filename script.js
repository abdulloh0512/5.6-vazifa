const inpEl = document.querySelector("#inp");
const uzEl = document.querySelector("#uz");
const formEl = document.querySelector("form");
const newEl = document.querySelector(".newWord");
const todoEl = document.querySelector(".newTodo");

let todos = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
let son = 1;
let newTodos = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const textIng = inpEl.value;
  const textUz = uzEl.value;
  todos.push({
    id: Math.ceil(Math.random() * 10000000),
    raqam: son++,
    ing: textIng,
    uzb: textUz,
  });
  inpEl.value = "";
  uzEl.value = "";
  reTodo();
});

function reTodo() {
  let html = "";
  todos.forEach((todo) => {
    html += `       <div class="bet relative w-[95%] mb-[32px] flex">
    <div class="flex space-x-44">
      <span>${todo.raqam}</span><span>${todo.ing}</span
      ><span>${todo.uzb}</span>
    </div>
    <div class="flex gap-2 absolute right-0">
      <img
        onclick ="(addTodo(${todo.id}))"
        class="cursor-pointer"
        src="./plus.svg"
        alt=""
      /><img
        class="cursor-pointer"
        onclick="(delate(${todo.id}))"
        src="./backspace.svg"
        alt=""
      />
    </div>
    <div class="w-[95%] h-[1px] bg-slate-300 absolute top-[40px] left-[10px]"></div>
  </div>`;
  });
  newEl.innerHTML = html;
  localStorage.setItem("todos", JSON.stringify(todos));
}
reTodo();

function addTodo(id) {
  const newtodo = todos.find((todo) => todo.id === id);
  todos = todos.filter((todo) => todo === newtodo);
  newTodos.push(newtodo);
  reNewTodos();
}

function reNewTodos() {
  let htmll = "";
  newTodos.forEach((todo) => {
    htmll += ` <div class="bet relative w-[95%] mb-[32px] flex">
    <div class="flex space-x-44">
      <span>${todo.raqam}</span><span>${todo.ing}</span
      ><span>${todo.uzb}</span>
    </div>
    <div class="flex gap-2 absolute right-0">
      <img
        onclick ="(leftTodo(${todo.id}))"
        class="cursor-pointer"
        src="./backspace.svg"
        alt=""
      /><img
        class="cursor-pointer"
        onclick="(delatee(${todo.id}))"
        src="./cross.svg"
        alt=""
      />
    </div>
    <div class="w-[95%] h-[1px] bg-slate-300 absolute top-[40px] left-[10px]"></div>
  </div>`;
  });
  todoEl.innerHTML = htmll;
  localStorage.setItem("newTodos", JSON.stringify("newTodos"));
}

reNewTodos();

function delate(id) {
  todos = todos.filter((todo) => todo.id !== id);
  reTodo();
}

function delatee(id) {
  newTodos = newTodos.filter((todo) => todo.id !== id);
  reNewTodos();
}
