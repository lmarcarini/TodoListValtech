import { sortArrayByName, upperCaseFirstLetter } from "./utils";

export const TasksHandler = () => {
  let idCounter = 0;
  const tasks = [];

  function Task(description) {
    const id = idCounter++;
    const name = description;
    let completed = false;

    const createText = (text) => {
      let textNode = document.createElement("button");
      textNode.className = "task_button";
      textNode.innerText = upperCaseFirstLetter(text);
      return textNode;
    };

    const createTaskElement = (taskText, id) => {
      const taskElement = document.createElement("li");
      taskElement.classList.add("task");
      let textElement = createText(taskText);
      taskElement.appendChild(textElement);
      taskElement.setAttribute("data-id", id);
      taskElement.addEventListener("click", handleClick);
      return taskElement;
    };

    const node = createTaskElement(name, id);

    const toggleTask = () => {
      node.classList.toggle("task-completed");
      let isCompleted = node.classList.contains("task-completed");
      const targetContainer = isCompleted
        ? "completed-tasks"
        : "incomplete-tasks";
      completed = isCompleted;
      const newContainer = document.getElementById(targetContainer);
      newContainer.appendChild(node);
      reorderTasks(targetContainer);
      node.children[0].focus();
    };

    const getCompleted = () => completed;

    return {
      task: this,
      node: node,
      name: name,
      completed: getCompleted,
      id: id,
      toggleTask: (taskNode) => toggleTask(taskNode),
    };
  }

  const addTask = (taskDescription) => {
    let newTask = new Task(taskDescription);
    tasks.push(newTask);
    document.getElementById("incomplete-tasks").appendChild(newTask.node);
    reorderTasks("incomplete-tasks");
    return newTask;
  };

  const reorderTasks = (containerName) => {
    let container = document.getElementById(containerName);
    let taskList = [...container.children].map((task) => ({
      node: task,
      name: task.children[0].innerText,
    }));
    taskList = sortArrayByName([...taskList]);
    taskList.forEach((task) => container.appendChild(task.node));
  };

  const handleClick = (e) => {
    const taskNode = e.currentTarget;
    const currentTask = tasks.find(
      (task) => task.id === Number(taskNode.dataset.id)
    );
    currentTask.toggleTask();
    console.table(tasks);
  };

  return { addTask };
};
