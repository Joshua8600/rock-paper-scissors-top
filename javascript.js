/*
Get Computer Choice

1. Get whole number
2. Define values for each choice 1-33, 34-66, 67-99
3. return a final value for the choice
*/
function getRandomInt() { //Get a whole number
    return parseInt((Math.random() * 100));
}

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