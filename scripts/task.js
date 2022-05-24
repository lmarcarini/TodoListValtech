import { sortArrayByName, upperCaseFirstLetter } from "./utils";

export const TasksHandler = () => {
  let idCounter = 0;
  const tasks = [];

  const createTaskElement = (taskText, id) => {
    const taskElement = document.createElement("li");
    taskElement.classList.add("task");
    let textElement = createText(taskText);
    taskElement.appendChild(textElement);
    taskElement.setAttribute("data-id", id);
    taskElement.addEventListener("click", handleClick);
    return taskElement;
  };

  const toggleTask = (taskNode) => {
    taskNode.classList.toggle("task-completed");
    let isCompleted = taskNode.classList.contains("task-completed");
    const targetContainer = isCompleted
      ? "completed-tasks"
      : "incompleted-tasks";
    tasks.find((task) => task.id === Number(taskNode.dataset.id)).completed =
      isCompleted;
    console.table(tasks);
    const newContainer = document.getElementById(targetContainer);
    newContainer.appendChild(taskNode);
    reorderTasks(targetContainer);
  };

  const createText = (text) => {
    let textNode = document.createElement("span");
    textNode.className = "task-text";
    textNode.innerText = upperCaseFirstLetter(text);
    return textNode;
  };

  const addTask = (task) => {
    let id = idCounter++;
    let newTask = createTaskElement(task, id);
    tasks.push({ node: newTask, id: id, completed: false });
    document.getElementById("incompleted-tasks").appendChild(newTask);
    reorderTasks("incompleted-tasks");
    return newTask;
  };

  const reorderTasks = (containerName) => {
    let container = document.getElementById(containerName);
    let incompleteTasks = [...container.children].map((task) => ({
      node: task,
      name: task.children[0].innerText,
    }));
    incompleteTasks = sortArrayByName([...incompleteTasks]);
    incompleteTasks.forEach((task) => container.appendChild(task.node));
  };

  const handleClick = (e) => {
    const taskNode = e.currentTarget;
    toggleTask(taskNode);
  };

  return { toggleTask, addTask };
};
