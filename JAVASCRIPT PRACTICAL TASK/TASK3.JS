const row=document.getElementById("userlist");
const input=document.getElementById("search");
var userlist=[];
async function fetchdata(){
  try{

        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        const data=await response.json();
        return data;
    }
    catch(error){
console.log(error);
    }
    
}

async function main() {
    const user = await fetchdata();
   user.forEach(user=>{
        const tr=document.createElement("tr");
        tr.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.email}</td>
     
    `;
row.append(tr);
});

}
main();
input.addEventListener("input",function(){
    const value=input.value.toLowerCase();
    const tr=row.getElementsByTagName("tr");
    for(i=0;i<tr.length;i++){
        const name=tr[i].cells[1].textContent.toLowerCase();
        if(name.includes(value)){
            tr[i].style.display=""
        }
        else{
            tr[i].style.display="none";
        }
    }
})