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
    title: "Arrays in Javascript can be used Inside which HTML element do we put the JavaScript?",
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
    var setTime = setInterval(function () {
        time--;
        timerEl.textContent = time;

        if (time === 0) {
            clearInterval (setTime);
            timerEl.textContent = "Game Over";
            startQuiz();
        }
    },1000);
    getQuestions();
    
}

function getQuestion() {
    //variable to store current question
    var currentQuestions = questions[questionsIndex];
    //update the question title with current code
    var questionTitle = document.getElementById("q-title");
    questionTitle = currentQuestions;
    //clear out old question choices

    //loop over choices using forEach

    //attach clcik event to listener

    //display the choice on the page

    
}

function clickQuestion() {
    //error handling needed for incorrect answer to question

    //add time deduction

    //display the new time once time deducted

    //flash the wrong/right feedback on the page under the questions

    //move to next question

    //check if we've finished asking all the questions
    
}

function endTheQuiz() {
    //stop timer

    //show the final screen

    //show final score

    //hide questions
}


function clockCountDown() {
    //update the time
    time--;
    timerEl.textContent = time;
    //check if user is out of time
    if (time <= 0) {
        endTheQuiz();
    }
}

function saveHighScores() {
    //get value from your input box

    //make sure user wrote their initials in the box

    //local storage

    //redirect to next page (highscore.html)
}

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

