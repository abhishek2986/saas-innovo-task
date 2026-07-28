const inputtext = document.getElementById("inputtext");
const submit_button = document.getElementById("submit");
const suggestion = document.getElementById("suggestion");
const numberof_attempt = document.getElementById("attempts");

let score = 100;
let finalscore = 0;
let attempts = 0;
const userpoint = document.getElementById("score");
let playagain = true;

//submit button event handler
submit_button.onclick = function () {
  suggestion.textContent = "";

  if (inputtext.value == "") {
    suggestion.textContent = "⬛ Hint : Enter the Number";
  }
  if (inputtext.value == 0) {
    return;
  }

  attempts++;
  const random_number = Math.round(Math.random() * 100) + 1;

  numberof_attempt.textContent = `⬛ Number of attempts : ${attempts}`;

  if (attempts % 3 == 0) {
    //every 3 attempt 10 point will be minus
    score = score - 10;
    finalscore = score;
  }

  //Logic for diplay the hint for user
  if (parseInt(inputtext.value) > random_number) {
    suggestion.textContent = "⬛ Hint : Number is to high";
  } else {
    suggestion.textContent = "⬛ Hint : Number is to Low";
  }

  //Increase score if userinput match with random number
  if (parseInt(inputtext.value) == random_number){
    finalscore = score;
    alert(`Play again !
    User score : ${finalscore}
    Number of attempts : ${attempts}`);
    userpoint.textContent = `User Score : ${finalscore}`;
    inputtext.value = "";
    userpoint.textContent = "";
    suggestion.textContent = "";
    numberof_attempt.textContent = "";
  } else {
    inputtext.value = "";
    userpoint.textContent = `⬛ User Score : ${score}`;
  }
};
