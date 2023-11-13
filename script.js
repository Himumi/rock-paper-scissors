// 
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    let result;

    if (randomNumber === 1) {
        result = "rock";
    } else if (randomNumber === 2) {
        result = "paper";
    } else {
        result = "scissors";
    }

    return result;
};



function playRound() {
    const playerSelection = prompt("Enter Rock, Paper, or Scissors",).toLowerCase();
    const computerSelection = getComputerChoice();
    let result;

    if (playerSelection === computerSelection) {
        result = "The result is a draw!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            result = "You win! Rock beats Scissors.";
        } else {
            result = "You lose! Paper beats Rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "You Win! Paper beats Rock.";
        } else {
            result = "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            result = "You win! Scissors beats Paper.";
        } else {
            result = "You lose! Rock beats Scissors.";
        }
    }

    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
     console.log(playRound());
    }
}

game();
