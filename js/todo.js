const handleAddTask = () => {
    const addTaskBtn = document.querySelector(".add-task-btn");
    const taskList = document.querySelector(".task-list"); 
    const taskItemTemplate = document.getElementById("taskItemTemplate");

    addTaskBtn.addEventListener("click", () => {
        let newTaskItem = taskItemTemplate.content.cloneNode(true);
        taskList.appendChild(newTaskItem);
    });
}

const handleDeleteTask = () => {
    const deleteTaskBtn = document.querySelector(".delete-task-btn");


}






handleAddTask();

