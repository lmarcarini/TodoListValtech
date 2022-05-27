export default function trapFocusHandler() {
  const elements = [
    document.getElementById("add-task"),
    document.querySelector(".add-task-form__button"),
    document.getElementById("add-button"),
  ];

  const handleKeyDown = (e) => {
    if (window.matchMedia("(min-width: 420px)").matches) return;
    let i = elements.findIndex((element) => element === document.activeElement);
    if (i === -1) return;
    if (e.key === "Tab") {
      e.preventDefault();
      if (e.shiftKey) {
        i--;
        if (i < 0) {
          i = elements.length - 1;
        }
        elements[i].focus();
      } else {
        i++;
        if (i >= elements.length) {
          i = 0;
        }
        elements[i].focus();
      }
    }
  };

  const trapFocus = () => {
    elements.forEach((element) =>
      element.addEventListener("keydown", handleKeyDown)
    );
  };

  const removeTrapFocus = () => {
    elements.forEach((element) =>
      element.removeEventListener("keydown", handleKeyDown)
    );
  };
  return { trapFocus, removeTrapFocus };
}
