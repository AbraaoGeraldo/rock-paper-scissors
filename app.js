let playerScore =1;
let cpuSccore = 1;

let rock = 'Rock';
let paper = 'paper';
let scissors = 'Scissors'

function getComputerChoice() {
    let cpu = parseInt(Math.random() * 10 + 1);
    let cpuChoice = '';

    if (cpu > 5) {
        cpuChoice = scissors;
    } else if (cpu < 5) {
        cpuChoice = rock;
    } else {
        cpuChoice = paper;
    }

    return cpuChoice;
}

function getHumanChoice() {
    let playerChoice = prompt('Choose your weapon');

    if (playerChoice == "Rock", "rock", "ROCK", "RocK", "paper", "Paper", "PapeR", "PAPER", "Scissors", "scissors", "ScissorS", "SCISSORS") {
        return playerChoice;
    }
}

getComputerChoice();
getHumanChoice()