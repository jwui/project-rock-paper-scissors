function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}

var userScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    alert("You win! rock beats scissors!");
    userScore++;
  }
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    alert("Draw! Rocks can't beat one another!");
  }
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    alert("You lose! Paper beats rock!");
    computerScore++;
  }
  if (playerSelection == "Scissors" && computerSelection == "Paper") {
    alert("You win! Scissors beat paper!");
    userScore++;
  }
  if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    alert("Draw! Scissors can't beat one another!");
  }
  if (playerSelection == "Scissors" && computerSelection == "Rock") {
    alert("You lose! Rock beats scissors!");
    computerScore++;
  }
  if (playerSelection == "Paper" && computerSelection == "Rock") {
    alert("You win! Paper beats rock!");
    userScore++;
  }
  if (playerSelection == "Paper" && computerSelection == "Paper") {
    alert("Draw! Papers can't beat one another!");
  }
  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    alert("You lose! Scissors beat paper!");
    computerScore++;
  }
  document.getElementById("userScore").innerHTML = userScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  if (userScore == 5) {
    alert("You've won the game! Press F5 to reset scores.");
  } else if (computerScore == 5) {
    alert("CPU has won the game! Press F5 to reset scores.");
  }
}

/*
for (let i = 0; i < 5; i++) {
  let userSelection = prompt("Please enter your choice");
  let computerSelection = computerPlay();
  playRound(userSelection, computerSelection);
}
*/

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

rock.addEventListener("click", function () {
  let computerSelection = computerPlay();
  playRound("Rock", computerSelection);
});
paper.addEventListener("click", function () {
  let computerSelection = computerPlay();
  playRound("Paper", computerSelection);
});

scissors.addEventListener("click", function () {
  let computerSelection = computerPlay();
  playRound("Scissors", computerSelection);
});
