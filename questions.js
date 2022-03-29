var numQuestions = 0;
var answer = document.getElementById("answer");
var quizQuestion = [
    {
        question: "_can hold many values under a single name.",
        
        choiceA: "objects",
        choiceB: "functions",
        choiceC: "variables",
        choiceD: "arrays",
        answer: "arrays"
    },
    {
        question: "_ are also variables, but contain many values.",
        
        choiceA: "objects",
        choiceB: "functions",
        choiceC: "variables",
        choiceD: "arrays",
        answer: "objects"
    },
    {
        question: "_ are containers for storing data/values.",
      
        choiceA: "objects",
        choiceB: "functions",
        choiceC: "variables",
        choiceD: "arrays",
        answer: "variables"
    },
    {
        question: "Which values are represented by A JavaScript Boolean?",
       
        choiceA: "yes/no",
        choiceB: "positive/negative",
        choiceC: "it only represents integers",
        choiceD: "true/false",
        answer: "true/false"
    },
    {
        question: "10 divided by 3 is 3 with a remainder of 1. In Javascript, the remainder 1 would be represented by the term:" ,
        
        choiceA: "modulo",
        choiceB: "percentage",
        choiceC: "fraction",
        choiceD: "division",
        answer: "modulo"
    },
    {
        question: "A String is...",
        
        choiceA: "43",
        choiceB: "true/false",
        choiceC: "inside quotations",
        choiceD: "43.21",
        answer: "inside quotations"
    },
    {
        question: "_ joins two or more strings, and returns a new joined strings.",
        
            choiceA: "includes()",
            choiceB: "concat()",
            choiceC: "repeat()",
            choiceD: "slice()",
            answer: "concat()"
    },
    {
        question: "Extracts a part of a string and returns a new string.",
        
            choiceA:  "slice",
            choiceB: "split",
            choiceC: "concat",
            choiceD: "includes",
            answer: "slice"
    },
    {
        question: "This acronym is a format for storing and transporting data.",
        
            choiceA: "DOM",
            choiceB: "FUN",
            choiceC: "JCON",
            choiceD: "JSON",
            answer : "JSON"
    },
    {
        question: " _ are a way to group statments together to perform a task.",
            choiceA: "objects",
            choiceB: "functions",
            choiceC: "variables",
            choiceD: "arrays",
            answer: "function"
    },
]

 //Questions display on page  
question.textContent = quizQuestion[0].question; 
  console.log(quizQuestion[0].question);

choiceA.textContent = quizQuestion[0].choiceA;
  console.log(quizQuestion[0].choiceA);

choiceB.textContent = quizQuestion[0].choiceB;
  console.log(quizQuestion[0].choiceB);

choiceC.textContent = quizQuestion[0].choiceC;
  console.log(quizQuestion[0].choiceC);

choiceD.textContent = quizQuestion[0].choiceD;
  console.log(quizQuestion[0].choiceD);



function answerReveal(event) {
    //displays answer under choices
    answer.style.display = "block";
  
    if (this.choice == quizQuestion[numQuestions].answer) {
        answer.textContent = ("Bingo!")
    } else {
      answer.textContent = ("Nope!")
    } console.log(answer.textContent);

    renderNextQuestion();
}; 

function renderNextQuestion(event) {
    //Loops through quizQuestion array
  nextQuestion = quizQuestion[Math.floor(Math.random() * quizQuestion.length)];
  for (var i = 0; i < quizQuestion.length; i++) {
      textContent.quizQuestion[i]
  }
  //appends new questions and choices
  quizQuestion.appendChild(nextQuestion.textContent);

};

answerReveal();

choiceA.addEventListener("click", answerReveal);
console.log("a-clicked");

choiceB.addEventListener("click", answerReveal);
console.log("b-clicked");

choiceC.addEventListener("click", answerReveal);
console.log("c-clicked");

choiceD.addEventListener("click", answerReveal);
console.log("d-clicked");
