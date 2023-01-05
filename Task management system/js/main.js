function add() {
    document.getElementById("formAdd").style = "display: block;"
}

function censel(){
    document.getElementById("formAdd").style = "display: none;"
}

function censelEdit(){
    document.getElementById("formEdit").style = "display: none;"
}

let obj,tasks,idTask,day,down,downColor,editDown;

tasks = [

];

idTask = 0;

day = new Date().toLocaleString().split(',')[0]; 

down = document.getElementById("dropdown");
editDown = document.getElementById("dropdownEdit");

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

function editAdd(ids){
    objIndex = tasks.findIndex((obj => obj.id == ids));
    document.getElementById("formEdit").style = "display: block;";
}

function edit() {
    tasks[objIndex].taskName = document.getElementById("typeTextEdit").value;
    tasks[objIndex].taskDescription = document.getElementById("typeDescriptionEdit").value;
    tasks[objIndex].tday = day;
    tasks[objIndex].stat = editDown.options[editDown.selectedIndex].text;
    document.getElementById("formEdit").style = 'display: none';
    document.getElementById("typeText").value = "";
    document.getElementById("typeDescription").value = "";


    document.getElementById(`${tasks[objIndex].id}`).innerHTML = "<li>" + tasks[objIndex].taskName + "</li>" + "<li>" + tasks[objIndex].taskDescription + "</li>" + "<li>" + tasks[objIndex].tday + "</li>" + `<li class='status ${downColor[editDown.options[editDown.selectedIndex].value]}' id='statusColor'>` + tasks[objIndex].stat + "</li>" + `<button onclick='delet(${objIndex})'>` + "X" + "</button>" + `<button onclick='editAdd(${objIndex})'>` + "Edit" + "</button>";
}

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
    ul.innerHTML = "<li>" + tasks[idTask].taskName + "</li>" + "<li>" + tasks[idTask].taskDescription + "</li>" + "<li>" + tasks[idTask].tday + "</li>" + `<li class='status ${downColor[down.options[down.selectedIndex].value]}' id='statusColor'>` + tasks[idTask].stat + "</li>" + `<button onclick='delet(${idTask})'>` + "X" + "</button>" + `<button onclick='editAdd(${idTask})'>` + "Edit" + "</button>";
    document.getElementById("array").appendChild(ul);
    document.getElementById("formAdd").style = 'display: none';
    document.getElementById("typeText").value = "";
    document.getElementById("typeDescription").value = "";
    idTask++
}