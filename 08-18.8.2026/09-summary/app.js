// Load tasks from LocalStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks when the page loads
showTasks();


function addTask() {

    let input = document.getElementById("taskInput");
    let title = input.value;

    if (title === "") {
        alert("Please enter a task");
        return;
    }

    // Create new task
    let newTask = {
        id: Date.now(),
        title: title
    };

    // Add task to array
    tasks.push(newTask);

    // Save to LocalStorage
    saveTasks();

    // Display tasks
    showTasks();

    // Clear input
    input.value = "";

    
}


function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


function showTasks() {

    let ul = document.getElementById("taskList");

    // Clear old list
    ul.innerHTML = "";

    for (let task of tasks) {

        let li = document.createElement("li");

        li.innerText = task.title + " ";

        let button = document.createElement("button");

        button.innerText = "Delete";

        button.onclick = function () {
            deleteTask(task.id);
        };

        li.appendChild(button);

        ul.appendChild(li);
    }
}


function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();

    showTasks();
}