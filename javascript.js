/*
Get Computer Choice

1. Get whole number
2. Define values for each choice 1-33, 34-66, 67-99
3. return a final value for the choice
*/

function getRandomInt() { //Get a whole number
    return parseInt((Math.random() * 99))
}

function assignCpuMove() { //assign values for each choice
    let calculateCpuChoice = getRandomInt();
    if ((calculateCpuChoice <= 32) && (calculateCpuChoice >=0)) {
        return "rock";
    } else if ((calculateCpuChoice <= 65) && (calculateCpuChoice >=33)) {
        return "paper";
    } else if ((calculateCpuChoice <= 98) && (calculateCpuChoice >=66))
        return "scissors";
}

function getComputerChoice() { //return a final value for the choice
    return assignCpuMove();
}

let computerChoice
// console.log(computerChoice);

/*
Get Human Choice

1. Prompt for human player to enter
2. return a value for comparison against CPU Move
*/

function getHumanChoice() {
    let calculateHumanChoice = prompt("Rock, paper, or scissors?", "Enter a choice."); //prompt for human player to enter
    return String(calculateHumanChoice); //return a value for comparison against CPU Move
}

let humanChoice
// console.log(humanChoice);

/*
Declare the players' score variables
*/

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0

/*
Logic to play a single round
1. function that caluclates cpu move and human move
2. compare the two and determine who wins
3. increment the winner's score by one
4. show current scores at end of round
*/

function playRound(humanChoice, computerChoice) { //play a round
    let winMessage = "You won this round!"
    let loseMessage = "You lost this round!"
    let otherMessage = "Please enter a valid choice."
    if (humanChoice.toLowerCase() === computerChoice) { //compare the two and determine who wins + edit score
        alert("Draw!");
        ++roundCounter;
        endRound();
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        alert(winMessage);
        ++humanScore;
        ++roundCounter;
        endRound();
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        alert(loseMessage);
        ++computerScore;
        ++roundCounter;
        endRound();
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        alert(winMessage);
        ++humanScore;
        ++roundCounter;
        endRound();
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        alert(loseMessage);
        ++computerScore;
        ++roundCounter;
        endRound();
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        alert(winMessage);
        ++humanScore;
        ++roundCounter;
        endRound();
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        alert(loseMessage);
        ++computerScore;
        ++roundCounter;
        endRound();
    } else {
        alert(otherMessage);
        endRound();
    }
}

function endRound() {
    alert(`Your score: ${humanScore}. Opponent's score: ${computerScore}`); //return score
    console.log(`Your score: ${humanScore}. Opponent's score: ${computerScore}`);
    playGame();
}

function playGame() {
    if (roundCounter == 5) {
        if (humanScore > computerScore) {
            alert("You win!");
        } else if (computerScore > humanScore) {
            alert("You lose!");
        } else if (computerScore == humanScore) {
            alert("The game is a draw!");
        }
    } else if (roundCounter < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();
//For testing as development continues
// console.log(humanChoice);
// console.log(computerChoice);
// console.log(humanScore);
// console.log(computerScore);