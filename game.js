console.log("Hello World")

let humanScore =  0
let computerScore = 0



function getComputerChoice () {  

   let pc = Math.random()
   let choice = ""

   if (pc >= 0 < 0.5) {
      choice = "Rock"
    } else if (pc >= 0.6 < 0.9) {
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




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {

  let humanChoice = getHumanChoice()
  let computerChoice = getComputerChoice()


   if (humanScore == 1 && computerScore == 0) {
      console.log('Player: 1 CPU: 0')
   } else if (humanScore == 1 && computerScore == 1) {
      console.log('Player: 1 CPU: 1')
   } else if (humanScore == 2 && computerScore == 0) {
      console.log('Player: 2 CPU: 0')
   } else if (humanScore == 2 && computerScore == 2) {
      console.log('Player: 3 CPU: 3')
   } else if (humanScore == 3 && computerScore == 0) {
      console.log('Player Wins')
   } else if (humanScore == 3 && computerScore == 3) {
      console.log('Player: 3 CPU: 3')
   } else if (humanScore == 4 && computerScore == 4) {
      console.log('Player: 4 CPU: 4')
   } else if (humanScore == 5 && computerScore == 4) {
      console.log('Big Draw!')
   }

   if (computerScore == 1 && humanScore == 0) {
      console.log('Player: 0 CPU: 1')
   } else if (computerScore == 2 && humanScore == 0) {
      console.log('Player: 0 CPU: 2')
   } else if (computerScore == 3 && humanScore == 0) {
      console.log('CPU Wins!')
   }

  
}
playGame()
playGame()
playGame()
playGame()
playGame()
