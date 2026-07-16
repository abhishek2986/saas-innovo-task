const character_count=document.getElementById("character_count");
const word_count=document.getElementById("word_count");
const frequency_of_eachword=document.getElementById("frequency_of_eachword");
const inputtext=document.getElementById("inputtext");
const submit=document.getElementById("submit");

submit.onclick=function(){

    // character count
    let char=inputtext.value.trim();
    let char_count=char.replaceAll(" ","").length;
    character_count.innerHTML= `<h3>character_count :</h3> ${char_count}`;
   
   //frequency of each word
    const h3=document.createElement("h3");
    h3.textContent="Frequency of each word : "
    frequency_of_eachword.append(h3);
    let cleanText = char.replace(/[.,!?;:]/g, " ").toLowerCase();

    const word=cleanText.trim().split(/\s+/);
    console.log(word);
    for(i=0;i<word.length;i++){
            let alreadyPrinted = false;

        for(k=0;k<i;k++){
            if(word[i]===word[k]){
                alreadyPrinted=true;   // logic for remove duplicate
                break;
            }
        }
        if(alreadyPrinted){
            continue;
        }

        const p=document.createElement("p");
        let count =0;
        for(j=0;j<word.length;j++){
              if(word[i] === word[j]){
                 count++;
                                }        }

p.textContent=`${word[i]} :${count}`
frequency_of_eachword.append(p);
 console.log(word[i], count);
    } 

    //word count  

const wordcount=word.length;
const par=document.createElement("p");
par.innerHTML=`<h3>Word count : </h3>${wordcount}`;
word_count.append(par);

}