var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var wins = 0
var losses = 0

function setWinsText() {
    win.textContent = wins;
}

function setLossesText() {
    lose.textContent = losses;
}

document.addEventListener("click", function(event) {
    event.preventDefault();
    var timeLeft = 10;
    var lossesCount = document.querySelector(".lose").value;

    var timeInterval = setInterval(function() {
        timerElement.innerHTML = timeLeft;
        timeLeft -= 1;
        if (timeLeft <= -1) {
            clearInterval(timeInterval);
            timerElement.innerHTML = "Time is up!";
            losses++;
            setLossesText();
        }
    }, 100)
})