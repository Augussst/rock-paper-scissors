// make the bot that will output rock, paper, or scissors

function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  let randomizer = Math.floor(Math.random() * choice.length);
  return choice[randomizer];
}

function playerPlay() {
  let playerInput = prompt("Rock, paper, or scissors?").toLowerCase();
  let playerSelection = playerInput;
  if (playerSelection == undefined || playerSelection == "") {
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

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("You choose " + playerSelection);
    console.log("The bot choose " + computerSelection);
    console.log("It's a draw");
  } else if (
    // Player winning logic
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log("You choose " + playerSelection);
    console.log("The bot choose " + computerSelection);
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
  } else if (
    // Player losing logic
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    console.log("You choose " + playerSelection);
    console.log("The bot choose " + computerSelection);
    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
  } else {
    console.log("I don't know how you break it. Congrats I guess?");
  }
}

console.log(playRound(playerSelection, computerSelection));
