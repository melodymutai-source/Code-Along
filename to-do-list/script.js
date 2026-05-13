function ToDoList() {
    this.task = {};
    this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
    this.currentId += 1;
    task.id = this.currentId;
    this.task[task.id] = task;
};
ToDoList.prototype.markAsDone = function(id) {
    if (this.task[id] !== undefined){
        this.tasks[id].isDone = true;
        return true;
    }
    return false;
};

ToDoList.prototype.deleteTask =function(id) {
    if(this.task[id] === undefined) {
        return false;
    }
    delete this.tasks[id];
    return true;
};
function Task(description) {
    this.description = description;
    this.isDone = false;
}