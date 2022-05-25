import { TasksHandler } from "./task.js";
import { handleSubmit } from "./inputBar.js";
import { handleClick } from "./addButton.js";

const { toggleTask, addTask } = TasksHandler();
addTask("Go Shopping");
addTask("Reading");
addTask("Short Exercise");
toggleTask(addTask("Medication"));

// Setup task bar
document
  .getElementById("addtask-form")
  .addEventListener("submit", (e) => handleSubmit(e, addTask));

console.log(document.getElementById("add-button"));
// Setup add button
document.getElementById("add-button").addEventListener("click", handleClick);
