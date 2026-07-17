const button=document.getElementById("submit");
const quotes=document.getElementById("quotes");
button.onclick=async function(){
    try{
        const response=await fetch("https://dummyjson.com/quotes");
       if(!response.ok){
       
            throw new Error("Failed to fetch data");
        }
        const data=await response.json();
      console.log(data);
        const id=Math.floor(Math.random()*data.quotes.length);
const quote=data.quotes[id];

quotes.textContent=`${quote.quote} - ${quote.author}`
    }catch (error){
console.log(error);
    }
}