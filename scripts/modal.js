import trapFocusHandler from "./trapFocus";

export function Modal() {
  let open = false;

  const { trapFocus, removeTrapFocus } = trapFocusHandler();

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

    if (open) {
      trapFocus();
    } else {
      removeTrapFocus();
    }
    return;
  };

  const handleClick = (e) => {
    const addButton = e.currentTarget;
    toggleModal();
  };

  const isOpen = () => open;

  return { isOpen, toggleModal, handleClick };
}
