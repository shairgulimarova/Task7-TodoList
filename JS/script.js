const form = document.querySelector('#myForm');
const userInput = document.querySelector("#userInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector(".todo-list");


form.addEventListener('submit', function (e) {
    e.preventDefault();
});

addBtn.addEventListener('click', (e) => {
    if (userInput.value == 0) {
        alert("Вы не добавили задачи!");
    } else {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        todoList.appendChild(ul);
        ul.appendChild(li);
        li.innerHTML = userInput.value;

        userInput.value = "";

        li.addEventListener('click', function() {
            li.remove();
        });
    }
});