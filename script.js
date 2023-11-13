// 
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    let result;

    if (randomNumber === 1) {
        result = "Rock";
    } else if (randomNumber === 2) {
        result = "Paper";
    } else {
        result = "Scissors";
    }

    return result;
};

const playerSelection = prompt("Enter Rock, Paper, or Scissors", "");
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === computerSelection) {
        result = "The result is a draw!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            result = "You win! Rock beats Scissors.";
        } else {
            result = "You lose! Paper beats Rock.";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            result = "You Win! Paper beats Rock.";
        } else {
            result = "You lose! Scissors beats Paper.";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            result = "You win! Scissors beats Paper.";
        } else {
            result = "You lose! Rock beats Scissors.";
        }
    }

    return result;
}

console.log(playRound(playerSelection, computerSelection));