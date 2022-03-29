var welcomeSec = document.querySelector("#welcome");
var startButton = document.getElementById("startButton");
var quizQuestion = document.getElementById("quizQuestion");
var timerEl = document.getElementById("timer");
var time = 60;
var choices = document.getElementById("choices");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");



function startQuiz() {
  console.log("start");
  
  welcomeSec.style.display = "none";
  quizQuestion.style.display ="block";
  var countDown = setInterval(clockTick, 1000)
  timerEl.textContent = time
}

function clockTick() {
    // update time
    time--;
    timerEl.textContent = time;
}



startButton.addEventListener("click", startQuiz);