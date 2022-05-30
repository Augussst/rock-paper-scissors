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
    return "win";
  } else if (
    // Player losing logic
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return "lose";
  } else if (playerSelection === computerSelection) {
    return "draw";
  }
}

// "You Win! " + playerSelection + " beats " + computerSelection;
// "You Lose! " + computerSelection + " beats " + playerSelection;
// "It's a draw";
let score = 0;
// make a function that count a score if player win
function scoreCounter(result) {
  if (result == "win") {
    return ++score;
  } else return score;
}

// make a functoin that plays 5 round of rps (repeat playRound 5 times)

function game() {
  for (i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = prompt(
      "Choose rock, paper, or scissors?"
    ).toLowerCase();
    const result = playRound(playerSelection, computerSelection);
    console.log("Round " + (i + 1));
    console.log(
      "You pick " + playerSelection + " and the bot pick " + computerSelection
    );

    if (result == "win") {
      console.log(
        "You Win! " + playerSelection + " beats " + computerSelection
      );
    } else if (result == "lose") {
      console.log(
        "You Lose! " + computerSelection + " beats " + playerSelection
      );
    } else console.log("it's a draw");

    console.log("Score: " + scoreCounter(result));
  }
}

function restart() {
  score = 0;
  console.log("\n \n \n");
  game();
}
