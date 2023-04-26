const todo = document.querySelector(".Todo-input");
const button = document.querySelector(".btn");
const TodoContainer = document.querySelector(".Todo-container");

// Initializing a new object dynamically to store the todos 
const todos = new Array



button.addEventListener("click", function (e) {
  e.preventDefault();
  if (todo.value) {
    todos.push(todo.value)
   
    //Stores the todo data in localStorage
    localStorage.setItem('todos',JSON.stringify(todos))
    
    const html = `  <div class="output">
    <p>${todo.value}</p>
    <div class="icon-container">
      <i class="fa-solid fa-trash icon"></i>
    </div>
  </div>`;

    TodoContainer.insertAdjacentHTML("beforeend", html);

    todo.value = "";
  } 
  else return
})





