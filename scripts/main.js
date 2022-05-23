import { toggleTask, addTask } from "./task.js";
import { handleSubmit } from "./inputBar.js";

//for sample
[...document.getElementsByClassName("task")].forEach((element) => {
  element.addEventListener("click", toggleTask);
});

// Setup task bar
document
  .getElementById("addtask-form")
  .addEventListener("submit", (e) => handleSubmit(e, addTask));
