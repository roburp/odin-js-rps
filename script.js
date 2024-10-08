let round = 0;
let playerTally = 0;
let computerTally = 0;

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
  switch (choice) {
    case "rock":
    case "paper":
    case "scissors":
      return choice;
    default:
      return getHumanChoice();
  }
}

function playRound(choice) {
  const humanChoice = choice;
  const computerChoice = getComputerChoice();
  round++;

  cleanupResultsChildren();
  const resultSection = document.querySelector(".result");

  //display round #
  const roundText = document.createElement("p");
  roundText.textContent = `Round ${round}:`;
  resultSection.appendChild(roundText);

  //display player & computer choices
  const choicesText = document.createElement("p");
  choicesText.textContent = `Player: ${humanChoice} vs. Computer: ${computerChoice}`;
  resultSection.appendChild(choicesText);

  const winText = document.createElement("p");

  //determine winner
  if (humanChoice == computerChoice) {
    winText.textContent = `Round ${round} tied!`;
    resultSection.appendChild(winText);
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    playerTally++;
    winText.textContent = `Round ${round} won!`;
    resultSection.appendChild(winText);
  } else {
    computerTally++;
    winText.textContent = `Round ${round} lost!`;
    resultSection.appendChild(winText);
  }

  //display tally
  const scoreText = document.createElement("p");

  if (playerTally < 5 && computerTally < 5) {
    scoreText.textContent = `Current score: Player: ${playerTally} Computer: ${computerTally}`;
    resultSection.appendChild(scoreText);
  } else {
    if (playerTally > computerTally) {
      scoreText.innerHTML = `Final score: Player: ${playerTally} Computer: ${computerTally}. Player wins!`;
      resultSection.appendChild(scoreText);
    } else {
      scoreText.innerHTML = `Final score: Player: ${playerTally} Computer: ${computerTally}. Computer wins!`;
      resultSection.appendChild(scoreText);
    }

    const againText = document.createElement("p");
    againText.textContent = "Press Reset to play again.";
    resultSection.appendChild(againText);

    const buttons = document.querySelectorAll("button.choice");
    buttons.forEach(function (button) {
      button.disabled = true; // disable each button
    });
  }
}

const btnChoice = document.querySelectorAll("button.choice");
btnChoice.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id);
  });
});

function cleanupResultsChildren() {
  const resultSection = document.querySelector(".result");

  const children = resultSection.children; //get all children nodes from resultSection
  while (children.length > 0) {
    resultSection.removeChild(children[0]); //remove the first child until none are left
  }
}

const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", () => {
  round = 0;
  playerTally = 0;
  computerTally = 0;

  cleanupResultsChildren();

  const buttons = document.querySelectorAll("button.choice");
  buttons.forEach(function (button) {
    button.disabled = false; // enable each button
  });
});
