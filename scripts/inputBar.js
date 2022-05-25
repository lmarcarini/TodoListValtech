const handleSubmit = (e, addTask) => {
  e.preventDefault();
  const task = new FormData(e.target).get("add-task");
  if (!task || task.length === 0) return false;
  addTask(task);
  e.target.children.namedItem("add-task").value = "";
  return true;
};

export { handleSubmit };
