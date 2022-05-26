export function Modal() {
  let open = false;

  const toggleModal = () => {
    open = !open;
    const addButton = document.getElementById("add-button");
    addButton.classList.toggle("add-button-active");
    const topMenu = document.getElementsByClassName("top-menu")[0];
    topMenu.classList.toggle("top-menu-expanded");
    const inputBar = document.getElementsByClassName(
      "add-task-form-wrapper"
    )[0];
    inputBar.classList.toggle("input-bar-active");
    inputBar.children[0].children[0].focus();
    const modalMask = document.getElementsByClassName("modal-mask")[0];
    modalMask.classList.toggle("modal-mask-active");
    return;
  };

  const handleClick = (e) => {
    const addButton = e.currentTarget;
    toggleModal();
  };

  const isOpen = () => open;

  return { isOpen, toggleModal, handleClick };
}
