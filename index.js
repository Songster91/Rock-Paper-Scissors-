// ============================================
// STEP 1: Get the computer's random choice
// ============================================
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

// ============================================
// SCORE VARIABLES - track points across rounds
// ============================================
let humanScore = 0;
let computerScore = 0;

// Once someone hits 5, we lock the game
let gameOver = false;

// ============================================
// GRAB THE DOM ELEMENTS ONCE (not every click)
// ============================================
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");

// ============================================
// STEP 2: playRound - now RETURNS a message
// instead of console.logging it
// ============================================
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "Tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return "You Win this round!";
  }

  // otherwise, computer wins
  computerScore++;
  return "Computer Wins this round!";
}

// ============================================
// STEP 3 & 4: update the DOM after every round
// ============================================
function updateScoreboard() {
  scoreDiv.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`;
}

function checkForWinner() {
  if (humanScore === 5) {
    resultDiv.textContent = "🎉 YOU WIN THE GAME! Refresh to play again.";
    gameOver = true;
  } else if (computerScore === 5) {
    resultDiv.textContent = "💻 COMPUTER WINS THE GAME! Refresh to play again.";
    gameOver = true;
  }
}

// ============================================
// STEP 5: ONE function handles a full round,
// used by all 3 buttons (no duplicate code)
// ============================================
function handleClick(humanChoice) {
  if (gameOver) return; // stop everything if game already ended

  const computerChoice = getComputerChoice();
  const roundResult = playRound(humanChoice, computerChoice);

  resultDiv.textContent = `You played ${humanChoice}, Computer played ${computerChoice}. ${roundResult}`;

  updateScoreboard();
  checkForWinner();
}

// ============================================
// STEP 2: Event listeners — each button calls
// handleClick with ITS OWN choice
// ============================================
rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));

// show the initial score (0 vs 0) on page load
updateScoreboard();
