document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", () => {
        const taskText = input.value.trim();
        if (taskText) {
            addTodoItem(taskText);
            input.value = "";
        }
    });

    todoList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            const item = event.target.parentElement;
            todoList.removeChild(item);
        } else if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    });

    function addTodoItem(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});