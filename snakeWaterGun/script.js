const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const match = (cpu, user) => {
  if (cpu === user) {
    return "Nobody";
  } 
  else if (cpu === "S" && user === "W") {
    return "cpu";
  } 
  else if (cpu === "S" && user === "G") {
    return "user";
  } 
  else if (cpu === "G" && user === "W") {
    return "user";
  } 
  else if (cpu === "G" && user === "S") {
    return "cpu";
  } 
  else if (cpu === "W" && user === "S") {
    return "user";
  } 
  else if (cpu === "W" && user === "G") {
    return "cpu";
  }
};

function startGame() {
  let userScore = 0;
  let cpuScore = 0;
  let round = 1;

  function playRound() {
    console.log(`\n--- Round ${round} ---`);

    readline.question("Enter S (Snake), W (Water), or G (Gun): ", (user) => {
      user = user.toUpperCase(); 

      
      if (!["S", "W", "G"].includes(user)) {
        console.log("Invalid input! Please enter S, W, or G.");
        playRound(); 
        return;
      }

      
      let cpuI = Math.floor(Math.random() * 3);
      let cpu = ["S", "W", "G"][cpuI];

      
      let result = match(cpu, user);
      console.log(`CPU: ${cpu} \nUser: ${user} \nRound ${round} winner: ${result.toUpperCase()}`);

      
      if (result === "user") {
        userScore++;
      } else if (result === "cpu") {
        cpuScore++;
      }

      console.log(`Score -> User: ${userScore}, CPU: ${cpuScore}`);

      
      if (userScore === 4 || cpuScore === 4 || round === 7) {
        declareOverallWinner(userScore, cpuScore);
        readline.close(); 
      } else {
        round++;
        playRound(); 
      }
    });
  }

  
  function declareOverallWinner(userScore, cpuScore) {
    console.log("\n--- Game Over ---");
    console.log(`Final Score -> User: ${userScore}, CPU: ${cpuScore}`);

    if (userScore > cpuScore) {
      console.log("🥳 Congratulations! You are the overall winner! 🎉");
    } else if (cpuScore > userScore) {
      console.log("🤖 CPU is the overall winner. Better luck next time! 😢");
    } else {
      console.log("It's a tie! 😐");
    }
  }

  
  playRound();
}

startGame();