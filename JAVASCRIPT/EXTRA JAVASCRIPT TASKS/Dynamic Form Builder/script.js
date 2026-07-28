// Get the form container where elements will be added dynamically
const form_builder = document.getElementById("form_builder");

// Get the form element
const form = document.getElementById("form");

// Prevent the form from reloading the page when submitted
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Ask the user how many form elements they want to create
let person = prompt("Please enter the number of element");

// Create the specified number of form elements
for (i = 0; i < person; i++) {
  // Ask which element should be created (label or input)
  let element = prompt("Please enter which element is to create :");

  // -------------------- Create Label --------------------
  if (element == "label") {
    const label = document.createElement("label");
    const labeltext = prompt("Enter the label input text :");
    label.textContent = labeltext;
    form_builder.append(label);
  }

  // -------------------- Create Input --------------------
  if (element == "input") {
    const input = document.createElement("input");
    console.log("input");
    const input_type = prompt("please enter type of input :");
    input.type = input_type;

    // ---------- Radio Button ----------
    if (input_type == "radio") {
      const nameatr = prompt("please enter the name attribute of radio button");
      input.name = nameatr;
      const values = prompt("please enter the value of radio button :");
      input.value = values;
      const value = values;
      form_builder.append(input);
      form_builder.append(value);
    }

    // ---------- Checkbox ----------
    else if (input_type == "checkbox") {
      const values = prompt("please enter the value of checkbox button :");
      input.value = values;
      const value = values;
      form_builder.append(input);
      form_builder.append(value);
    } else {
      input.type = input_type;
      form_builder.append(input);
    }
  }
}
