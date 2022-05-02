function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    alert("You win! Rock beats Scissors!");
  }
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    alert("Draw! Rocks can't beat one another!");
  }
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    alert("You lose! Paper beats rock!");
  }
  if (playerSelection == "Scissors" && computerSelection == "Paper") {
    alert("You win! Scissors beat Paper!");
  }
  if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    alert("Draw! Scissors can't beat one another!");
  }
  if (playerSelection == "Scissors" && computerSelection == "Rock") {
    alert("You lose! Rock beats Scissors!");
  }
  if (playerSelection == "Paper" && computerSelection == "Rock") {
    alert("You win! Paper beats Rock!");
  }
  if (playerSelection == "Paper" && computerSelection == "Paper") {
    alert("Draw! Papers can't beat one another!");
  }
  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    alert("You lose! Scissor beats Paper!");
  }
}

for (let i = 0; i < 5; i++) {
  let userSelection = prompt("Please enter your choice");
  let computerSelection = computerPlay();
  playRound(userSelection, computerSelection);
}
