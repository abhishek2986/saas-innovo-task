const submitBtn=document.getElementById("submitbtn");
const input=document.getElementById("add_task");
const todolist=document.getElementById("todo-list");

function SubmitEventt(){
if(input.value.trim()==""){
    return
}
const span=document.createElement("span")
 const li=document.createElement("li");
const submit=document.createElement("button");
const taskdone=document.createElement("button");
taskdone.textContent="Mark Complete";
taskdone.onclick=function(){
   if (span.style.textDecoration === "line-through") {
        // Undo
        span.style.textDecoration = "none";
        li.style.color = "black";
        taskdone.textContent = "Complete";
    } else {
        // Complete
        span.style.textDecoration = "line-through";
        li.textContent.style.color = "gray";
        taskdone.textContent = "Undo";
    }}

    span.textContent= `• ${input.value}`;
    submit.textContent="delete";
    li.append(span);
    li.append(submit);
    li.append(taskdone);
    todolist.append(li);
    input.value="";
        submit.onclick = function () {
        li.remove();
    };

}
