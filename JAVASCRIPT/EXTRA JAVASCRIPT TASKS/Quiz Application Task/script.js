import { questions } from "./questions.js";
console.log(questions);
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const submitBtn = document.getElementById("submit-btn");
const scoreDisplay = document.getElementById("score");
const questionNumberDisplay = document.getElementById("question-number");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

// Display Question
function displayQuestion(index) {
  question.textContent = `Question ${index + 1}:  ${questions[index].question}`;

  answers.innerHTML = "";

  questions[index].answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = `Option ${questions[index].answers.indexOf(answer) + 1} : ${answer}`;
    button.style.display = "block";
    button.style.margin = "10px 0";

    answers.appendChild(button);
  });

  questionNumberDisplay.textContent = `Question ${index + 1} of ${questions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
}

// Select Answer
answers.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const answer =event.target.textContent.split(" : ")[1];

    selectedAnswer = answer;

    // Remove previous selection
    document.querySelectorAll("#answers button").forEach((btn) => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    // Highlight selected answer
    event.target.style.backgroundColor = "green";
    event.target.style.color = "white";
  }
});

// Submit Answer
submitBtn.addEventListener("click", function () {
  if (selectedAnswer === "") {
    alert("Please select an answer.");
    return;
  }

  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;
  selectedAnswer = "";

  if (currentQuestion < questions.length) {
    displayQuestion(currentQuestion);
  } else {
    question.textContent = "Quiz Completed!";
    answers.innerHTML = "";
    questionNumberDisplay.textContent = "";
    scoreDisplay.textContent = `Final Score: ${score} / ${questions.length}`;

    submitBtn.disabled = true;
  }
});

// Start Quiz
displayQuestion(currentQuestion);
