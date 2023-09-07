// Rock beats Scissors, Scissors beat Paper, and Paper beats Rock
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let round = 0;

function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'It is a tie!';
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore += 1;
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

function finalScore() {
  if (playerScore == computerScore) {
    console.log(
      `Your score is ${playerScore} and computer score is also ${computerScore} Therefore it's a TIE!`
    );
  } else if (playerScore > computerScore) {
    console.log(
      `Your score is ${playerScore} while computer score is ${computerScore} Therefore, YOU are the WINNER!`
    );
  } else {
    console.log(
      `Your score is ${playerScore} while computer score is ${computerScore} Therefore, COMPUTER is the WINNER`
    );
  }
}

function game() {
  while (computerScore !== 5 && playerScore !== 5) {
    playerSelection = prompt('Choose Rock, Paper or Scissors');
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    computerSelection = getComputerChoice();
    round++;

    console.log(
      `Round: ${round} \n 
      Player Select: ${playerSelection} \n
      Computer Select: ${computerSelection} \n
      ${playRound(playerSelection, computerSelection)} \n
      Computer Score: ${computerScore} \n
      Player Score: ${playerScore}`
    );
  }
  console.log(finalScore());
}

game();
