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

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice );




