// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

// Function to mark a task as complete
function completeTask(button) {
    const task = button.parentElement;
    task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}
