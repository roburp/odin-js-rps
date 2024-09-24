function getComputerChoice() {
  switch (
    Math.floor(Math.random() * 3) // 0, 1, 2
  ) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?").toLowerCase();

  switch (choice) {
    case "rock":
    case "paper":
    case "scissors":
      return choice;
    default:
      return getHumanChoice();
  }
}

function playRound() {
  let humanChoice;
  let computerChoice;
  let round = 1;
  let playerTally = 0;
  let computerTally = 0;

  //run 5 rounds
  for (i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log(`Round ${round}: \n Player: ${humanChoice} vs. Computer: ${computerChoice}`); //print out choices in console

    //determine winner
    if (humanChoice == computerChoice) {
      console.log(`Round ${round} tied!`);
    } else if (
      (humanChoice == "rock" && computerChoice == "scissors") ||
      (humanChoice == "paper" && computerChoice == "rock") ||
      (humanChoice == "scissors" && computerChoice == "paper")
    ) {
      playerTally++;
      console.log(`Round ${round} won!`);
    } else {
      computerTally++;
      console.log(`Round ${round} lost!`);
    }
    round++;
  }

  console.log(`\nFinal score: \nPlayer: ${playerTally} \nComputer: ${computerTally}`); //print out final tally in console
}

playRound();
