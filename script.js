let standardTheme = document.querySelector('.standard-theme');
let lightTheme = document.querySelector('.light-theme');
let darkerTheme = document.querySelector('.darker-theme');

let body = document.body;
let title = document.querySelector(".task-title");
let buttonAdd = document.querySelector(".task-button");
let inputAdd = document.querySelector(".task-input");
let taskList = document.querySelector('.task-list');


standardTheme.addEventListener("click", function () {
    body.style.background = 'linear-gradient(285deg, #141414 0%, #363636 100%)';
    title.style.color = '#d12cff';
    buttonAdd.style.backgroundColor = '#d12cff';
    inputAdd.style.backgroundColor = '#dea0fa';
    buttonAdd.style.border = 'none';
    inputAdd.style.border = 'none';
})

lightTheme.addEventListener("click", function () {
    body.style.background = 'linear-gradient(100deg, #F1F1F1, #e8e8e8)'
    title.style.color = '#08100C';
    buttonAdd.style.backgroundColor = '#08100C';
    buttonAdd.style.border = '1px solid #08100C'
    inputAdd.style.backgroundColor = '#e8e8e8';
    inputAdd.style.border = '1px solid #08100C';
})

darkerTheme.addEventListener("click", function () {
    body.style.background = 'linear-gradient(100deg, #232426, #08100C)'
    title.style.color = '#e8e8e8';
    buttonAdd.style.backgroundColor = '#232426';
    buttonAdd.style.border = '1px solid #e8e8e8'
    inputAdd.style.backgroundColor = '#e8e8e8';
    inputAdd.style.backgroundColor = 'transparent'
    inputAdd.style.border = '1px solid #e8e8e8'
})

function createTaskItem(taskItem) {
    // crie Li
    let tarefaUsuario = document.createElement("li")
    tarefaUsuario.textContent = taskItem;

    // botao check
    let buttonCheck = document.createElement("button");
    buttonCheck.textContent = "✔";
    buttonCheck.style.marginLeft = "10px";
    buttonCheck.style.backgroundColor = '#50f948';
    buttonCheck.style.border = 'none';
    buttonCheck.addEventListener("click", function () {
        tarefaUsuario.classList.toggle("checked");
    })

    // botao delete
    let buttonRemove = document.createElement("button");
    buttonRemove.textContent = "X";
    buttonRemove.style.marginLeft = "10px";
    buttonRemove.style.backgroundColor = '#ff5151';
    buttonRemove.style.border = 'none';
    buttonRemove.style.padding = '2px 8px';
    buttonRemove.addEventListener("click", function () {
        tarefaUsuario.classList.toggle("remove");
        // adicionar função externa
        tarefaUsuario.remove()
        removeTaskStorage(taskItem);
    })

    tarefaUsuario.appendChild(buttonCheck)
    tarefaUsuario.appendChild(buttonRemove)
    return tarefaUsuario;

}

buttonAdd.addEventListener("click", function () {
    let taskItem = inputAdd.value.trim();

    if (taskItem !== "") {
        let itemList = createTaskItem(taskItem)

        taskList.appendChild(itemList);

        // JSON = Javascript Object Notation
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(taskItem);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        inputAdd.value = "";
    }
})

// Contém informação na janela
window.addEventListener("load", function () {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    savedTasks.forEach((task) => {
        let itemList = createTaskItem(task);
        taskList.appendChild(itemList);
    })
});

function removeTaskStorage(taskItem) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskItem)
    localStorage.setItem("tasks", JSON.stringify(tasks));
}