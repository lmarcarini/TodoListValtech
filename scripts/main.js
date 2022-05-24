import { TasksHandler } from "./task.js";
import { handleSubmit } from "./inputBar.js";

const { toggleTask, addTask } = TasksHandler();
addTask("Go Shopping");
addTask("Reading");
addTask("Short Exercise");
toggleTask(addTask("Medication"));

// Setup task bar
document
  .getElementById("addtask-form")
  .addEventListener("submit", (e) => handleSubmit(e, addTask));
