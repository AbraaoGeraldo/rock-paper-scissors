console.log("Hello World")


function getComputerChoice () {  

   let pc = Math.random()
   let choice = ""

   if (pc > 0 < 0.5) {
      choice = "Rock"
    } else if (pc > 0.6 < 0.9) {
      choice = "Paper"
    } else {
      choice = "Scissors"
    }

   return choice
        
}

function getHumanChoice() {
   let hum = prompt("Choose your weapon")

   if (hum === "Rock", "rock", "ROCK", "RocK", "paper", "Paper", "PapeR", "PAPER", "Scissors", "scissors", "ScissorS", "SCISSORS") {
      return hum
   }
        
}





function playRound(humanChoice, computerChoice) {
    
   humanChoice = getHumanChoice()
   computerChoice = getComputerChoice()

   if (humanChoice === "Rock", "rock", "ROCK", "RocK") {
      if (computerChoice === "Scissors") {
         humanScore++
         console.log("You Win!")
      } else if (computerChoice === "Paper") {
         computerScore++
         console.log("You Lose")
      } else {
         console.log("Empate!")
         
      } 
   } else if (humanChoice === "paper", "Paper", "PapeR", "PAPER") {
      if (computerChoice === "Rock") {
         humanScore++
         console.log("You Win!")
      } else if(computerChoice === "Scissors") {
         computerScore++
         console.log("You Lose")
      } else {
         console.log("Empate")
      }
   } else if (humanChoice === "Scissors", "scissors", "ScissorS", "SCISSORS") {
      if (computerChoice === "Paper") {
         humanScore++
         console.log("You Win!")
      } else if (computerChoice === "Rock") {
         computerScore++
         console.log("You Lose!") 
      } else {
         console.log("Empate")
      }
   }


}

let humanScore =  0
let computerScore = 0


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




