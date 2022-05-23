const handleSubmit = (e, addTask) => {
    e.preventDefault();
    const task = new FormData(e.target).get("add-task");
    if (task.length === 0) {
        return;
    }
    if (task) {
        addTask(task);
        e.target.children.namedItem("add-task").value = '';
    }
}

export { handleSubmit };