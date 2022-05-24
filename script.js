
var startButton = document.getElementById("startButton");
var quizQuestion = document.getElementById("quizQuestion");
var answer = document.getElementById("answer");
var timerEl = document.getElementById("timer");
var time = quizQuestion.length * 15;
var questionBank = 0;
var countDown;
var optionsEl = document.getElementById("options");



function startQuiz() {
  console.log("start");
  var welcomeSec = document.querySelector("#welcome");
  welcomeSec.style.display = "none";
  quizQuestion.style.display = "block";
  countDown = setInterval(clockTick, 1000)
  // timerEl.textContent = time;

  nextQuestion();
}

function nextQuestion() {
  //retrieves from array of options
  var currentQuestion = quizQuestion[questionBank];
  //displays current question
  var questionEl = document.getElementById("question");
  questionEl.textContent = questionBank.question;
//clears old option choices
  optionsEl.innerHTML = "";

//looping over option choices
  questionBank.options.forEach(function(option, i) {
    // shows a new button for each option
    var optionNode = document.createElement("button");
    optionNode.setAttribute("class", "option");
    optionNode.setAttribute("value", option);

    optionNode.textContent = i + 1 + "." + option;

    optionNode.onclick = answerCheck;
  });
}

function quizOver() {

  // stop the timer
  clearInterval(countDown);

  // display end screen

  //display final score

  // hide questions
}

function clockTick() {
    // update time
    // time--;
    // timerEl.textContent = time;

    if (time <= 0) {
      quizOver();
    }
}



startButton.addEventListener("click", startQuiz);