// Rock beats Scissors, Scissors beat Paper, and Paper beats Rock
let computerScore = 0;
let playerScore = 0;
let round = 0;

// Get computer choice
function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a single round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return 'It is a tie!';
  } else if (
    (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock')
  ) {
    playerScore += 1;
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore += 1;
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  }
}

// Update the game interface with the round results
function updateGameInterface(playerChoice, computerChoice, result) {
  const roundElement = document.getElementById('round');
  const playerChoiceElement = document.getElementById('player-choice');
  const computerChoiceElement = document.getElementById('computer-choice');
  const messageElement = document.getElementById('message');
  const playerScoreElement = document.getElementById('player-score');
  const computerScoreElement = document.getElementById('computer-score');

  roundElement.textContent = `Round: ${round}`;
  playerChoiceElement.textContent = `Player choice: ${playerChoice}`;
  computerChoiceElement.textContent = `Computer choice: ${computerChoice}`;
  messageElement.textContent = result;
  playerScoreElement.textContent = `You: ${playerScore}`;
  computerScoreElement.textContent = `Computer: ${computerScore}`;
}

// Function to handle the game logic when a weapon is clicked
function handleWeaponClick(playerChoice) {
  if (playerScore < 5 && computerScore < 5) {
    round++;
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    updateGameInterface(playerChoice, computerChoice, result);

    if (playerScore === 5 || computerScore === 5) {
      // Check if the game is over and display the final score
      finalScore();
    }
  }
}

// Add event listeners to weapon containers
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', () => handleWeaponClick('Rock'));
paper.addEventListener('click', () => handleWeaponClick('Paper'));
scissors.addEventListener('click', () => handleWeaponClick('Scissors'));

// Function to display the final score
function finalScore() {
  if (playerScore == computerScore) {
    alert(
      `It's a tie! Your score is ${playerScore} and computer score is also ${computerScore}`
    );
  } else if (playerScore > computerScore) {
    alert(
      `You are the winner! Your score is ${playerScore}, while computer score is ${computerScore}`
    );
  } else {
    alert(
      `Computer is the winner! Your score is ${playerScore}, while computer score is ${computerScore}`
    );
  }
}
