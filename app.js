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
    } else if (cpu = 0){
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
            alert(`You Lose! CPU Score: ${cpuScore ++}`);
        } else if (pcChoice === 'paper') {
            alert(`You Win! Player Score: ${playerScore ++}`);
        } else {
            alert(`DRAW Score: ${cpuScore++, playerScore ++}`);
        }
    } else if (userChoice === 'paper') {
        if (pcChoice === 'rock') {
            alert(`You Lose! CPU Score: ${cpuScore ++}`);
        } else if (pcChoice === 'scissors') {
            alert(`You Win! Player Score: ${playerScore ++}`);
        } else {
            alert(`DRAW Score: ${cpuScore++, playerScore ++}`);
        }
    } else if (userChoice === 'scissors') {
        if (pcChoice == 'rock') {
            alert(`You Lose! CPU Score: ${cpuScore ++}`);
        } else if (pcChoice == 'paper') {
            alert(`You Win! Player Score: ${playerScore ++}`);
        } else {
            alert(`DRAW Score: ${cpuScore++, playerScore ++}`);
        }
    } else {
        battle()
    }
}

battle();