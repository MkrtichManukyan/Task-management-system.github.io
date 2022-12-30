function add() {
    document.getElementById("formAdd").style = "display: block;"
}

let obj,tasks,idTask;

tasks = [

];

idTask = 0;


function submit() {
    obj = {
        id : idTask, 
        taskName : document.getElementById("typeText").value,
        taskDescription : document.getElementById("typeDescription").value
    };
    tasks.push(obj);
    document.getElementById("typeText").value = "";
    document.getElementById("typeDescription").value = "";
    document.getElementById("formAdd").style = "display: none;";
    idTask++
}

let li = document.createElement('li');
li.innerHTML = 'Jeff';
let ul = document.createElement('ul');
ul.appendChild(li)
document.getElementById('array').appendChild(li);

// document.getElementById("array").innerHTML = "<ul class='list-task'>" + "<li>" + tasks[idTask].id + "</li>" + "<li>" + tasks[idTask].taskName + "</li>" + "<li>" + tasks[idTask].taskDescription + "</li>" + "</ul>";

