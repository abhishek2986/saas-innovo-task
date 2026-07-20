const input=document.getElementById("urllink");
const addbutton=document.getElementById("addbutton");
const gallery=document.getElementById("gallery");
addbutton.onclick=function(){
    const span=document.createElement("span");
    const view_button=document.createElement("button");
    view_button.textContent="View"
    const delete_button=document.createElement("button");
    delete_button.textContent="Delete"
    span.classList.add("image");
    console.log("herllo");
    let url=input.value;
    span.innerHTML=`<img src=${url} height="200px ; width="200px"; object-fit=contain ;/>`
    span.append(view_button);
    span.append(delete_button);
    gallery.append(span);
}
