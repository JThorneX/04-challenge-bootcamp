//El variable declaration
var quizContainer = document.querySelector(".quizContainer");
var leaderboardScores = document.getElementById("leaderboard");
var questionsContainer = document.getElementById("questionsArea");
var answersContainer = document.getElementById("answersArea");
var timerEl = document.getElementById("timerDisplay");
var correctYes = document.getElementById("correctChecker");
var wrongYes = document.getElementById("wrongChecker");
var finalScore = document.getElementById("finalScore");
var penaltyDisplay = document.getElementById("penalty");

//buttons
var startBtn = document.querySelector("#startBtn");
var clearPoints = document.getElementById("clearLeader");
var startBtn = document.getElementById("startBtn");
// var choicesBtn = document.querySelector("choicesBtn");
// var scoreBtn =

//questions/answers/timer
// var questionEl
// var answerBtnEl
var timeLeft = 60;
var timerInter;
var penaltyPoints = 3;
var score = 0;
var gameOver;
//arrays
var QuestionsIndex = 0;

//elements to hide on page load

// function hideElements() {
//   penalty.setAttribute("hidden", true);
// }

//array of questions
var theQuestions = [
  {
    question: "Who invented JavaScript?",
    choices: ["Albert Einstein", "Alan Turing", "Brendan Eich", "Allan Alcorn"],
    correctAnswer: "Brendan Eich",
  },
  {
    question: "How would you write an alert?",
    choices: [
      "var alert - 'text here';",
      "alert('text here');",
      "alert = 'text here';",
      "alert!('text here');",
    ],
    correctAnswer: "alert('text here');",
  },
  {
    question: "How do you link the example js file to the html?",
    choices: [
      "<script src=''></script> tag in the body or head element",
      "ask very nicely",
      "<link rel=''href=''/> in the head element",
      "you don't need to",
    ],
    correctAnswer: "<script src=''></script> tag in the body or head element",
  },
  {
    question: "What symbol denotes an array?",
    choices: ["[ ]", "> <", "* *", "~ ~"],
    correctAnswer: "[ ]",
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
  timerInter = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft < 1) {
      //NOT 0 !! STOP PUTTING 0
      gameOver(); //calls function game over below
    }
  }, 1000);
}

//display buttons

//eventListeners
startBtn.addEventListener("click", startQuiz); //calls startQuiz below
answersContainer.addEventListener("click", answersChecker);

//check if answer is correct

//start quiz and check answer
function startQuiz() {
  //gets called by event listern above
  countdown();
  goQuestion();
}

var goQuestion = function () {
  //gets called by eventListener above
  //calls countdown function above

  for (i = 0; i < theQuestions.length; i++) {
    var questionvar = theQuestions[QuestionsIndex]; //declaring question to index in questions array above
    var choices = questionvar.choices; //declaring choices to choices array in question

    questionsContainer.textContent = questionvar.question; //makes question appear
    var theBtns = document.getElementById("theBtns" + i); //grabs button id from html
    theBtns.textContent = choices[i]; //leads to theQuestions array above
    theBtns.onclick = answersChecker; //eventListener goes to function below
  }
};
//display correct or wrong
var answersChecker = function (event) {
  //technically in a for loop
  //called from goQuestion above
  var penaltyText = document.getElementById("penalty"); //called in wrong else if
  var checkAnswer = event.target;
  if (checkAnswer.textContent === theQuestions[QuestionsIndex].correctAnswer) {
    correctYes.textContent = "Correct!";
    setTimeout(() => {
      correctYes.style.display = "none";
    }, 800);
    nextQuestion(); //goes to next question function below
  } else if (
    checkAnswer.textContent !== theQuestions[QuestionsIndex].correctAnswer
  ) {
    timeLeft = timeLeft - penaltyPoints;
    penaltyText.textContent = "-3"; //var defined above within function
    wrongYes.textContent = "Wrong!";
    setTimeout(() => {
      wrongYes.style.display = "none";
      penaltyText.style.display = "none";
    }, 800);
    nextQuestion(); //goes to next question below
  } else {
    gameOver(); //goes to game over below
  }
};

//progress question array
var nextQuestion = function () {
  QuestionsIndex++;
  if (QuestionsIndex < theQuestions.length) {
    goQuestion(); //goes to goQuestion above
  } else {
    gameOver(); //goes to game over below
  }
};

//display score
function showScore() {}

//game over
var gameOver = function () {
  clearInterval(timerInter);
  answersContainer.textContent = initialInput();
  questionsContainer.textContent = showScore();
};
//create high score + input initials
// var initialInput = function (event) {
//   event.preventDefault();
// };

//sort scores

//order list of initials based on score

var displayLeaderboard = function () {};
//save score (local storage google)
var updateLeaderboard = function (LBinfo) {
  var LBArray = getScore();
  LBArray.push(LBinfo);
  localStorage.setItem("LBArray", JSON.stringify(LBArray));
};
