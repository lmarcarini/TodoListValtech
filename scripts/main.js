import { TasksHandler } from "./task.js";
import { handleSubmit } from "./inputBar.js";
import { modal } from "./addButton.js";

const appSetup = () => {
  // Setup task bar
  const { addTask } = TasksHandler();

  addTask("Go Shopping");
  addTask("Reading");
  addTask("Short Exercise");
  addTask("Medication").toggleTask();

  // Setup modaladd button
  const newModal = new modal();
  const { isOpen, toggleModal, handleClick } = newModal;
  document.getElementById("add-task-form").addEventListener("submit", (e) => {
    let wasTaskAdded = handleSubmit(e, addTask);
    if (wasTaskAdded && isOpen) {
      toggleModal();
    }
  });
  document
    .getElementById("add-button")
    .addEventListener("click", (e) => handleClick(e));
};

appSetup();
