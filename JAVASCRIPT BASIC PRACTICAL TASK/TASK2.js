const input = document.getElementById("description");
const checkbox = document.getElementById("checkbox");
const submitbutton = document.getElementById("submit");
const tasklist = document.getElementById("tasklist");
const taskcontain_heading = document.getElementById("taskcontain_heading");
const randomIndex = Math.floor(Math.random() * 10);
const searchfiled = document.getElementById("search");

// Load tasks from localStorage, or use an empty array if none exist
const taskslist = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

// ==================== Display Tasks ====================
function taskdisplay(tasks = taskslist) {
  tasklist.innerHTML = "";

  if (taskslist.length === 0) {
    taskcontain_heading.textContent = "";
  } else {
    taskcontain_heading.textContent = "List of Tasks :";
  }

  // Loop through each task and create its UI
  tasks.forEach((element, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
    <div>id : ${element.id}</div>
    <div>description : ${element.description}</div>
    <div id="taskstatus">task status : ${element.status ? "complete" : "incomplete"}`;
    tasklist.append(li);

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    const editbutton = document.createElement("button");
    editbutton.textContent = "edit";
    const buttondiv = document.createElement("div");
    buttondiv.classList.add("buttons");
    buttondiv.append(editbutton);
    buttondiv.append(deletebutton);
    li.append(buttondiv);

    // ==================== Delete Task ====================
    deletebutton.onclick = function () {
      taskslist.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(taskslist));
      taskdisplay();
    };

    // ==================== Edit Task ====================
    editbutton.onclick = function () {
      input.value = element.description;
      checkbox.checked = element.status;
      editIndex = index;
      submitbutton.textContent = "edit";
    };
  });

  // ==================== Add / Update Task ====================
  submitbutton.onclick = function () {
    if (input.value.trim() == "") {
      return;
    }
    // const tasks={
    //     id: taskslist.length + 1,
    //     description:input.value,
    //     status:checkbox.checked
    // }

    if (input.value.trim() === "") {
      return;
    }
    if (editIndex === null) {
      taskslist.push({
        id: taskslist.length + 1,
        description: input.value,
        status: checkbox.checked,
      });
    } else {
      taskslist[editIndex] = {
        id: taskslist[editIndex].id, // Same ID
        description: input.value,
        status: checkbox.checked,
      };
      editIndex = null;
      submitbutton.textContent = "submit";
    }

    // Save updated tasks to localStorage
    localStorage.setItem("tasks", JSON.stringify(taskslist));
    taskdisplay();

    input.value = "";
    checkbox.checked = false;
  };
}
taskdisplay();

// searchfiled.addEventListener("input",function(){
// if(searchfiled.value===""){
//     taskdisplay();
// }else{

//   const searchList = taskslist.filter((ele) => {
//     return (ele.status ? "completed task" : "incomplete task")
//         .toLowerCase()
//         .includes(searchfield.value.toLowerCase());
// });
//     taskdisplay(searchList);
// }
// })

// ==================== Search / Filter Tasks ====================
searchfiled.addEventListener("change", function () {
  if (searchfiled.value === "") {
    taskdisplay();
    return;
  }

  // Filter tasks based on completion status
  const searchList = taskslist.filter((ele) => {
    if (searchfiled.value === "Complete Task") {
      return ele.status == true;
    }

    if (searchfiled.value === "Incomplete Task") {
      return ele.status == false;
    }
  });

  // Display filtered tasks
  taskdisplay(searchList);
});
