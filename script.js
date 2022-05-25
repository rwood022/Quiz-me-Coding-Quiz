
var startButton = document.getElementById("startButton");
var quizQuestionEl = document.getElementById("quizQuestion");
var answer = document.getElementById("answer");
var timerEl = document.getElementById("time");
var time = quizQuestion.length * 9;
var questionBank = 0;
var countDown;
var optionsEl = document.getElementById("options");



function startQuiz() {
  console.log("start");

  // hide start screen
  var welcomeSec = document.querySelector("#welcome");
  welcomeSec.setAttribute("class", "hide");

  //display questions
  quizQuestionEl.removeAttribute("class");
  console.log(quizQuestionEl.textContent);

  // start timer
  countDown = setInterval(clockTick, 1000)

  //show starting time
  timerEl.textContent = time;

  nextQuestion();
}

function nextQuestion() {
  //retrieves from array of options
  var currentQuestion = quizQuestion[questionBank];
  //displays current question
  var questionEl = document.getElementById("quizQuestion-question");
  questionEl.textContent = currentQuestion.question;
//clears old option choices
  optionsEl.innerHTML = "";

//looping over option choices
  currentQuestion.options.forEach(function(options, i) {
    // shows a new button for each option
    var optionsNode = document.createElement("button");
    optionsNode.setAttribute("class", "options");
    optionsNode.setAttribute("value", options);

    // displays a number (1-4) to each option
    optionsNode.textContent = i + 1 + ". " + options;

    // click event listener is attached to each option
    optionsNode.onclick = answerCheck;

    //shows on page
    optionsEl.appendChild(optionsNode);
  });
}

function answerCheck() {
  // check if option is incorrect
  if (this.value !== quizQuestion[questionBank].correct) {
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;
    answer.textContent = "Wrong";
  } else {
    answer.textContent = "Correct!";
  }

  answer.setAttribute("class", "answer");
  setTimeout(function() {
    answer.setAttribute("class", "hide");
  }, 1000);

  // get next question
  questionBank++; 

  // end game if all questions have been answered
  if (questionBank === quizQuestion.length) {
    quizOver();
  } else {
    nextQuestion();
  }
}

function quizOver() {

  // stop the timer
  clearInterval(countDown);

  // display end screen
var finishedQuizEl = document.getElementById("finishedQuiz");
finishedQuizEl.removeAttribute("class");

  //display final score
var scoreEl = document.getElementById("score");
scoreEl.textContent = time;

  // hide questions
  quizQuestion.setAttribute("class", "hide");
}

function clockTick() {
    // update time; and displays the countdown
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
      quizOver();
    }
}



startButton.addEventListener("click", startQuiz);