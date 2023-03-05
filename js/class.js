let idTask = 0;

export let tasks = [];

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

export function addTask(task) {
    tasks.push(task);
};

export function deleteTask(taskId) {
    debugger
    document.getElementById(taskId).remove();
    delete tasks[taskId];
};

export function getTaskById(taskId) {
    return tasks.find((task) => task.id === taskId);
};
