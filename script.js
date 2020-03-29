
let choices = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
const results = document.querySelector(".results");

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {

        let playerSelection = button.className;

        console.log(playerSelection);

        let computersSelection = getComputersSelection();

        playRound(playerSelection, computersSelection);
        console.log("player score: " + playerScore + "\nComputer Score: " + computerScore);
        const displayResult = document.createElement('div');
        displayResult.classList.add("displayResults");
        displayResult.textContent = "player Score: " + playerScore
            + "\nComputer Score: " + computerScore;

        results.appendChild(displayResult);

        if (playerScore >= 5) {

            alert("You won the game! congratulations!")
            playerScore = 0;
            computerScore = 0;
            while (results.firstChild) {
                results.removeChild(results.lastChild);
            }
        } else if (computerScore >= 5) {
            alert("You lost the game, Computer Wins!!")
            playerScore = 0;
            computerScore = 0;
            while (results.firstChild) {
                results.removeChild(results.lastChild);
            }
        }


    });
});

function getComputersSelection() {

    let randomNumber = Math.floor((Math.random() * 3));
    return choices[randomNumber];
}

function playRound(playersSelection, computersSelection) {

    if (playersSelection == "Rock" && computersSelection == "Rock") {
        alert("Draw!");
    }
    else if (playersSelection == "Paper" && computersSelection == "Rock") {
        alert("You Win!");
        playerScore += 1;
    }
    else if (playersSelection == "Scissors" && computersSelection == "Rock") {
        alert("You Lost!");
        computerScore += 1;
    }

    else if (playersSelection == "Rock" && computersSelection == "Paper") {
        alert("You Lost!");
        computerScore += 1;
    }
    else if (playersSelection == "Paper" && computersSelection == "Paper") {
        alert("Draw!");

    }
    else if (playersSelection == "Scissors" && computersSelection == "Paper") {
        alert("You Win!");
        playerScore += 1;
    }

    else if (playersSelection == "Rock" && computersSelection == "Scissors") {
        alert("You Win!");
        playerScore += 1;
    }
    else if (playersSelection == "Paper" && computersSelection == "Scissors") {
        alert("You Lost!");
        computerScore += 1;

    }
    else if (playersSelection == "Scissors" && computersSelection == "Scissors") {
        alert("Draw!");

    }



}