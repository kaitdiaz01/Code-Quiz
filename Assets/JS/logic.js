// variable to keep track of time
var questionsIndex = 0;

var timerId;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");
var initalsEl = document.getElementById("initials");

var questions = [
    {
    title: "Arrays in Javascript can be used to store____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
    },
    {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>", "<javascript>", "<script>", "<js>"],
    answer: "<script>"
    },
    {
    title: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> section", "The <body> section", "Both the <head> section and the <body> section are correct"],
    answer: "Both the <head> section and the <body> section are correct"
    },
    {
    title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script src='xxx.js'>", "<script href='xxx.js'>","<script name='xxx.js'>"],
    answer: "<script src='xxx.js'>"
    },
    {
    title: "How do you write 'Hello World' in an alert box?",
    choices: ["alertBox('Hello World');","msgBox('Hello World');", "alert('Hello World');","msg('Hello World');"],
    answer: "alert('Hello World');"
    },

];
var time = questions.length * 15; 


// Start Quiz Function 
function startQuiz () {
    //hide the start screen during the quiz
    var startQuizEl = document.getElementById("begin");
    startQuizEl.setAttribute("class", "hide");
    //show questions on page
    questionsEl.removeAttribute("class");

    //start timer
    timerId = setInterval(function () {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            clearInterval (timerId);
            timerEl.textContent = "Game Over";
            endTheQuiz();

        }
    },1000);
    getQuestion();
    
}

function getQuestion() {
    //variable to store current question
    var currentQuestion = questions[questionsIndex].title;
    //update the question title with current code
    var questionTitle = document.getElementById("q-title");
    questionTitle.textContent = currentQuestion;
    
    //loop over choices using forEach
    questions[questionsIndex].choices.forEach(function(answer) {
        var button = document.createElement('button');
        button.textContent = answer;
        choicesEl.appendChild(button);
        button.setAttribute("value", answer);
        button.addEventListener("click",function(event) {
            event.preventDefault();
            if (event.target.value === questions[questionsIndex].answer) {
                questionsIndex++;
                questionTitle.textContent = "";
                choicesEl.innerHTML = "";
                //check if we've finished asking all the questions
                if (questions.length <= questionsIndex) {
                    endTheQuiz();
                }
                else {
                    getQuestion();
                };
            }
            else {
                time = time-10;
                timerEl.textContent = time;
                if (time <= 0) {
                    endTheQuiz();
                }
            }
        });  
    });

}


function endTheQuiz() {
    //stop timer
    clearInterval(timerId);
    //hide questions
    questionsEl.setAttribute("class","hide");
    var finalScreen = document.getElementById("final-screen");
     //show the final screen
    finalScreen.removeAttribute("class");
    //show final score
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

}

function saveHighScores(event) {
    event.preventDefault();
    //get value from your input box
     var input = {
        initials: initalsEl.value.trim(),
        score: time
     }

    //make sure user wrote their initials in the box
     if (input.initials === "") {
         alert("Please type intials");
         return;  

     }

     //local storage
    else {
       var scores = JSON.parse(localStorage.getItem("input"));
       if (scores !== null) {
           storeScores = scores
       }
       localStorage.setItem("input", JSON.stringify(input));
     };
   
     window.location.href = "./highscore.html";
    //redirect to next page (highscore.html)
};

// key event functions
function enterBtnEvent() {
    //give enter key ability to save your highscore when keydown
    
}

//user clicks to begin quiz
startBtn.addEventListener("click", startQuiz);
//user clicks button to submit their intials
submitBtn.addEventListener("click",saveHighScores);
//this checks if user hit enter for their intials
initalsEl.onkeyup = enterBtnEvent;

