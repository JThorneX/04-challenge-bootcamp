//El variable declaration
var quizContainer
var highScoreContainer
var questionsContainer
var answersContainer


//buttons
var generateBtn = document.querySelector("#start");
var scoreBtn = 

//questions/answers/timer
// var questionEl
var answerBtnEl
var timerEl = document.querySelector("#timer")
var timeLeft;
var score = 0;
var gameOver;
//arrays
var QuestionsIndex = 0;
var highScores = [];

//array of questions

//splash screen
var splashOff = document.querySelector(".splashPage");
splashOff.addEventListener("click", () => {
  splashOff.style.opacity = 0;
  setTimeout(() => {
    splashOff.classList.add("hidden");
  }, 610);
});

//check timer every second
function timeLeft() {
    timeRemain = 60;

var timeLeft = setInterval(function () {
timeEl.innertext = timeRemain;
timeRemain--;

if (gameOver) {
    clearInterval(timeLeft)
}
if (timeLeft < 0) {
    showScore()
    timerEl.innertext = 0
    clearInterval(timeLeft)
}
}, 1000)
};

//display questions and buttons

//display correct or wrong

//check if answer is correct

//progress question index

//display score

//create high score + input initials

//sort scores

//order list of initials based on score

//save score (local storage google)

