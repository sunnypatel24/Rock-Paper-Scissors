const MAX = 3;
    const ROCK = document.getElementById("rock").addEventListener("click", rockButtonPress);
    const PAPER = document.getElementById("paper").addEventListener("click", paperButtonPress);
    const SCISSORS = document.getElementById("scissors").addEventListener("click", scissorsButtonPress);

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * Math.floor(MAX));
    if (computerChoice == 0) {
        return "ROCK";
    } else if (computerChoice == 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return("You lose! Paper beats rock.");
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return("You win! Rock beats scissors.");
    } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        return ("Draw! The computer picked Rock.");
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return ("You win! Paper beats rock.");
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return ("You lose. Scissors beats paper.");
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        return ("Draw! The computer picked Paper.");
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return ("You lose! Rock beats scissors.");
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return ("You win! Scissors beats paper.");
    } else {
        return ("Draw! The computer picked scissors.");
    }
}

function rockButtonPress() {
    let computerSelection = computerPlay();
    let playerSelection = "ROCK";
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}


function paperButtonPress() {
    let computerSelection = computerPlay();
    let playerSelection = "PAPER";
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}


function scissorsButtonPress() {
    let computerSelection = computerPlay();
    let playerSelection = "SCISSORS";
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}