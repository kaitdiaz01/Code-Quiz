// high score function

var highScoresEl = document.getElementById("highscores");
console.log("hello");

function showScores() {
    storeScores = [];
    //get scores from local storage or set to an empty array
    var getUserInput = localStorage.getItem("userInput");
    storeScores.push(getUserInput);
    
    for (var i = 0; i < storeScores.length; i++) {
        var ran = storeScores[i];

        var li = document.createElement("li");
        li.textContent = ran;
        li.setAttribute("data-index", i);
        highScoresEl.appendChild(li);
        
    }
  
};
//sorting the different scores in desceending order
// playerScores.sort(function (a, b) {
//     return b.scores - a.scores;

// });

// playerScores.forEach(function (scores) {
//    // create an li tag for the scores 
//     var liEl = document.createElement("li");


    
// });
showScores();