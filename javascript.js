/*
Get Computer Choice

1. Get whole number
2. Define values for each choice 1-33, 34-66, 67-99
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

function getComputerChoice() {
    return assignCpuMove();
}

let computerChoice = getComputerChoice();

// console.log(computerChoice);
// console.log(getRandomInt());
// console.log(assignCpuMove());