const number1=document.getElementById("first_number");
const number2=document.getElementById("second_number");

const add_button=document.getElementById("addtion");
const sub_button=document.getElementById("substraction");
const div_button=document.getElementById("division");
const multi_button=document.getElementById("multiplication");

const result=document.getElementById("result");

//addition event

add_button.onclick=function(){
   const p=document.createElement("p");
   const addition=parseInt(number1.value) + parseInt(number2.value);
   result.textContent=`Addition of two number : ${addition}`;
}

// substraction event

sub_button.onclick=function(){
   const p=document.createElement("p");
   const substraction=parseInt(number1.value)- parseInt(number2.value);
   result.textContent=`substraction of two number :${substraction}`
}

// division event
div_button.onclick=function(){
   const p=document.createElement("p");
   const division=parseInt(number1.value)/ parseInt(number2.value);
   result.textContent=`division of two number : ${division}`
}

//multiplication event 

multiplication.onclick=function(){
   const p=document.createElement("p");
   const multiplication=parseInt(number1.value)*parseInt(number2.value);
   result.textContent=`multiplication of two number : ${multiplication}`
}

