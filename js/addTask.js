import { addTask, deleteTask, Task, tasks } from "./class.js";

import { edit } from "./edit.js";

let down;

export const day = new Date().toLocaleString().split(',')[0]; 

down = document.getElementById("dropdown");


export let downColor = [
    "colorOne",
    "colorTwo",
    "colorThre",
    "colorFore"
];

export function submit() {
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
    const task = new Task(document.getElementById("typeText").value, document.getElementById("typeDescription").value, day, down.options[down.selectedIndex].text, down.options[down.selectedIndex].value);
    addTask(task);
    let ul = document.createElement('ul');
    ul.setAttribute("class", "list-task");
    ul.setAttribute("id", `${task.id}`);
    ul.innerHTML = "<li>" + "<textarea class='desctiption-textarea' readonly>" + task.taskName + "</textarea>" + "</li>" + "<li>" + "<textarea class='desctiption-textarea' readonly>" + task.taskDescription + "</textarea>" + "<li>" + task.tday + "</li>" + `<li class='status ${downColor[task.stat.value]}' id='statusColor'>` + task.stat.text + "</li>" + "<li>" + `<button class='deletDisign' id="delet">` + "X" + "</button>" + "</li>" + "<li>" +`<button class='editDisign' id="editAdd">` + "Edit" + "</button>" + "</li>";
    document.getElementById("array").appendChild(ul);
    document.getElementById("delet").addEventListener('click', () => deleteTask(task.id));
    document.getElementById("editAdd").addEventListener('click', () => edit(task.id));
    document.getElementById("formAdd").style = 'display: none';
    document.getElementById("typeText").value = "";
    document.getElementById("typeDescription").value = "";
};

for (let index = 0; index != tasks.length; index++) {
    if(tasks.length !== 0){
        break
    }else if(tasks[index] == null){
        index++
    }else{
        let ul = document.createElement('ul');
        ul.setAttribute("class", "list-task");
        ul.setAttribute("id", `${index}`);
        ul.innerHTML = "<li>" + "<textarea class='desctiption-textarea' readonly>" + tasks[index].taskName + "</textarea>" + "</li>" + "<li>" + "<textarea class='desctiption-textarea' readonly>" + tasks[index].taskDescription + "</textarea>" + "<li>" + tasks[index].tday + "</li>" + `<li class='status ${downColor[tasks[index].stat.value]}' id='statusColor'>` + tasks[index].stat.text + "</li>" + "<li>" + `<button class='deletDisign' id="delet">` + "X" + "</button>" + "</li>" + "<li>" +`<button class='editDisign' onclick='editAdd(${index})'>` + "Edit" + "</button>" + "</li>";
        document.getElementById("array").appendChild(ul);
        document.getElementById("delet").addEventListener('click', () => deleteTask(index.id));
        document.getElementById("editAdd").addEventListener('click', () => edit(index.id));
    }
}