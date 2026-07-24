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
  const element=document.getElementById(data); //element that we drag
  console.log(element.textContent)
  const text=element.textContent.replace("■","").trim();
  console.log(text);

  const oldindex= array.indexOf(text); //to find out the index of current text that we drag
console.log(oldindex);

  const container = ev.target.closest(".dragposition");      
  const a_text= ev.target.closest(".dragposition").textContent.replace("■","").trim();   //block of text where we append the our task;
  console.log(a_text);
  const newindex=array.indexOf(a_text);
           console.log(array);
array.splice(oldindex,1);
array.splice(newindex,0,text);
console.log(array);
            container.append(document.getElementById(data));
}


//SUBMIT BUTTON EVENT

submitbutton.onclick=function(){
    if(todoinput.value.trim()==""){
        return;
    }

array.push(todoinput.value);
todoinput.value="";
Displaytodo();
}

// Displaytodo() FUNCTION ;

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
  
// Find old position
  
// Remove item from array
    
// Insert item at new position
    
// Save updated array
   
// Add new tasks to this updated array