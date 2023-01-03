function add() {
    document.getElementById("formAdd").style = "display: block;"
}

function censel(){
    document.getElementById("formAdd").style = "display: none;"
}

let obj,tasks,idTask,day,down,downColor;

tasks = [

];

idTask = 0;

day = new Date().toLocaleString().split(',')[0]; 

down = document.getElementById("dropdown");


downColor = [
    "colorOne",
    "colorTwo",
    "colorThre",
    "colorFore"
];

function delet(id){
    document.getElementById(id).remove();
    delete tasks[id];
}

// DynamicsCompressorNode

function edit(id){
    tasks[id] = {
        id : idTask, 
        taskName : document.getElementById("typeText").value,
        taskDescription : document.getElementById("typeDescription").value,
        tday : day,
        stat : down.options[down.selectedIndex].text
    }
    document.getElementById("formAdd").style = 'display: block';
    document.getElementById("typeText").value = "";
    document.getElementById("typeDescription").value = "";
}

// DynamicsCompressorNode

function submit() {
    obj = {
        id : idTask, 
        taskName : document.getElementById("typeText").value,
        taskDescription : document.getElementById("typeDescription").value,
        tday : day,
        stat : down.options[down.selectedIndex].text
    };
    tasks.push(obj);
    let ul = document.createElement('ul');
    ul.setAttribute("class", "list-task");
    ul.setAttribute("id", `${idTask}`);
    ul.innerHTML = "<li>" + tasks[idTask].id + "</li>" + "<li>" + tasks[idTask].taskName + "</li>" + "<li>" + tasks[idTask].taskDescription + "</li>" + "<li>" + tasks[idTask].tday + "</li>" + `<li class='status ${downColor[down.options[down.selectedIndex].value]}' id='statusColor'>` + tasks[idTask].stat + "</li>" + `<button onclick='delet(${idTask})'>` + "X" + "</button>" + `<button onclick='edit(${idTask})'>` + "Edit" + "</button>";
    document.getElementById("array").appendChild(ul);
    document.getElementById("formAdd").style = 'display: none';
    document.getElementById("typeText").value = "";
    document.getElementById("typeDescription").value = "";
    idTask++
}