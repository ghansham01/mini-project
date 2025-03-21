document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".task-input");
    const addBtn = document.querySelector(".add-btn");
    const taskList = document.querySelector(".task-list");

    function addTask() {
        const taskText = input.value.trim();
        
        // Checks if the input is empty, so users can't add blank tasks. 
        if (taskText === "") return;

        // createElement => this are method creates a new HTML element using JavaScript.
        const li = document.createElement("li");
        li.textContent = taskText;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => li.remove());
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        input.value = "";
    }

    addBtn.addEventListener("click", addTask);
    
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
});