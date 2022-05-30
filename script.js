// make the bot that will output rock, paper, or scissors
function computerPlay() {
  let choice = ["rock", "paper", "scissors"];
  let randomizer = Math.floor(Math.random() * choice.length);
  return choice[randomizer];
}

// make a fucntion that plays one round of rps
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (
    // Player losing logic
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection === computerSelection) {
    return "It's a draw";
  }
}

// make a functoin that plays 5 round of rps (repeat playRound 5 times)

function game() {
  for (i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt(
      "Choose rock, paper, or scissors?"
    ).toLowerCase();
    console.log("Round " + (i + 1));
    console.log(
      "You pick " + playerSelection + " and the bot pick " + computerSelection
    );
    console.log(playRound(playerSelection, computerSelection));
    console.log(scoreCounter());
  }
}

game();
