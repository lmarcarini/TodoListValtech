export const handleClick = (e) => {
  console.log("addButton.handleClick");
  const addButton = e.currentTarget;
  addButton.classList.toggle("add-button-active");
  const topMenu = document.getElementsByClassName("top-menu")[0];
  topMenu.classList.toggle("top-menu-expanded");
  const inputBar = document.getElementsByClassName("add-task-input-bar")[0];
  inputBar.classList.toggle("input-bar-active");
  inputBar.children[0].children[0].focus();
  const modalMask = document.getElementsByClassName("modal-mask")[0];
  modalMask.classList.toggle("modal-mask-active");
};
