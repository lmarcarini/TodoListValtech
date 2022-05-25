import { TasksHandler } from "./task.js";
import { handleSubmit } from "./inputBar.js";
import { modal } from "./addButton.js";
import "../styles/global.css";
import "../styles/main.css";

const appSetup = () => {
  const { toggleTask, addTask } = TasksHandler();
  const newModal = new modal();
  const { isOpen, toggleModal, handleClick } = newModal;
  addTask("Go Shopping");
  addTask("Reading");
  addTask("Short Exercise");
  toggleTask(addTask("Medication"));

  // Setup task bar
  document.getElementById("add-task-form").addEventListener("submit", (e) => {
    let wasTaskAdded = handleSubmit(e, addTask);
    if (wasTaskAdded && isOpen) {
      toggleModal();
    }
  });

  console.log(document.getElementById("add-button"));
  // Setup add button
  document
    .getElementById("add-button")
    .addEventListener("click", (e) => handleClick(e));
};

appSetup();
