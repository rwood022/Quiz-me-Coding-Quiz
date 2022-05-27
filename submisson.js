function showScoreBoard() {
    // gets score from storage or adds score to empty array
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];

    // arrange scores in descending order
    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    scores.forEach(function(score) {
        //li tag for each score
        var liTag = document.createElement("li");
        liTag.textContent = score, initialsEl + " - " + score.score;

        // display on screen
        var olEL = document.getElementById("scores");
        olEL.appendChild(liTag);
    })
}

function removeScores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}
document.getElementById("Clear All").onclick = removeScores;

// run function when page loads
showScoreBoard();



