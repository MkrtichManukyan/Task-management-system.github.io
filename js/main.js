import { add, addCensel, censelEdit } from "./click.js";

import { submit } from "./addTask.js";

import { editAdd } from "./edit.js";

import { tasks } from "./class.js";

document.getElementById("add-button").addEventListener("click", add);

document.getElementById("censel").addEventListener("click", addCensel);

document.getElementById("submit").addEventListener("click", submit);

document.getElementById("censelEdit").addEventListener("click", censelEdit);

document.getElementById("edit").addEventListener("click", () => editAdd(tasks));