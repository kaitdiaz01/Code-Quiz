// high score function

var highScoresEl = document.getElementById("highscores");


function showScores() {
    //get scores from local storage or set to an empty array
    var get = localStorage.getItem("input")


    for (var i = 0; i < get.length; i++) {
        var ran = get[i];
        var li = document.createElement("li");
        li.textContent = ran;
        li.setAttribute("data-index", i);

        highScoresEl.appendChild(li);
        
    }



showScores();

//sorting the different scores in desceending order
// playerScores.sort(function (a, b) {
//     return b.scores - a.scores;

// });

// playerScores.forEach(function (scores) {
//    // create an li tag for the scores 
//     var liEl = document.createElement("li");


    
// });
    
};
