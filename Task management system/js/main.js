function add() {
    document.getElementById("formAdd").style = "display: block;"
}

function censel(){
    document.getElementById("formAdd").style = "display: none;"
}

let obj,tasks,idTask;

tasks = [

];

idTask = 0;

let day = new Date().toLocaleString().split(',')[0]; 


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
    let ul = document.createElement('ul');
    ul.innerHTML = "<li>" + tasks[idTask].id + "</li>" + "<li>" + tasks[idTask].taskName + "</li>" + "<li>" + tasks[idTask].taskDescription + "</li>" + "<li>" + day + "</li>";
    ul.setAttribute("class", "list-task");
    document.getElementById("array").appendChild(ul);
    idTask++
}

