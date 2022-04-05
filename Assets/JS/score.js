// high score function

function showScores() {
    //get scores from local storage or set to an empty array
    //var playerScores= JSON.parse(windows.localStorage.getIttem("highscores"))
var playerScores = [];

//sorting the different scores in desceending order
playerScores.sort(function (a, b) {
    return b.scores - a.scores;

});

playerScores.forEach(function (scores) {
   // create an li tag for the scores 
    var liEl = document.createElement("li");


    
});
    
}