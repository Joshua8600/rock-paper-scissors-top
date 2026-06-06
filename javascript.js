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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        consoleDisplay.textContent = drawMessage;
        roundCleanup();
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        ++humanScore;
        consoleDisplay.textContent = winMessage;
        roundCleanup();
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        ++computerScore;
        consoleDisplay.textContent = loseMessage;
        roundCleanup();
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        ++humanScore;
        consoleDisplay.textContent = winMessage;
        roundCleanup();
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        ++computerScore;
        consoleDisplay.textContent = loseMessage;
        roundCleanup();
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        ++humanScore;
        consoleDisplay.textContent = winMessage;
        roundCleanup();
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        ++computerScore;
        consoleDisplay.textContent = loseMessage;
        roundCleanup();
    }
}

function roundCleanup() {
    ++roundCounter;
    humanScoreDisplay.textContent = `Your score: ${humanScore}`;
    computerScoreDisplay.textContent = `Opponent's score: ${computerScore}`;
    roundCounterDisplay.textContent = `Round: ${roundCounter}`;
    checkGameStatus();
}

let body = document.querySelector("body");
let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");
let humanScoreDisplay = document.createElement("h3");
let computerScoreDisplay = document.createElement("h3");
let roundCounterDisplay = document.createElement("h3");
let consoleDisplay = document.createElement("h3");
let finishMessage = document.createElement("h1");
let restartButton = document.createElement("button");


let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame)

function startGame() {
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
}

function checkGameStatus() {
    body.appendChild(finishMessage);
    if (humanScore == 5 || computerScore == 5) {
        finishMessage.innerText = `Game Over!\n`;
        if (humanScore == 5) {
            finishMessage.innerText += `You win!\nCongratulations!`;
            endGame();
        } else {
            finishMessage.innerText += `You Lose!\nComputer Wins!\nTry again next time!`;
            endGame();
        }
    }
}

function endGame() {
    body.removeChild(rockButton);
    body.removeChild(paperButton);
    body.removeChild(scissorsButton);
    body.removeChild(humanScoreDisplay);
    body.removeChild(computerScoreDisplay);
    body.removeChild(roundCounterDisplay);
    body.removeChild(consoleDisplay);
    restartButton.textContent = "Play again?";
    body.appendChild(restartButton);
}

restartButton.addEventListener("click", restartGame);

function restartGame() {
    location.reload();
}


rockButton.addEventListener("click", () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    });

paperButton.addEventListener("click", () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
scissorsButton.addEventListener("click", () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});


//To-Do
//1. Say what the computer chose each round when it says the results of the round
//2. intro text, first to 5 wins, etc.