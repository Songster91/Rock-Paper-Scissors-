console.log("Hello world");

// the game is played against the computer so i have to write a function that
// returns rock paper scissors randomly

//create a function
//write a code that returns the 3 value randomly
// we can use the Math.random method here

function getComputerChoice() {
  let choice = Math.random();
  if (choice >= 0.6666) {
    console.log("rock");


  } else if (choice >= 0.3333 && choice <= 0.6666) {
    console.log("paper");


  } else{
    console.log("scissor");
  }
}
console.log(getComputerChoice());
