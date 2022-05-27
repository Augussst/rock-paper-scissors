// make the bot that will output rock, paper, or scissors

function computerPlay() {
  const choice = ["rock", "paper", "scissor"];
  let randomizer = Math.floor(Math.random() * choice.length);
  return choice[randomizer];
}

function playerPlay() {
  let playerInput = prompt("Rock, paper, or scissors?").toLowerCase();
  let playerSelection = playerInput;
  if (playerSelection == "" || playerSelection == undefined) {
    alert("Canceled");
  } else if (
    playerSelection == "rock" ||
    playerSelection == "paper" ||
    playerSelection == "scissors"
  ) {
    return playerSelection;
  } else {
    alert("You have to choose, rock, paper, or scissors. Try again.");
    playerPlay();
  }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();

console.log("You choose " + playerSelection);
console.log("The bot choose " + computerSelection);
