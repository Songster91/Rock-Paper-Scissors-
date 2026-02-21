console.log("Hello world");

// the game is played against the computer so i have to write a function that
// returns rock paper scissors randomly

//create a function
//write a code that returns the 3 value randomly
// we can use the Math.random method here

function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.3333) {
    return "rock";
  } else if (choice < 0.6666) {
    return "paper";
  } else {
    return "scissors";
  }
}
//Now we need to get the human choice .
// we can use the prompt function here to get the input from the user
// assume the user always gives the valid input

function getHumanChoice() {
  return prompt("Please Type Rock, Paper Or scissors");
  // or
  // let choice = prompt("Please Type Rock, Paper Or scissors");
  // return choice;
}

//The score variable
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  //make the human choice case insensitive
  humanChoice = humanChoice.toLowerCase();

  //make the game logic

  if (humanChoice === computerChoice) {
    console.log("Tie!");
    return;
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win!");
    humanScore++;
    return;
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win!");
    humanScore++;
    return;
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win!");
    humanScore++;
    return;
  }
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Computer Wins!");
    computerScore++;
    return;
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer Wins!");
    computerScore++;
    return;
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer Wins!");
    computerScore++;
    return;
  }

  console.log("Warning!!Please type the correct word!");
  return;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`You played: ${humanSelection}`);
    console.log(`Computer played: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
  }

  console.log(`\n=== GAME OVER ===`);
  console.log(`Final: You ${humanScore} - Computer ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 YOU WIN THE GAME!");
  } else if (computerScore > humanScore) {
    console.log("💻 COMPUTER WINS THE GAME!");
  } else {
    console.log("🤝 IT'S A TIE!");
  }
}
playGame();
