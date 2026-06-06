function getRandomInt() {
    return parseInt((Math.random() * 99))
}

function assignCpuMove() {
    let calculateCpuChoice = getRandomInt();
    if ((calculateCpuChoice <= 32) && (calculateCpuChoice >=0)) {
        return "Rock";
    } else if ((calculateCpuChoice <= 65) && (calculateCpuChoice >=33)) {
        return "Paper";
    } else if ((calculateCpuChoice <= 98) && (calculateCpuChoice >=66))
        return "Scissors";
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
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        ++humanScore;
        consoleDisplay.textContent = winMessage;
        roundCleanup();
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        ++computerScore;
        consoleDisplay.textContent = loseMessage;
        roundCleanup();
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        ++humanScore;
        consoleDisplay.textContent = winMessage;
        roundCleanup();
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        ++computerScore;
        consoleDisplay.textContent = loseMessage;
        roundCleanup();
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        ++humanScore;
        consoleDisplay.textContent = winMessage;
        roundCleanup();
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
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
    humanChoiceDisplay.textContent = `Your Choice: ${humanChoice}`
    computerChoiceDisplay.textContent = `Opponent's Choice: ${computerChoice}`
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
let playAgainButton = document.createElement("button");
let humanChoiceDisplay = document.createElement("h3");
let computerChoiceDisplay = document.createElement("h3");


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
    humanChoiceDisplay.textContent = "Your Choice: N/A"
    body.appendChild(humanChoiceDisplay);
    computerChoiceDisplay.textContent = "Opponent's Choice: N/A"
    body.appendChild(computerChoiceDisplay);
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
    body.removeChild(humanChoiceDisplay);
    body.removeChild(computerChoiceDisplay);
    playAgainButton.textContent = "Play again?";
    body.appendChild(playAgainButton);
}

playAgainButton.addEventListener("click", restartGame);

function restartGame() {
    location.reload();
}


rockButton.addEventListener("click", () => {
    humanChoice = "Rock";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    });

paperButton.addEventListener("click", () => {
    humanChoice = "Paper";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});
scissorsButton.addEventListener("click", () => {
    humanChoice = "Scissors";
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});


//To-Do
//1. Say what the computer chose each round when it says the results of the round
//2. intro text, first to 5 wins, etc.
//3. add a restart game button