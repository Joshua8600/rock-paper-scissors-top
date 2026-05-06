/*
Get Computer Choice

1. Get whole number
2. Define values for each choice 1-33, 34-66, 67-99
*/

function getComputerChoice() {
    function getRandomInt() { //Get a whole number
        return parseInt((Math.random() * 100));
    }

    let randomInt = getRandomInt()

    function assignMove() {
        if ((randomInt <= 33) && (randomInt >=1)) {
            return "rock";
        } else if ((randomInt <= 66) && (randomInt >=34)) {
            return "paper";
        } else if ((randomInt <= 99) && (randomInt >=67))
            return "scissors";
    }

    let cpuMove = assignMove();

    console.log(randomInt);
    console.log(cpuMove);

}