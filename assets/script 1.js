//El variable declaration
var quizContainer = document.querySelector(".quizContainer");
var highScoreContainer = document.getElementById("leaderboard");
var questionsContainer = document.getElementById("questionsArea");
var answersContainer = document.getElementById("answersArea");
var timerEl = document.getElementById("timerDisplay");

//buttons
var startBtn = document.querySelector("#startBtn");
var choicesBtn = document.querySelector(".choicesBtn");
// var scoreBtn =

//questions/answers/timer
// var questionEl
// var answerBtnEl
var timeLeft;
var score = 0;
var gameOver;
//arrays
var QuestionsIndex = 0;
var highScores = [];

//array of questions
var theQuestions = [
  {
    question: "Who invented JavaScript?",
    choices: ["Albert Einstein", "Alan Turing", "Brendan Eich", "Allan Alcorn"],
    answer: 2,
  },
  {
    question: "How would you write an alert?",
    choices: [
      "var alert - 'text here';",
      "alert('text here');",
      "alert = 'text here';",
      "alert!('text here');",
    ],
    answer: 1,
  },
  {
    question: "How do you link the example js file to the html?",
    choices: [
      "<script src='./assets/script.js'></script> tag in the body or head element",
      "ask very nicely",
      "<link rel='JavaScript' href='./assets/script.js'/> in the head element",
      "you don't need to",
    ],
    answer: 0,
  },
  {
    question: "What symbol denotes an array?",
    choices: ["[ ]", "> <", "* *", "~ ~"],
    answer: 0,
  },
];

//splash screen
// var splashOff = document.querySelector(".splashPageContainer");
// splashOff.addEventListener("click", () => {
//   splashOff.style.opacity = 0;
//   setTimeout(() => {
//     splashOff.classList.add("hidden");
//   }, 610);
// });

//check timer every second
function countdown() {
  //gets called below in function startQuiz
  timeRemain = 60;

  var timeLeft = setInterval(function () {
    timerEl.textContent = timeRemain;
    timeRemain--;

    if (gameOver) {
      clearInterval(timeLeft);
    }
    if (timeRemain < 0) {
      showScore(); //calls function showScore
      timerEl.innertext === 0;
      clearInterval(timeLeft);
    }
  }, 1000);
}

//display buttons

//eventListeners
startBtn.addEventListener("click", startQuiz); //calls startQuiz below
choicesBtn.addEventListener("click", answersChecker);

//check if answer is correct

//progress question index
function startQuiz() {
  //gets called by eventListener above
  countdown(); //calls countdown function above
  // btn.classList.remove("show");
  // btn.classList.add("hide");
  
  for (var i = 0; i < theQuestions.length; i++) {
    questionsContainer.textContent = theQuestions[i].question; //leads to theQuestions array above
  }
  
  for (var i = 0; i < theQuestions.length; i++) {
    answersContainer.textContent = theQuestions[i].choices; //leads to theQuestions array above
    // addEventListener
  }
  function answersChecker() {
    if (theQuestions[i].answer === false) {
      wrongChecker(); //leads to function below
    } else {
      correctChecker(); //leads to function below
    }
  }
}

//display correct or wrong
function wrongChecker() {
  wrongChecker.classList.add("show"); //gets called from the answers
}
function correctChecker() {
  correctChecker.classList.add("show"); //gets called from the answers
}

//display score
function showScore() {}

//create high score + input initials

//sort scores

//order list of initials based on score

//save score (local storage google)
