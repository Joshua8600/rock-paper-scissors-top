function getRandomInt() {
    return parseInt((Math.random() * 99))
}

function assignCpuMove() {
    let calculateCpuChoice = getRandomInt();
    if ((calculateCpuChoice <= 32) && (calculateCpuChoice >=0)) {
        return "rock";
    } else if ((calculateCpuChoice <= 65) && (calculateCpuChoice >=33)) {
        return "paper";
    } else if ((calculateCpuChoice <= 98) && (calculateCpuChoice >=66))
        return "scissors";
}

function getComputerChoice() {
    return assignCpuMove();
}

let computerChoice
let humanChoice

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0

let winMessage = "Game Status: You won this round!"
let loseMessage = "Game Status: You lost this round!"
let drawMessage = "Game Status: Draw! Next round!"

function playRound(humanChoice, computerChoice) { //play a round
    if (humanChoice.toLowerCase() === computerChoice) { //compare the two and determine who wins + edit score
        //alert("Draw!");
        ++roundCounter;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
        roundCounterDisplay.textContent = `Round: ${roundCounter}`;
        consoleDisplay.textContent = drawMessage;
        //endRound();
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        //alert(winMessage);
        ++humanScore;
        ++roundCounter;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
        roundCounterDisplay.textContent = `Round: ${roundCounter}`;
        consoleDisplay.textContent = winMessage;
        //endRound();
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        //alert(loseMessage);
        ++computerScore;
        ++roundCounter;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
        roundCounterDisplay.textContent = `Round: ${roundCounter}`;
        consoleDisplay.textContent = loseMessage;
        //endRound();
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        //alert(winMessage);
        ++humanScore;
        ++roundCounter;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
        roundCounterDisplay.textContent = `Round: ${roundCounter}`;
        consoleDisplay.textContent = winMessage;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        //alert(loseMessage);
        ++computerScore;
        ++roundCounter;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
        roundCounterDisplay.textContent = `Round: ${roundCounter}`;
        consoleDisplay.textContent = loseMessage;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        //alert(winMessage);
        ++humanScore;
        ++roundCounter;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
        roundCounterDisplay.textContent = `Round: ${roundCounter}`;
        consoleDisplay.textContent = winMessage;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        //alert(loseMessage);
        ++computerScore;
        ++roundCounter;
        humanScoreDisplay.textContent = `Your score: ${humanScore}`;
        computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
        roundCounterDisplay.textContent = `Round: ${roundCounter}`;
        consoleDisplay.textContent = loseMessage;
    }
}

let body = document.querySelector("body");
let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");
let humanScoreDisplay = document.createElement("h3");
let computerScoreDisplay = document.createElement("h3");
let roundCounterDisplay = document.createElement("h3");
let consoleDisplay = document.createElement("h3");


//Start Game
let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
    rockButton.classList.add("rock-button");
    rockButton.classList.add("choice-button");
    rockButton.textContent = "Rock";
    body.appendChild(rockButton);
    paperButton.classList.add("paper-button");
    paperButton.classList.add("choice-button");
    paperButton.textContent = "Paper";
    body.appendChild(paperButton);
    scissorsButton.classList.add("scissors-button");
    scissorsButton.classList.add("choice-button");
    scissorsButton.textContent = "Scissors";
    body.appendChild(scissorsButton);
    body.removeChild(startButton);
    humanScoreDisplay.textContent = `Your score: ${humanScore}`;
    body.appendChild(humanScoreDisplay);
    computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
    body.appendChild(computerScoreDisplay);
    roundCounterDisplay.textContent = `Round: ${roundCounter}`;
    body.appendChild(roundCounterDisplay);
    consoleDisplay.textContent = "Game Status: Not Started"
    body.appendChild(consoleDisplay);
})

function playGame() {
    let finishMessage = document.createElement("h1");
    body.appendChild(finishMessage);
    if (humanScore == 5 || computerScore == 5) {
        finishMessage.innerText = `Game Over!\n`;
        if (humanScore == 5) {
            finishMessage.innerText += `You win!\nCongratulations!`;
        } else {
            finishMessage.innerText += `You Lose!\nComputer Wins!\nTry again next time!`;
        }
    } else {
        playRound(humanChoice, computerChoice);
    }
} 


rockButton.addEventListener("click", () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playGame();
    //console.log(humanChoice);
    //console.log(computerChoice);
    });

paperButton.addEventListener("click", () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playGame();
    //console.log(humanChoice);
    //console.log(computerChoice);
});
scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playGame();
    //console.log(humanChoice);
    //console.log(computerChoice);
});






//playGame(); //Temp comment out when developing the GUI




//To-Do
//1. add a confirmation to play again
//2. If the game is cancelled, prompt to refresh to start over
//3. prompt to refresh to to play again when it ends
//4. Initial prompt message - remove/change default value, and possibly give more guidance in the prompt message itself
    //feedback from TOP Discord server
//5. If an invalid entry is entered, skip the showing scores part of the loop
    //feedback from TOP Discord server
//6. In a best of 5, 3 points wins no matter what. End game early, with new message, and declare winner once human or CPU reaches 3 points.
//7. Say what the computer chose each round when it says the results of the round
//8. Prompt to set the total round number for the game. instead of defaulting to only 5
//9. Expansion of item (6) where if impossible to win with remaining rounds (2-0 with 1 round left), it automatically ends and declares winner.