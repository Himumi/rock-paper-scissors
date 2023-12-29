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

function checkResultUser(value) {
    if (value.includes("draw")) {
        return 1;
    } else if (value.includes("Win")) {
        return 1;
    } else {
        return 0;
    }
}

function checkResultComputer(value) {
    if (value.includes("draw")) {
        return 1;
    } else if (value.includes("Win")) {
        return 0;
    } else {
        return 1;
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
const resultDiv = document.querySelector('#result');
const makeDiv = document.createElement('div');
let i = 0;
let valuesForUser = [];
let valuesForComputer = [];
playerSelection.forEach(players =>  {
    
    players.addEventListener('click', () => {
        
        if (i < 5) {
            const result = playRound(players.value, getComputerChoice());
            makeDiv.textContent = result;
            resultDiv.appendChild(makeDiv);
            valuesForUser.push(checkResultUser(result));
            valuesForComputer.push(checkResultComputer(result));
            i++;

            console.log(result);
            console.log(valuesForUser);
            console.log(valuesForComputer);
        }
        console.log("It has five rounded.");
        let userTotal = valuesForUser.reduce((accumulator, currentValue) =>{
            return accumulator += currentValue;
        },0);
        let computerTotal = valuesForComputer.reduce((accumulator, currentValue) => {
            return accumulator += currentValue;
        },0);

        if (userTotal > computerTotal) {
            makeDiv.textContent = "The final winner is You!";
            console.log("You Won!");
        } else {
            makeDiv.textContent = "The final winner is Computer!";
            console.log("You Lost!")
        }
    });
});
