//VARIABLE DECLARATION
var generateBtn = document.querySelector("#start");
var questionEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answers");
var quizCont = document.querySelector("#quiz");
var resultsEl = document.querySelector("#results");
var finalEl = document.querySelector("#final");

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

var theQuestions = [
  {
    Question: "Who invented JavaScript?",
    // answers: {
    //   a: "Albert Einstein",
    //   b: "Alan Turing",
    //   c: "Brendan Eich",
    //   d: "Allan Alcorn",
    // },
    // correctAnswer: "c",
  },
  {
    Question: "",
    // answers: {
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    // },
    // correctAnswer: "",
  },
  {
    Question: "",
    // answers: {
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    // },
    // correctAnswer: "",
  },
  {
    Question: "How would you write an alert?",
    // answers: {
    //   a: "alert!('text here');",
    //   b: "var alert = 'text here';",
    //   c: "alert('text here');",
    //   d: "alert = 'text here';",
    // },
    // correctAnswer: "",
  },
  {
    Question: "",
    // answers: {
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    // },
    // correctAnswer: "",
  },
  {
    Question: "write an if statement if not equal to",
    // answers: {
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    // },
    // correctAnswer: "",
  },
  {
    Question: "How do you link the js file to the html?",
    // answers: {
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    // },
    // correctAnswer: "",
  },
  {
    Question: "What is the proper form for a for loop?",
    // answers: {
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    // },
    // correctAnswer: "",
  },
  {
    Question: "How would you call the function 'thisFunction'?",
    // answers: {
    //   a: "call 'thisfunction'",
    //   b: "function thisFunction()",
    //   c: "please call thisFunction, thank you",
    //   d: "function call thisFunction()",
    // },
    // correctAnswer: "b",
  },
  {
    Question: "How do you write out an array in JavaScript?",
    // answers: {
    //   a: "",
    //   b: "",
    //   c: "",
    //   d: "",
    // },
    // correctAnswer: "",
  },
];

var theAnswers = [
  {
    //Question: "Who invented JavaScript?",
    answers: {
      a: "Albert Einstein",
      b: "Alan Turing",
      c: "Brendan Eich",
      d: "Allan Alcorn",
    },
    correctAnswer: "c",
  },
  {
    //Question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    //Question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    //Question: "How would you write an alert?",
    answers: {
      a: "alert!('text here');",
      b: "var alert = 'text here';",
      c: "alert('text here');",
      d: "alert = 'text here';",
    },
    correctAnswer: "c",
  },
  {
    //Question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    // Question: "write an if statement if not equal to",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    //Question: "How do you link the js file to the html?",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    // Question: "What is the proper form for a for loop?",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
  {
    // Question: "How would you call the function 'thisFunction'?",
    answers: {
      a: "call 'thisfunction'",
      b: "function thisFunction()",
      c: "please call thisFunction, thank you",
      d: "function call thisFunction()",
    },
    correctAnswer: "b",
  },
  {
    // Question: "How do you write out an array in JavaScript?",
    answers: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    correctAnswer: "",
  },
];

function theQuiz() {}

function theResults() {}

// theQuiz();

generateBtn.addEventListener("click", theQuiz());
