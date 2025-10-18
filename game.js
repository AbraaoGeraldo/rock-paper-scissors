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

  humanChoice = getHumanChoice()
  computerChoice = getComputerChoice()

   let Player = humanScore;
   let CPU = computerScore;


   if (Player == 1 && CPU == 0) {
      console.log('Player: 1 CPU: 0')
   } else if (Player == 1 && CPU == 1) {
      console.log('Player: 1 CPU: 1')
   } else if (Player == 2 && CPU == 0) {
      console.log('Player: 2 CPU: 0')
   } else if (Player == 2 && CPU == 2) {
      console.log('Player: 3 CPU: 3')
   } else if (Player == 3 && CPU == 0) {
      console.log('Player Wins')
   } else if (Player == 3 && CPU == 3) {
      console.log('Player: 3 CPU: 3')
   } else if (Player == 4 && CPU == 4) {
      console.log('Player: 4 CPU: 4')
   } else if (Player == 5 && CPU == 4) {
      console.log('Big Draw!')
   }

   if (computerScore == 1 && Player == 0) {
      console.log('Player: 0 CPU: 1')
   } else if (computerScore == 2 && Player == 0) {
      console.log('Player: 0 CPU: 2')
   } else if (computerScore == 3 && Player == 0) {
      console.log('CPU Wins!')
   }

  
}
playGame()
playGame()
playGame()
playGame()
playGame()
