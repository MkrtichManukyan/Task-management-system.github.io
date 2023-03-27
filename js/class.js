export let tasks = [];

tasks = loadTasks(tasks) || [];

let idTask = tasks.length;

export class Task {
    constructor(name, description, day, text, color,) {
      this.id = idTask++, 
      this.taskName = name,
      this.taskDescription = description,
      this.tday = day,
      this.stat = {
          text : text,
          value : color
      }
    }
};

export function addTask(task, arr) {
    arr.push(task);
    update(arr)
};

export function deleteTask(taskId, arr) {
    delete arr[taskId];
    update(arr)
};

export function getTaskById(taskId, arr) {
    return arr[taskId];
};

function loadTasks(arrTask) {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        return arrTask = JSON.parse(savedTasks);
    }
}

export function update(arr) {
    localStorage.setItem('tasks', JSON.stringify(arr));
}

export function deleteTaskUi(taskId){
    document.getElementById(taskId).remove();
}