
const toggleTask = (e) => {
    const task = e.currentTarget;
    task.classList.toggle('task-completed');
    let icon = task.children[0];
    let isCompleted = task.classList.contains('task-completed');
    icon.src = isCompleted ?  'images/icons/circle-solid.svg' : 'images/icons/circle-regular.svg';
    const newContainer = document.getElementById(isCompleted ? 'completed-tasks' : 'incompleted-tasks');
    newContainer.appendChild(task);
}

[... document.getElementsByClassName('task')].forEach(element => {
    element.addEventListener('click', toggleTask);
});

const addTask = (e) => {
    e.preventDefault();
    const task = new FormData(e.target).get("add-task");
    if (task.length === 0) {
        return;
    }
    if (task) {
        const newTask = document.createElement('div');
        newTask.className = 'task';
        let image = newTask.appendChild(document.createElement('img'));
        image.className = 'task-icon';
        image.src = 'images/icons/circle-regular.svg';
        image.alt = '';
        image.width = 18;
        image.height = 18;
        let text = newTask.appendChild(document.createElement('span'));
        text.className = 'task-text';
        text.innerText = task;
        document.getElementById('incompleted-tasks').appendChild(newTask);
        newTask.addEventListener('click', toggleTask);
        e.target.children.namedItem("add-task").value = '';
    }
}

document.getElementById('addtask-form').addEventListener('submit', addTask);