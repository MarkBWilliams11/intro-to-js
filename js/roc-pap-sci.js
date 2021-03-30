let log = console.log;

/* 
//computer choice function
computerSection = 
    a single randomgen selection of rock,paper, or scissors
input for userprompt
playerSelection = 
    userinput from prompt
function that score between player and computer is first to five(loop)

function that keeps score for play and computer
    function to play one single round (playersanswer,computeranswer)

         IF playerAnswer == computerAnswer 
            'TIE'
         IF playerAnswer == "rock" && computerAnswer == "scissors"
            'player Wins'
            playerScore =+1
         ESLEIF playerAnswer == "scissors" && computerAnswer == "paper"
            'player Wins'
            playerScore =+1
         ELSEIF playerAnswer == "paper" && computerAnswer == "rock"
            'player Wins'
            playerScore =+1
        
         ELSE 
            'computer Wins'
            computerScore =+1
    END single Round

END game after five rounds

    logic 
"rock" >"scissors"
"paper" >"rock"
"scissors" >"paper"

*/

//Generate random anser for computer choice
function computerGen() {
  computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}

//prompt for user input answer
let userSelection = "rock"; //prompt("rock,paper,scissors?");

//user answer to lowercase for case sensitivity
let playerAnswer = userSelection.toLowerCase();
//answer for the computer
let computerAnswer = computerGen();

function playRound(playerAnswer, computerAnswer) {
  if (playerAnswer === computerAnswer) {
    return `It's a draw  Score:${playerScore}  ${computerScore} `;
  } else if (playerAnswer == "rock" && computerAnswer == "scissors") {
    playerScore = playerScore + 1;
    return `Player Wins! ${playerAnswer} beats ${computerAnswer} Player:${playerScore} Computer:${computerScore} `;
  } else if (playerAnswer == "scissors" && computerAnswer == "paper") {
    playerScore = playerScore + 1;
    return `Player Wins! ${playerAnswer} beats ${computerAnswer} Player:${playerScore} Computer:${computerScore} `;
  } else if (playerAnswer == "paper" && computerAnswer == "rock") {
    playerScore = playerScore + 1;
    return `Player Wins! ${playerAnswer} beats ${computerAnswer} Player:${playerScore} Computer:${computerScore} `;
  } else {
    computerScore = computerScore + 1;
    return `computer Wins! ${computerAnswer} beats ${playerAnswer} Player:${playerScore} Computer:${computerScore}`;
  }
}

let playerScore = 0;
let computerScore = 0;

//function for game
function game() {
  for (i = 0; i < 5; i++) {
    log(playRound(playerAnswer, computerAnswer));
  }
}
game();
