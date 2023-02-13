//VARIABLE DECLARATION
var generateBtn = document.querySelector("#start");
var questionEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answers");
var quizCont = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");
var finalEl = document.querySelector("#final");
// var leaderboards = document.querySelector("");

//variables
var timer = 60;
var runningTimer;
var score = 0;
var questionsIndex = 0;

var splashOff = document.querySelector(".splashPage");
splashOff.addEventListener("click", () => {
  splashOff.style.opacity = 0;
  setTimeout(() => {
    splashOff.classList.add("hidden");
  }, 610);
});

var theQuestions = {
    'Who invented JavaScript?': ['Albert Einstein',
      'Alan Turing',
      'Brendan Eich',
      'Allan Alcorn', 2],
    'How would you write an alert?': ['alert!("text here");',
      'var alert = "text here";',
      'alert("text here");',
      'alert = "text here";', 2],
      'How would you write an not equal to if statement?': ['',
    '',
    '',
    '',
    ],
    'How do you like the js file to the html?': ['<script> tag in the head or body element',
    '',
    '',
    '', 0],
    'What is the proper form for a for loop?': ['',
    '',
    '',
    '',],
    'How would you call the function "callThis"?': ['call "callThis"',
      'please call callThis, thank you',
      'function callThis()',
      'function call callThis()', 2],
    'How do you write out an array in JavaScript?': [ ]
    };

// var theAnswers = [
//   {
//     //Question: "Who invented JavaScript?",
//     answers: {
//       a: "Albert Einstein",
//       b: "Alan Turing",
//       c: "Brendan Eich",
//       d: "Allan Alcorn",
//     },
//     correctAnswer: "c",
//   },
//   {
//     //Question: "",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     correctAnswer: "",
//   },
//   {
//     //Question: "",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     correctAnswer: "",
//   },
//   {
//     //Question: "How would you write an alert?",
//     answers: {
//       a: "alert!('text here');",
//       b: "var alert = 'text here';",
//       c: "alert('text here');",
//       d: "alert = 'text here';",
//     },
//     correctAnswer: "c",
//   },
//   {
//     //Question: "",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     correctAnswer: "",
//   },
//   {
//     // Question: "write an if statement if not equal to",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     correctAnswer: "",
//   },
//   {
//     //Question: "How do you link the js file to the html?",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     correctAnswer: "",
//   },
//   {
//     // Question: "What is the proper form for a for loop?",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     correctAnswer: "",
//   },
//   {
//     // Question: "How would you call the function 'thisFunction'?",
//     answers: {
//       a: "call 'thisfunction'",
//       b: "function thisFunction()",
//       c: "please call thisFunction, thank you",
//       d: "function call thisFunction()",
//     },
//     correctAnswer: "b",
//   },
//   {
//     // Question: "How do you write out an array in JavaScript?",
//     answers: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     correctAnswer: "",
//   },
// ];

function theQuiz(questionsIndex) {
  var questionActive = Object.keys(theQuestions)[questionsIndex];
  questionEl.innerhtml ="";
  questionEl.append();
  questionEl.innerhtml = questionActive;

}

function theResults(questionsIndex) {
  var answer = theQuestions[Object.keys(theQuestions)[questionsIndex]];

  answerEl.innerhtml = "";
}

generateBtn.addEventListener("click", theQuiz());
// generateBtn.addEventListener("click", );

theQuiz();