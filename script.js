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

console.log(getComputerChoice());