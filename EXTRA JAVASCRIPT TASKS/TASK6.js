const input=document.getElementById("urllink");
const addbutton=document.getElementById("addbutton");
const gallery=document.getElementById("gallery");
const images=[];
addbutton.onclick=function(){

    let url=input.value;
    images.push(url);
console.log(images);
Displayimages(); 
}
function Displayimages(){
gallery.innerHTML="";
    images.forEach((element,index) => {
        const span=document.createElement("span");
        const view_button=document.createElement("button");
        view_button.textContent="View";
        const delete_button=document.createElement("button");
        delete_button.textContent="Delete";
        span.classList.add("image");
        
        //view button 
view_button.onclick=function(){
    
    window.open(element,"_blank");
}
        
        //delete button 
        
        delete_button.onclick=function(){
            images.splice(index,1);
            Displayimages();
        }
        
        span.innerHTML=`<img src="${element}"  id="${index}" height="200px ; width="100%"; object-fit=contain ;/>`
        span.append(view_button);
        span.append(delete_button);
        gallery.append(span);
        
    });
}


Displayimages();