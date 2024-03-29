import { deleteTask, getTaskById, update, deleteTaskUi } from "./class.js";

import { day, downColor } from "./addTask.js";

let editDown = document.getElementById("dropdownEdit");
let objIndex;

export function edit(ids){
    objIndex = ids;
    document.getElementById("formEdit").style = "display: block;";
};

export function editAdd(arr) {    
    if(document.getElementById("typeTextEdit").value == ""){
        document.getElementById("typeTextEdit").style = "border: 1px solid red;"
    };

    if(document.getElementById("typeDescriptionEdit").value == ""){
        document.getElementById("typeDescriptionEdit").style = "border: 1px solid red;"
    };

    if(document.getElementById("typeTextEdit").value !== "" && document.getElementById("typeDescriptionEdit").value !== ""){
        document.getElementById("typeTextEdit").style = "border: none";
        document.getElementById("typeDescriptionEdit").style = "border: none;";
        editSubmit(arr);
    };
};

function editSubmit(arrs){
    let tasks = getTaskById(objIndex, arrs); 
    tasks.taskName = document.getElementById('typeTextEdit').value;
    tasks.taskDescription = document.getElementById("typeDescriptionEdit").value, 
    tasks.day = day, 
    tasks.stat.text = editDown.options[editDown.selectedIndex].text, 
    tasks.stat.value = editDown.options[editDown.selectedIndex].value;
    update(arrs);
    document.getElementById(`${tasks.id}`).innerHTML = "<li>" + "<textarea class='desctiption-textarea' readonly>" + tasks.taskName + "</textarea>" + "</li>" + "<li>" + "<textarea class='desctiption-textarea' readonly>" + tasks.taskDescription + "</textarea>" + "<li>" + tasks.tday + "</li>" + `<li class='status ${downColor[tasks.stat.value]}' id='statusColor'>` + tasks.stat.text + "</li>" + "<li>" + `<button class='deletDisign' id="delet-${tasks.id}">` + "X" + "</button>" + "</li>" + "<li>" +`<button class='editDisign' id='editAdd-${tasks.id}'>` + "Edit" + "</button>" + "</li>";
    document.getElementById(`delet-${tasks.id}`).addEventListener('click', () => deleteTask(tasks.id, arrs));
    document.getElementById(`delet-${tasks.id}`).addEventListener('click', () => deleteTaskUi(tasks.id));
    document.getElementById(`editAdd-${tasks.id}`).addEventListener('click', () => edit(tasks.id));
    document.getElementById("formEdit").style = 'display: none';
    document.getElementById("typeTextEdit").value = "";
    document.getElementById("typeDescriptionEdit").value = "";
};