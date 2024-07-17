console.log("Hello World")
let pc = Math.random()

function getComputerChoice () {       // Essa funçao tem a logica por tras da escolha da maquina
     if (pc > 0.1 < 0.3) {
        console.log("Rock")
    } else if (pc > 0.4 < 0.6 ) {
        console.log("Paper")
    } else if (pc > 0.7 == 1) {
        console.log("Scissors")
    } else {
        console.log("Rock")
    }

    return 
        
}

function getHumanChoice() {
    prompt("Choose your weapon")


        
}



let humanScore =  0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    
    if (getHumanChoice === pc) {
        console.log("Empate")
    } else if (getHumanChoice === "Rock", "rock", "RocK", "ROCK" && pc > 0.7 == 1) {
        console.log("You win!")
    } else if (getHumanChoice === "Paper", "paper", "PapeR", "PAPER" && pc > 0.1 < 0.3 || 0) {
        console.log("You Win!")
    } else if (getHumanChoice === "Scissors", "scissors", "ScissorS", "SCISSORS" && pc > 0.4 < 0.6) {
        console.log("You Win!")
    }
    
    // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




