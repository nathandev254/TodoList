const todo = document.querySelector(".Todo-input");
const button = document.querySelector(".btn");
const TodoContainer = document.querySelector('.Todo-container')

button.addEventListener("click", function (e) {
  e.preventDefault();
  const html = `  <div class="output">
  <p>${todo.value}</p>
  <div class="icon-container">
    <i class="fa-solid fa-trash icon"></i>
  </div>
</div>`;
 
    TodoContainer.insertAdjacentHTML('beforeend', html)

    todo.value = ''
  // console.log(todo.value)
});
