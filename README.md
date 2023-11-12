# rock-paper-scissors

This project about Rock Paper Scissors Game.

    Pseudocode getComputerChoice

1. Create a FUNCTION "getComputerChoice"
2. Initialize a "randomNumber" VARIABLE and Set with a random number "1, 2, 3"
3. Initialize a "result" VARIABLE
4. IF "randomNumber" value is "1" then
    Set "result" value to "Rock"
5. ELSE IF "randomNumber" value is "2" then
    Set "result" value to "Paper"
6. ELSE IF "randomNumber" value is "3" then
    Set "result" value to "Scissors"
7. RETURN "result" value

    Pseudocode playRound

1. Initialize "playerSelection" VARIABLE and Set value to "Rock"
2. Initialize "computerSelection" VARIABLE and Store "getComputerChoice" value
3. Create "playRound" FUNCTION and Add "playerSelection" and "computerSelection" as inputs
4. Initialize "result" VARIABLE
5. IF "playerSelection" and "computerSelection" have a same value then
    Set "result" value to "The result is a draw!."
6. ELSE IF "playerSelection" value is "Rock" then
    a. IF "computerSelection" value is "Scissors" then 
        Set "result" value to "You win!, Rock beats Scissors."
    b. ELSE IF "computerSelection" value is "Paper" then
        Set "result" value to "You lose!, Paper beats Rock."
7. ELSE IF "playerSelection" value is "Paper" then
    a. IF "computerSelection" value is "Rock" then
        Set "result" value to "You win!, Paper beats Rock."
    b. ELSE IF "computerSelection" value is "Scissors" then
        Set "result" value to "You lose!, Scissors beats Paper."
8. ELSE IF "playerSelection" value is "Scissors" then
    a. IF "computerSelection" value is "Paper" then
        Set "result" value to "You win!, Scissors beats Paper."
    b. ELSE IF "computerSelection" value is "Rock" then
        Set "result" value to "You lose!, Rock beats Scissors."
9. RETURN "result" value