const todoinput = document.getElementById("todoinput");
const submitbutton = document.getElementById("submit");
const todoresult = document.getElementById("todoresult");

let array = JSON.parse(localStorage.getItem("todo")) || [];


function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(array));
}


function dragstartHandler(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function dragoverHandler(ev) {
    ev.preventDefault();
}


function dropHandler(ev) {
    ev.preventDefault();

    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    const fromIndex = draggedElement.dataset.index;

    const target = ev.target.closest(".dragposition");

    if (!target) return;

    const toIndex = target.firstChild.dataset.index;

    // Update array order
    const movedItem = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, movedItem);


    saveTodo();
    Displaytodo();
}


submitbutton.onclick = function () {

    if (todoinput.value.trim() === "") {
        return;
    }

    array.push(todoinput.value);

    todoinput.value = "";

    saveTodo();
    Displaytodo();
};



function Displaytodo() {

    todoresult.innerHTML = "";


    array.forEach((element, index) => {

        const div = document.createElement("div");
        div.classList.add("dragposition");

        div.addEventListener("dragover", dragoverHandler);
        div.addEventListener("drop", dropHandler);


        const p = document.createElement("p");

        p.id = `todo-${index}`;

        p.dataset.index = index;

        p.draggable = true;

        p.addEventListener("dragstart", dragstartHandler);


        p.textContent = `■ ${element}`;


        div.append(p);

        todoresult.append(div);

    });

}


// Load saved todos
Displaytodo();