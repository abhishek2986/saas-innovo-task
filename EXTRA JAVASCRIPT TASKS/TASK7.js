const input=document.getElementById("input");
const button=document.getElementById("submit_button");
const frequency_word=document.getElementById("frequency_word");
const title=document.getElementById("title_frequency");
const averagecount=document.getElementById("average_count");
const average_word_title=document.getElementById("average_word_title");
const mostcommon_word=document.getElementById("mostcommon_word");
const commonword_title=document.getElementById("commonword_title");

let arr;
let length;
let cleantext;

//frequency of word
button.onclick=function(){
    frequency_word.textContent="";
    mostcommon_word.textContent="";
     arr=input.value.toLowerCase();
     let word=arr.replace(/[:?!,.]/g," ");
      cleantext=word.trim().split(/\s+/);
     length=cleantext.length;
     console.log(arr);
     const par=document.createElement("p");
     let maxcount=[];
         for(i=0;i<length;i++){
             const p=document.createElement("p");
             let count=0;

title.innerHTML=`<h4>Frequency of Each Word</h4>`
average_word_title.innerHTML=`<h4>Average word length </h4>`
commonword_title.innerHTML=`<h4>most common words</h4>`;

//skip the row to prevent duplicate 
let pre=false;
for(k=0;k<i;k++){
    if(cleantext[i]==cleantext[k]){
pre=true;
break;
    }
}

if(pre){
    continue;
}

             for(j=0;j<length;j++){
             if(cleantext[i]==cleantext[j]){
                 count++;
             }
         }
         maxcount.push(count);
         p.textContent=`■ ${cleantext[i]}--${count}`;
         console.log(p.textContent)
         frequency_word.append(p);
         input.value="";
        }
        
        //average of word length 
        const average_array=[];
        cleantext.forEach((element,index) => {
            const len=element.length;
            average_array.push(len);
        });
        
        const avg=average_array.reduce((accu,curr,index,array)=>{
            return accu+curr;
        },0)
        
        const average=Math.round(avg/length);
        averagecount.innerHTML=`<p> ■ ${average}</p>`;
        console.log(average);
        
        //most common word 
        
        const common=Math.max(...maxcount);
        const p=document.createElement("p");
        
for(i=0;i<maxcount.length;i++){

    if(maxcount[i]==common){

        if (maxcount[i]>1){

            const p=document.createElement("p");
            p.textContent=cleantext[i];
            mostcommon_word.append(p);
            console.log(cleantext[i]);
        } else {
        p.textContent="No repeated common words";
        
        console.log("No repeated common words");
    }
    mostcommon_word.append(p);
       
    }
}
// console.log(cleantext[common]);


}


