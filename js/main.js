function add() {
    document.getElementById("formAdd").style = "display: block;";
}

function censel(){
    document.getElementById("formAdd").style = "display: none;"
    document.getElementById("typeText").style = "border: none";
    document.getElementById("typeDescription").style = "border: none;"
}

function censelEdit(){
    document.getElementById("formEdit").style = "display: none;"
    document.getElementById("typeTextEdit").style = "border: none";
    document.getElementById("typeDescriptionEdit").style = "border: none;"
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
}

function editAdd(ids){
    objIndex = tasks.findIndex((obj => obj.id == ids));
    document.getElementById("formEdit").style = "display: block;";
}

function edit() {
    if(document.getElementById("typeTextEdit").value == ""){
        document.getElementById("typeTextEdit").style = "border: 1px solid red;"
    };

    if(document.getElementById("typeDescriptionEdit").value == ""){
        document.getElementById("typeDescriptionEdit").style = "border: 1px solid red;"
    };

    if(document.getElementById("typeTextEdit").value !== "" && document.getElementById("typeDescriptionEdit").value !== ""){
        document.getElementById("typeTextEdit").style = "border: none";
        document.getElementById("typeDescriptionEdit").style = "border: none;"
        editSubmit();
    };
}

function editSubmit(){
    tasks[objIndex].taskName = document.getElementById("typeTextEdit").value;
    tasks[objIndex].taskDescription = document.getElementById("typeDescriptionEdit").value;
    tasks[objIndex].tday = day;
    tasks[objIndex].stat = editDown.options[editDown.selectedIndex].text;
    document.getElementById("formEdit").style = 'display: none';
    document.getElementById("typeTextEdit").value = "";
    document.getElementById("typeDescriptionEdit").value = "";
    document.getElementById(`${tasks[objIndex].id}`).innerHTML = "<li>" + "<textarea class='desctiption-textarea' readonly>"+ tasks[objIndex].taskName + "</textarea>" + "</li>" + "<li>" + "<textarea class='desctiption-textarea' readonly>" + tasks[objIndex].taskDescription + "</textarea>" + "</li>" + "<li>" + tasks[objIndex].tday + "</li>" + `<li class='status ${downColor[editDown.options[editDown.selectedIndex].value]}' id='statusColor'>` + tasks[objIndex].stat + "</li>" + "<li>" + `<button class='deletDisign' onclick='delet(${objIndex})'>` + "X" + "</button>" + "</li>" + "<li>" + `<button class='editDisign' onclick='editAdd(${objIndex})'>` + "Edit" + "</button>" + "</li>";
}

function submit() {
    if(document.getElementById("typeText").value == ""){
        document.getElementById("typeText").style = "border: 1px solid red;"
    };

    if(document.getElementById("typeDescription").value == ""){
        document.getElementById("typeDescription").style = "border: 1px solid red;"
    };

    if(document.getElementById("typeText").value !== "" && document.getElementById("typeDescription").value !== ""){
        document.getElementById("typeText").style = "border: none";
        document.getElementById("typeDescription").style = "border: none;"
        addSubmit();
    };
}
function addSubmit(){
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
    ul.innerHTML = "<li>" + "<textarea class='desctiption-textarea' readonly>" + tasks[idTask].taskName + "</textarea>" + "</li>" + "<li>" + "<textarea class='desctiption-textarea' readonly>" + tasks[idTask].taskDescription + "</textarea>" + "<li>" + tasks[idTask].tday + "</li>" + `<li class='status ${downColor[down.options[down.selectedIndex].value]}' id='statusColor'>` + tasks[idTask].stat + "</li>" + "<li>" + `<button class='deletDisign' onclick='delet(${idTask})'>` + "X" + "</button>" + "</li>" + "<li>" +`<button class='editDisign' onclick='editAdd(${idTask})'>` + "Edit" + "</button>" + "</li>";
    document.getElementById("array").appendChild(ul);
    document.getElementById("formAdd").style = 'display: none';
    document.getElementById("typeText").value = "";
    document.getElementById("typeDescription").value = "";
    idTask++
}
