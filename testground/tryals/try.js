
const input = document.getElementById("userInput");
const taskList = document.getElementById("taskList");
const add = document.getElementById("addBtn");

loadTask()

function addTask() {
    const tasks = input.value.trim();

    saveTask()

    if (tasks) {
        taskElements(tasks);
        input.value = " ";
    }else{
        alert("Empty! Please add a task")
    }
    
}

add.addEventListener('click', addTask)

function taskElements(tasks){
    const listItems = document.createElement("li");
    listItems.className = "listStyle";
    listItems.textContent = tasks;

    const delBtn = document.createElement("button");
    delBtn.className = "delStyle";
    delBtn.textContent = "Delete";

    listItems.appendChild(delBtn);
    taskList.appendChild(listItems);

    delBtn.addEventListener('click', function(){
        taskList.removeChild(listItems);
        saveTask();
    })

}

function saveTask() {
    let task = [];
    taskList.querySelectorAll("li").forEach(function(item) {
        task.push(item.textContent.replace('Delete', ' ').trim())
    });

    localStorage.setItem('taskNames', JSON.stringify(task));
}

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('taskNames')) || [];
    tasks.forEach(taskElements);
}