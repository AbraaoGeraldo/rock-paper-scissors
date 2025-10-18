let playerScore =1;
let cpuScore = 1;

let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors'

function getComputerChoice() {
    let cpu = parseInt(Math.random() * 10 + 1);
    let cpuChoice = '';

    if (cpu > 5) {
        cpuChoice = 'scissors';
    } else if (cpu < 5) {
        cpuChoice = 'rock';
    } else {
        cpuChoice = 'paper';
    }

    return cpuChoice;
}

function getHumanChoice() {
    let playerChoice = prompt('Choose your weapon');

    if (playerChoice == 'rock', 'paper', 'scissors') {
        return playerChoice;
    }

    return playerChoice
}

function battle(userChoice, pcChoice) {

    userChoice = getHumanChoice();
    pcChoice = getComputerChoice();


    if (userChoice === 'rock') {
        if (pcChoice === 'scissors') {
            alert(`You Lose! CPU Score: ${cpuScore ++}`)
        } else if (pcChoice === 'paper') {
            alert(`You Win! Player Score: ${playerScore ++}`)
        } else {
            alert(`DRAW Score: ${cpuScore++, playerScore ++}`)
        }
    } else {
        alert('erro')
    }
}

battle();