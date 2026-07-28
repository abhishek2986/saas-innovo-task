const form = document.getElementById("formBuilder");

// Ask total number of elements
let totalElements = parseInt(prompt("How many form elements do you want?"));

for (let i = 1; i <= totalElements; i++) {
  let type = prompt(
    `Enter type of element ${i}

text
email
password
number
date
checkbox
radio
textarea
select
button`,
  ).toLowerCase();

  let group = document.createElement("div");
  group.className = "form-group";

  // Label
  if (type !== "button") {
    let label = document.createElement("label");
    label.textContent = prompt("Enter Label Name:");
    group.appendChild(label);
  }

  let element;

  switch (type) {
    case "text":
    case "email":
    case "password":
    case "number":
    case "date":
      element = document.createElement("input");
      element.type = type;
      break;

    case "checkbox":
      element = document.createElement("input");
      element.type = "checkbox";
      element.style.width = "auto";
      break;

    case "radio":
      element = document.createElement("input");
      element.type = "radio";
      element.name = "radioGroup";
      element.style.width = "auto";
      break;

    case "textarea":
      element = document.createElement("textarea");
      element.rows = 4;
      break;

    case "select":
      element = document.createElement("select");

      let totalOptions = parseInt(prompt("How many options?"));

      for (let j = 1; j <= totalOptions; j++) {
        let option = document.createElement("option");
        option.textContent = prompt(`Enter Option ${j}`);
        option.value = option.textContent;

        element.appendChild(option);
      }

      break;

    case "button":
      element = document.createElement("button");
      element.type = "button";
      element.textContent = prompt("Enter Button Text");
      element.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page refresh

        alert("Form Submitted Successfully!");
      });
      break;

    default:
      alert("Invalid Type! Text input created.");
      element = document.createElement("input");
      element.type = "text";
  }

  group.appendChild(element);

  form.appendChild(group);
}
