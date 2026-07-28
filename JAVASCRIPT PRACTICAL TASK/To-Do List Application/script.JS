// Get required elements from the page
const submitBtn = document.getElementById("submitbtn");
const input = document.getElementById("add_task");
const todolist = document.getElementById("todo-list");

// Function to add a new task
function SubmitEventt() {
  if (input.value.trim() == "") {
    return;
  }

  const span = document.createElement("span");
  const li = document.createElement("li");
  const submit = document.createElement("button");
  const taskdone = document.createElement("button");
  taskdone.textContent = "Mark Complete";

  // Toggle task between completed and incomplete
  taskdone.onclick = function () {
    if (span.style.textDecoration === "line-through") {
      // Undo
      span.style.textDecoration = "none";
      li.style.color = "black";
      taskdone.textContent = " Mark Complete";
    } else {
      // Complete
      span.style.textDecoration = "line-through";
      li.textContent.style.color = "gray";
      taskdone.textContent = "Undo";
    }
  };

  // Set task text and button label
  span.textContent = `• ${input.value}`;
  submit.textContent = "delete";

  // Add task elements to the list item
  li.append(span);
  li.append(submit);
  li.append(taskdone);

  // Add the new task to the to-do list
  todolist.append(li);

  // Clear the input after adding the task
  input.value = "";

  // Remove the task when Delete is clicked
  submit.onclick = function () {
    li.remove();
  };
}
