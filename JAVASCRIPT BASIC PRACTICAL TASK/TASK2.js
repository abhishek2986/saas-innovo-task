const input=document.getElementById("description");
const checkbox=document.getElementById("checkbox");
const submitbutton=document.getElementById("submit");
const tasklist=document.getElementById("tasklist");
const randomIndex = Math.floor(Math.random() * 10);

const taskslist=JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex=null;

function taskdisplay(tasks=taskslist){
        tasklist.innerHTML = "";

tasks.forEach((element,index) => {
    const li=document.createElement("li");
    li.innerHTML=`
    <div>id : ${element.id}</div>
    <div>description : ${element.description}</div>
    <div>task status : ${element.status ? "completed" : "incomplete"}`
    tasklist.append(li);
    
    const deletebutton=document.createElement("button");
    deletebutton.textContent="delete"
        const editbutton=document.createElement("button");
        editbutton.textContent="edit";
        const buttondiv=document.createElement("div");
        buttondiv.classList.add("buttons");
        buttondiv.append(editbutton);
        buttondiv.append(deletebutton);
        li.append(buttondiv);
       
       //delete button logic 
        deletebutton.onclick=function(){
taskslist.splice(index,1);        
            localStorage.setItem("tasks",JSON.stringify(taskslist));
            taskdisplay();
        }

        //edit button logic
        editbutton.onclick=function(){
            input.value=element.description;
            checkbox.checked=element.status;
            editIndex=index;
    submitbutton.textContent="edit";
        }

});
submitbutton.onclick=function(){
    // const tasks={
    //     id: taskslist.length + 1,
    //     description:input.value,
    //     status:checkbox.checked
    // }

    if(input.value.trim() ===""){
        return;
    }
    if(editIndex ===null){
        taskslist.push({
        id: taskslist.length + 1,
        description:input.value,
        status:checkbox.checked
    });

    }else{ 
        
        taskslist[editIndex]= {
        id: taskslist[editIndex].id,   // Same ID
        description: input.value,
        status: checkbox.checked
    };;
editIndex=null;
submitbutton.textContent="submit"
    }
    localStorage.setItem("tasks",JSON.stringify(taskslist));
        taskdisplay();

    input.value = "";
    checkbox.checked = false;
}
}
taskdisplay();