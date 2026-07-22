const todoinput=document.getElementById("todoinput");
const submitbutton=document.getElementById("submit");
const todoresult=document.getElementById("todoresult");
//button onclick event 

const array=[];

function dragstartHandler(ev) {

  ev.dataTransfer.setData("text", ev.target.id);
}


function dragoverHandler(ev) {
  ev.preventDefault();
}


function dropHandler(ev){
      ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const container = ev.target.closest(".dragposition");

            container.append(document.getElementById(data));
}



submitbutton.onclick=function(){
    if(todoinput.value.trim()==""){
        return;
    }

array.push(todoinput.value);
todoinput.value="";
Displaytodo();
}

// Displaytodo();
function Displaytodo() {
    todoresult.innerHTML = "";

    array.forEach((element, index) => {

        const div = document.createElement("div");
        div.classList.add("dragposition");

        div.addEventListener("dragover", dragoverHandler);
div.addEventListener("drop", dropHandler);

        const p = document.createElement("p");
        p.id = `todo-${index}`;
        p.draggable = true;
        p.addEventListener("dragstart", dragstartHandler);

        p.textContent = `■ ${element}`;

        div.append(p);
        todoresult.append(div);
    });
}


// Drag task
//    ↓
// Find old position
//    ↓
// Remove item from array
//    ↓
// Insert item at new position
//    ↓
// Save updated array
//    ↓
// Add new tasks to this updated array