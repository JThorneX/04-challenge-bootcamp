//El variable declaration
var quizContainer = document.querySelector(".quizContainer");
var leaderboardScores = document.getElementById("leaderboard");
var questionsContainer = document.getElementById("questionsArea");
var answersContainer = document.getElementById("answersArea");
var timerEl = document.getElementById("timerDisplay");
var correctYes = document.getElementById("correctChecker");
var wrongYes = document.getElementById("wrongChecker");
// var finalScore = document.getElementById("finalScore");
var penaltyDisplay = document.getElementById("penalty");
var typeInitials = document.getElementById("inputInitials");
var choicesArea = document.getElementById("choicesArea");

//buttons
var startBtn = document.querySelector("#startBtn");
var choicesBtn = document.querySelector("#choicesArea"); ////tried choicesArea id, choicesBtn class, unique id after theBtns[]
var clearPoints = document.getElementById("clearLeader");
var startBtn = document.getElementById("startBtn");
var playAgainBtn = document.getElementById("playAgainBtn");
var submitBtn = document.getElementById("submitBtn");
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

// splash screen

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
playAgainBtn.addEventListener("click", playAgain);
submitBtn.addEventListener("click", initialInput);

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
      correctYes.textContent = "";
    }, 800); ////tried style.display = "none";
    nextQuestion(); //goes to next question function below
  } else if (
    checkAnswer.textContent !== theQuestions[QuestionsIndex].correctAnswer
  ) {
    timeLeft = timeLeft - penaltyPoints;
    penaltyText.textContent = "-3"; //var defined above within function (null?) ////still null
    wrongYes.textContent = "Wrong!";
    setTimeout(() => {
      wrongYes.textContent = "";
      penaltyText.textContent = "";
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

//game over
var gameOver = function () {
  clearInterval(timerInter);
  questionsContainer.textContent = "";
  // var theBtns = document.getElementById("theBtns" + i);
  // theBtns.setAttribute("hidden", true);
  choicesBtn.classList.add("hidden");
  typeInitials.removeAttribute("hidden");
};
//play again
var playAgain = function (event) {
  event.preventDefault;
  time = 60;
  clearInterval(timerInter);
  currentQuestion = 0;
  choicesBtn.style.visibility = "visible";
  startQuiz();
};

//create high score + input initials
var initialInput = function (event) {
  //// event.stopPropagation(); ???????????
  questionsContainer.textContent = "Score: " + timeLeft;
  var initials = document.getElementById("inputInitials");
  initials.setAttribute("hidden", "false");
  var LBinfo = {
    initials: initials.value,
    score: timeLeft,
  };
  leaderScores(LBinfo);
  displayLeaderboard();
};

// function finalScore() {
//   score.textContent = timeLeft;
// }
//sort scores
var scoresSort = function () {
  var LBArray = getLocal(); //gets local storage data
  LBArray.sort(function (a, b) {
    return b.score - a.score;
  });
  return LBArray;
};
//order list of initials based on score - should be arrayed with scores above

//leaderboard display
var displayLeaderboard = function () {
  var sort = scoresSort(); //call scoresSort above
  var theLB = document.getElementById("leaderboardBoard"); //the lis in the board itself
  theLB.textContent = "";

  for (i = 0; i < sort.length; i++) {
    var entries = sort[i];
    var entriesLB = document.getElementById("playerDisplay");
    entriesLB.createElement("li");
    entriesLB.textContent = entries.intials + " - " + entries.score;
    theLB.appendChild(entriesLB);
  }
};
//clear leaderboard (localstorage)
var clearLeaderboard = function () {
  localStorage.clear();
  displayLeaderboard();
};
//save score (local storage google) (JSON stringify)
var leaderScores = function (LBinfo) {
  var LBArray = getScore();
  LBArray.push(LBinfo);
  localStorage.setItem("LBArray", JSON.stringify(LBArray));
};
//retrieve from localstorage and parse
var getLocal = function () {
  var localScores = localStorage.getItem("LBArray");
  if (localScores !== null) {
    var LBArray = JSON.parse(localScores);
    return scoreArray;
  } else {
    scoreArray = [];
  }
  return LBArray;
};
