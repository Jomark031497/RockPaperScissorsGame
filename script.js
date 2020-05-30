

const playerButtons = document.querySelectorAll(".player-container > button");
const gameBoard = document.querySelector(".game-board >.result-display");
const playerMove = document.querySelector("#player-move");
const computerMove = document.querySelector("#computer-move");
let playerScore = 0;
let computerScore = 0;


const hands = ["rock", "paper", "scissors"];




const computerPlay = () => Math.floor(Math.random() * 3);




const getPlayersHands = (playerSelection, computerSelection) => {

    const computersHand = hands[computerSelection];
    playerMove.innerText = playerSelection;
    computerMove.innerText = computersHand;
    console.log(`Your Hand: ${playerSelection}\nOpponents: ${computersHand}`);

    let result = "";

    if (playerSelection == computersHand) {

        result = "You picked the same hand!"
    }

    else if (playerSelection == "rock" && computersHand == "scissors" ||
        playerSelection == "paper" && computersHand == "rock" ||
        playerSelection == "scissors" && computersHand == "paper") {
        result = `${playerSelection.toUpperCase()} beats ${computersHand.toUpperCase()}. You Win!`;
        playerScore += 1;
    }
    else {
        result = `${computersHand.toUpperCase()} beats ${playerSelection.toUpperCase()}. You Lost!`;
        computerScore += 1;
    }

    console.log(`${result}\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
    showResult(result)    

};

const showResult = (res) => {

    gameBoard.innerText = res;
    
    if(computerScore == 5){
        gameBoard.innerText
    }


}

const playRound = (playerHand) => {

    getPlayersHands(playerHand,computerPlay());
    let getComputerMove = computerPlay();

  


}

playerButtons.forEach(hand => {

    hand.addEventListener("click", function (e) {


        let playerHand = e.target.innerText.toLowerCase();
        playRound(playerHand);

    });
});



