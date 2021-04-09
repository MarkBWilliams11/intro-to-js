//Game container
const gameContainer = document.querySelector("#gameContainer");
console.log(gameContainer);
//playerButtons
const playerSelection = document.createElement("div");
playerSelection.setAttribute("id", "playerSelesction");
console.log(playerSelection);

//Rock
const pickRock = document.createElement("button");
//data-id
pickRock.setAttribute("data-id", "rock");
//class name
pickRock.classList.add("rockBtn");
// text content
pickRock.textContent = "Rock";
console.log(pickRock);
//paper
const pickPaper = document.createElement("button");
pickPaper.setAttribute("data-id", "paper");
pickPaper.classList.add("paperBtn");
pickPaper.textContent = "Paper";
console.log(pickPaper);
//scissors
const pickScissors = document.createElement("button");
pickScissors.setAttribute("data-id", "scissors");
pickScissors.classList.add("scissorsBtn");
pickScissors.textContent = "Scissors";
console.log(pickScissors);

//attaching buttons playerSelection conatiner
playerSelection.appendChild(pickRock);
playerSelection.appendChild(pickPaper);
playerSelection.appendChild(pickScissors);

//scorboard container
const playerHeading = document.createElement("h1");
const playerSpan = document.createElement("span");
const computerHeading = document.createElement("h1");
const computerSpan = document.createElement("span");
const scoreboard = document.createElement("div");
const tie = document.createElement("h3");
const winner = document.createElement("h2");

//player heading and span
const player = document.createElement("p");
playerHeading.textContent = "Player Score: ";
playerSpan.textContent = 0;
playerHeading.appendChild(playerSpan);
player.appendChild(playerHeading);

//computer heading and span
const computer = document.createElement("p");
computerHeading.textContent = "Computer Score: ";
computerSpan.textContent = 0;
computerHeading.appendChild(computerSpan);
computer.appendChild(computerHeading);

//attch to scoboard container
scoreboard.appendChild(player);
scoreboard.appendChild(computer);

//attaching Winner h2
gameContainer.appendChild(winner);
//attaching tie
gameContainer.appendChild(tie);
//attachting scoraboard to main gameContainer
gameContainer.appendChild(scoreboard);
//attaching plaerSelection conatiner to main gameContainer
gameContainer.appendChild(playerSelection);
/* functioins */

//computer gentorated answer
function computerGen() {
  computerSelection = ["rock", "paper", "scissors"];
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
console.log(typeof playerSpan);
let playerScore = 0;
let computerScore = 0;
console.log(typeof playerScore);

function playRound() {
  playerButtons = document.querySelectorAll("button");
  playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (playerScore === 5) {
        winner.textContent = `Player Wins`;
        // disble.button;
        return;
      }
      if (computerScore === 5) {
        winner.textContent = `Computer Wins`;
        //disble.button;
        return;
      }
      if (button.dataset.id == computerGen()) {
        return (tie.textContent = "It's a tie");
      } else if (button.dataset.id == "rock" && computerGen() == "scissors") {
        tie.textContent = "";
        playerScore++;

        return (playerSpan.textContent = playerScore);
      } else if (button.dataset.id == "scissors" && computerGen() == "paper") {
        tie.textContent = "";
        playerScore++;

        return (playerSpan.textContent = playerScore);
      } else if (button.dataset.id == "paper" && computerGen() == "rock") {
        tie.textContent = "";
        playerScore++;

        return (playerSpan.textContent = playerScore);
      } else {
        tie.textContent = "";
        computerScore++;

        return (computerSpan.textContent = computerScore);
      }
    });
  });
}

playRound();
