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
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Opponent's Score: ${computerScore}`;
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
let selectionBox = document.createElement("div");
let choicesDisplayBox = document.createElement("div");
let scoresDisplayBox = document.createElement("div");
let systemDisplayBox = document.createElement("div");
let header = document.querySelector("#header");
let rulesIntro = document.querySelector("#rules-intro");
let rulesMain = document.querySelector("#rules-main");
let rulesEnd = document.querySelector("#rules-end");
let teaser = document.querySelector("#teaser");


let startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame)

function startGame() {
    rockButton.classList.add("rock-button");
    rockButton.classList.add("choice-button");
    rockButton.textContent = "Rock";
    selectionBox.appendChild(rockButton);
    paperButton.classList.add("paper-button");
    paperButton.classList.add("choice-button");
    paperButton.textContent = "Paper";
    selectionBox.appendChild(paperButton);
    scissorsButton.classList.add("scissors-button");
    scissorsButton.classList.add("choice-button");
    scissorsButton.textContent = "Scissors";
    selectionBox.appendChild(scissorsButton);
    selectionBox.classList.add("selection-box");
    body.appendChild(selectionBox);
    humanChoiceDisplay.textContent = "Your Choice: N/A"
    choicesDisplayBox.appendChild(humanChoiceDisplay);
    computerChoiceDisplay.textContent = "Opponent's Choice: N/A"
    choicesDisplayBox.appendChild(computerChoiceDisplay);
    choicesDisplayBox.classList.add("choices-display-box");
    body.appendChild(choicesDisplayBox);
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    scoresDisplayBox.appendChild(humanScoreDisplay);
    computerScoreDisplay.textContent = `Opponent's Score: ${computerScore}`;
    scoresDisplayBox.appendChild(computerScoreDisplay);
    scoresDisplayBox.classList.add("scores-display-box");
    body.appendChild(scoresDisplayBox);
    roundCounterDisplay.textContent = `Round: ${roundCounter}`;
    systemDisplayBox.appendChild(roundCounterDisplay);
    consoleDisplay.textContent = "Game Status: Not Started"
    systemDisplayBox.appendChild(consoleDisplay);
    systemDisplayBox.classList.add("system-display-box");
    body.appendChild(systemDisplayBox);
    body.removeChild(startButton);
    rulesIntro.style.display = "none"
    rulesMain.style.display = "none"
    rulesEnd.style.display = "none"
    teaser.style.display = "none"
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
    body.removeChild(selectionBox);
    body.removeChild(choicesDisplayBox);
    body.removeChild(scoresDisplayBox);
    body.removeChild(systemDisplayBox);
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
//1. intro text, first to 5 wins, etc.
//2. add a restart game button