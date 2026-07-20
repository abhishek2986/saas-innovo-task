  const form_builder=document.getElementById("form_builder");
  const form=document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});
  let person = prompt("Please enter the number of element");
  for(i=0;i<person;i++){
let element = prompt("Please enter which element is to create :"); 

//

if(element=="label"){
    const label=document.createElement("label");
    const labeltext=prompt("Enter the label input text :");
    label.textContent=labeltext;
    form_builder.append(label);
}
if(element=="input"){
    const input=document.createElement("input");
    console.log("input");
    const input_type=prompt("please enter type of input :");
    input.type=input_type;
    if(input_type=="radio"){
        const nameatr=prompt("please enter the name attribute of radio button");
        input.name=nameatr;
        const values=prompt("please enter the value of radio button :")
        input.value=values;
        const value=values;
form_builder.append(input);
form_builder.append(value);

    }else if( input_type=="checkbox"){
   const values=prompt("please enter the value of checkbox button :")
        input.value=values;
        const value=values;
form_builder.append(input);
form_builder.append(value);
    }else{
input.type=input_type;
    form_builder.append(input);
    }
   
}


  }































    // if(input_type=="text"){
    //     let text=document.createElement("input");
    //     text.type="text";
    //     form_builder.append(text);
    // }
    // if(input_type=="email"){
    //             let email=document.createElement("input");
    //     email.type="email";
    //             form_builder.append(email);

    // }
    // if(input_type=="password"){
    //             let password=document.createElement("input");
    //     password.type="password;"
    //             form_builder.append(password);

    // }
    // if(input_type=="submit"){
    //             let submit=document.createElement("input");
    //     submit.type=="submit;"
    //             form_builder.append(submit
    //             );

    // }
// }
//       console.log(f);
// if(input.type=="text"){
// input.type = "text";
// form_builder.append(input);
// }
// if(input.type=="checkbox"){
//     input.type="checkbox";
//     form_builder.append(input);
// }
// if(input.type=="password"){
//     input.type="password"
// }
// if(f=="checkbox"){
//     const checkbox=document.createElement("checkbox");
//     form_builder.append(checkbox);
// }

// }