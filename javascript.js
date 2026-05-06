/*
Get Computer Choice

1. Get whole number
2. Define values for each choice 1-33, 34-66, 67-99
3. return a final value for the choice
*/
function getRandomInt() { //Get a whole number
    return parseInt((Math.random() * 99))
}

console.log(getRandomInt());

function assignCpuMove() { //assign values for each choice
    let calculateCpuChoice = getRandomInt();
    if ((calculateCpuChoice <= 33) && (calculateCpuChoice >=1)) {
        return "rock";
    } else if ((calculateCpuChoice <= 66) && (calculateCpuChoice >=34)) {
        return "paper";
    } else if ((calculateCpuChoice <= 99) && (calculateCpuChoice >=67))
        return "scissors";
}

function getComputerChoice() { //return a final value for the choice
    return assignCpuMove();
}

let computerChoice = getComputerChoice();
// console.log(computerChoice);

/*
Get Human Choice

1. Prompt for human player to enter
2. return a value for comparison against CPU Move
*/

function getHumanChoice() {
    let calculateHumanChoice = prompt("Rock, paper, or scissors?", "Enter a choice."); //prompt for human player to enter
    return calculateHumanChoice; //return a value for comparison against CPU Move
}

let humanChoice = getHumanChoice();
// console.log(humanChoice);

/*
Declare the players' score variables
*/

let humanScore = 0;
let computerScore = 0;

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
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        alert(winMessage);
        ++humanScore;
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        alert(loseMessage);
        ++computerScore;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        alert(winMessage);
        ++humanScore;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        alert(loseMessage);
        ++computerScore;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        alert(winMessage);
        ++humanScore;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        alert(loseMessage);
        ++computerScore;
    } else {
        alert(otherMessage);
    }
    
    return alert(`Your score: ${humanScore}. Opponent's score: ${computerScore}`); //return score
    
}

// console.log(humanChoice);
// console.log(computerChoice);
// console.log(humanScore);
// console.log(computerScore);