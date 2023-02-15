var quizContainer = document.querySelector(".quizContainer");
var leaderboardScores = document.getElementById("leaderboard");
var questionsContainer = document.getElementById("questionsArea");
var answersContainer = document.getElementById("answersArea");
var timerEl = document.getElementById("timerDisplay");
var correctYes = document.getElementById("correctChecker");
var wrongYes = document.getElementById("wrongChecker");
var finalScore = document.getElementById("finalScore");
var penaltyDisplay = document.getElementById("penalty");

var startBtn = document.querySelector("#startBtn");

var timeLeft = 60;
var timerInter;
var penaltyPoints = 3;
var score = 0;
var gameOver;
var QuestionsIndex = 0;