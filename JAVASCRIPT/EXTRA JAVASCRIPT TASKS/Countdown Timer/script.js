const inputfield = document.getElementById("inputfield");
const button = document.getElementById("submit");
const p = document.getElementById("timer_result");

//button onclick event
button.onclick = function () {
  console.log("ello");
  let t = inputfield.value;

  // Start the countdown by decreasing the value every second
  const clearintetval = setInterval(() => {
    console.log("ello");

    let timer = parseInt(t) - 1;
    t = timer;

    p.textContent = `Count Down : ${timer}`;
  }, 1000);

  // Stop the countdown after the entered time is completed
  setTimeout(
    () => {
      clearInterval(clearintetval);
      alert("timer stop");
    },
    parseInt(inputfield.value) * 1000,
  );
};
