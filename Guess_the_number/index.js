const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let number = Math.floor((Math.random() * 100) + 1);
let chances = 0;
let guess; 

console.log("🎯 Welcome to the Guess the Number Game!");
console.log("I have picked a number between 1 and 100. Try to guess it!\n");

function askGuess() {
  readline.question("Enter a number between 1 and 100: ", (input) => {
    guess = Number.parseInt(input);
    ++chances;

    if (guess > number) {
      console.log("Number entered is greater");
      askGuess();
    } 
    else if (guess < number) {
      console.log("Number entered is smaller");
      askGuess();
    } 
    else {
      let score = 100 - chances;
      console.log("\nCongratulations🥳🥳\nThe number generated was", number + " and you guessed it right😁\nYour final score is", score);
      readline.close();
    }
  });
}

askGuess(); 
