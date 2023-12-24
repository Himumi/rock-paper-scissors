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

function playRound(player, computer) {
    let result;

    if (player === computer) {
        result = "The result is a draw!";
    } else if (player === "rock") {
        if (computer === "scissors") {
            result = "You win! Rock beats Scissors.";
        } else {
            result = "You lose! Paper beats Rock.";
        }
    } else if (player === "paper") {
        if (computer === "rock") {
            result = "You Win! Paper beats Rock.";
        } else {
            result = "You lose! Scissors beats Paper.";
        }
    } else if (player === "scissors") {
        if (computer === "paper") {
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

// const rock = document.querySelector('#rock');
// const paper = document.querySelector("#paper");
// const scissors = document.querySelector("#scissors");

// rock.addEventListener('click', () => {
//     console.log(playRound(rock.value, getComputerChoice()));
// });

// paper.addEventListener('click', () => {
//     console.log(playRound(paper.value, getComputerChoice()));
// });

// scissors.addEventListener('click', () => {
//     console.log(playRound(scissors.value, getComputerChoice()));
// });

const playerSelection = document.querySelectorAll('button');

playerSelection.forEach(players =>  {
    players.addEventListener('click', () => {
        console.log(playRound(players.value, getComputerChoice()));
    });
});