function ToDoList() {
    this.tasks = {};
    this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
    this.currentId += 1;
    task.id = this.currentId;
    this.tasks[task.id] = task;
};
ToDoList.prototype.markAsDone = function(id) {
    if (this.tasks[id] !== undefined){
        this.tasks[id].isDone = true;
        return true;
    }
    return false;
};

ToDoList.prototype.deleteTask =function(id) {
    if(this.tasks[id] === undefined) {
        return false;
    }
    delete this.tasks[id];
    return true;
};
function Task(description) {
    this.description = description;
    this.isDone = false;
}

let toDoList = new ToDoList();

function displayTaskDetails(toDoListToDisplay)
{
    let taskListDiv = document.querySelector("div#task-list");
    let htmlForTaskInfo = "";

    Object.keys(toDoListToDisplay.tasks).forEach(function(key)
    {
        const task =toDoListToDisplay.tasks[key];
        htmlForTaskInfo += `<p id="${task.id}">${task.description} -Status: ${task.isDone ? "Done" :"Pending"}
        <button class="deleteButton" id="${task.id}">Delete</button></p>`;
    });

    taskListDiv.innerHTML =htmlForTaskInfo;
}

window.addEventListener("load",function() {
    document.querySelector("form#new-task").addEventListener("submit",function(event) {
        event.preventDefault();
        
        const inputtedDescription = document.querySelector("input#new-task-description").value;
        let newTask = new Task(inputtedDescription);
        toDoList.addTask(newTask);

        displayTaskDetails(toDoList);
        document.querySelector("input#new-task-description").value ="";
    });

    document.querySelector("div#task-list").addEventListener("click",function(event) {
        if (event.target.className ==="deleteButton") {
            toDoList.deleteTask(event.target.id);
            displayTaskDetails(toDoList);
        }
    });
});