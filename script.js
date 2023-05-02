const todo = document.querySelector(".Todo-input");
const button = document.querySelector(".btn");
const TodoContainer = document.querySelector(".Todo-container");
const icon = document.querySelectorAll(".icon-container");

// Initializing a new object dynamically to store the todos
let todos = new Array();

//function off adding Todoitems
const addTodos = function (todo, todos) {
  if (todo) {
    todos.push(todo);
    // todo = "";
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(localStorage);
  }
};

// Function of displaying todo items
const Displaytodos = function (todo) {
  if(todo){
    const html = `  <div class="output">
    <p>${todo}</p>
    <div class="icon-container">
      <i class="fa-solid fa-trash icon"></i>
    </div>
  </div>`;

  TodoContainer.insertAdjacentHTML("beforeend", html);
  }
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  addTodos(todo.value, todos);
  Displaytodos(todo.value);
  todo.value = "";
});

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  const ParsedArr = JSON.parse(localStorage.getItem('todos'))
  // console.log(ParsedArr)
  ParsedArr.forEach(element => {
    Displaytodos(element)
  });
}
icon.addEventListener('click', function(){
  console.log(icon)
})
