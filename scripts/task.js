import { sortArrayByName, upperCaseFirstLetter } from "./utils";

const toggleTask = (e) => {
    const task = e.currentTarget;
    task.classList.toggle('task-completed');
    let icon = task.children[0];
    let isCompleted = task.classList.contains('task-completed');
    icon.src = isCompleted ?  'images/icons/circle-solid.svg' : 'images/icons/circle-regular.svg';
    const targetContainer = isCompleted ? 'completed-tasks' : 'incompleted-tasks';
    const newContainer = document.getElementById(targetContainer);
    newContainer.appendChild(task);
    reorderTasks(targetContainer);
}

const addTask = (task) => {
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
    text.innerText = upperCaseFirstLetter(task);
    newTask.addEventListener('click', toggleTask);
    document.getElementById('incompleted-tasks').appendChild(newTask);
    reorderTasks('incompleted-tasks');
}

const reorderTasks = (containerName) => {
    let container = document.getElementById(containerName);
    let incompleteTasks = [... container.children].map(task => ({node: task, name: task.children[1].innerText}));
    incompleteTasks = sortArrayByName([... incompleteTasks]);
    incompleteTasks.forEach(task => container.appendChild(task.node));
}

export { toggleTask, addTask };