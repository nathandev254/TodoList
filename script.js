const input = document.querySelector('input')
const submit = document.querySelector('button')
const labelinput = document.querySelector('label')
const item = document.querySelector('.items')
// const item = document.createElement('li')

const Todos = []
submit.addEventListener('click', function(e){
    e.preventDefault()
    console.log(input.value)
    if(input.value === ''){
        labelinput.textContent = `Please Enter a todoItem`
        labelinput.style.color = 'red'
    }
    else{
        labelinput.style.color = 'black'
        Todos.push(input.value)
        const Html = `<li>${input.value}</li>`
        item.insertAdjacentHTML('afterbegin', Html)
        input.value = ''
    }
  
})