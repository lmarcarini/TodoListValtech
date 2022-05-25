const handleSubmit = (e, addTask) => {
  e.preventDefault();
  let form = e.target;
  let formData = new FormData(form);
  const task = formData.get("add-task");
  if (!task || task.length === 0) return false;
  addTask(task);
  e.target.children.namedItem("add-task").value = "";
  return true;
};

export { handleSubmit };
