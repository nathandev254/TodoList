const todo = document.querySelector(".Todo-input");
const button = document.querySelector(".btn");
const TodoContainer = document.querySelector(".Todo-container");
const icon = document.querySelectorAll('.icon')

// Initializing a new object dynamically to store the todos 
const todos = new Array

//function off adding Todoitems
const addTodos = function(todo,todos){
  if (todo) {
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

// Function of displaying todo items
const Displaytodos = function(todos){
  todos.forEach(element => {
    const html = `  <div class="output">
    <p>${element}</p>
    <div class="icon-container">
      <i class="fa-solid fa-trash icon"></i>
    </div>
  </div>`;

    TodoContainer.insertAdjacentHTML("beforeend", html);
  });
}


button.addEventListener("click", function (e) {
  e.preventDefault();
   addTodos(todo.value,todos)
   
  Displaytodos(todos);

   

  // console.log(localStorage)
    todo.value = "";
  })


