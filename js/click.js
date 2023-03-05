export function add() {
    document.getElementById("formAdd").style = "display: block;";
};

export function addCensel() {
    document.getElementById("formAdd").style = "display: none;"
    document.getElementById("typeText").style = "border: none";
    document.getElementById("typeDescription").style = "border: none;"
};

export function censelEdit() {
    document.getElementById("formEdit").style = "display: none;"
    document.getElementById("typeTextEdit").style = "border: none";
    document.getElementById("typeDescriptionEdit").style = "border: none;"
};