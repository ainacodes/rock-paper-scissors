# Rock Paper Scissors

Updated version of the first version of Rock, Paper, Scissors for [The Odin Project Assignment](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors).

- For the first submission `script_v1.js`, the result can be seen in `console` panel.

- The second version comes with User Interface that live on [here](https://ainacodes.github.io/rock-paper-scissors/).

## Implementation process:

### First Version: `script_v1.js`

The first version of the game will take the player choice from the alert prompt. It will keep running until player or computer get **scores 5**.

1. Create `getComputerChoice` function:
   - Create an array for the computer selection which consist of `Rock`, `Paper` and `Scissors`.
2. Create a function that **plays a single round** called `playRound` which takes parameter `playerSelection` and `computerSelection` as an input:
   - Create the comparison between the `playerSelection` and `computerSelection` by using `if...else`
   - for example, if `playerSelection` == `computerSelection`, the result should be **tie**.
   - if `playerSelection` == Rock **AND** `computerSelection` == Scissors, the result should be **player win**... and so on..
   - _note:_ Rock beats Scissors, Scissors beats Paper, and Paper beats Rock
   - update the score for each round.
3. Create a function that shows the who is the winner called `finalScore()` by using `if...else` statement:
   - if `playerScore` > `computerScore`, return Player as the winner.
   - if `computerScore` > `playerScore`, return Computer as the winner.
4. Create `game()` function as a main function to begin the game:
   - Using `while` loop to iterate the function until one of the score is equals to 5.
   - In this loop, get the player selection using `prompt()` method.
   - Convert the input that the player type to capital letter at the front and small letters for the rest.
   - Call the `getComputerChoice()` function to get `computerSelection`.
   - Increase the `round` to the iteration.
   - After one of the players reach the score 5, call the `finalScore()` which terminates the game.

### Second Version: `script.js`

1. Modify the `index.html` and `style.css` file.
2. Modify the `playRound()` function by simplifying the `if...else` statement.
3. Create a new function to update the game interface with the round results called `updateGameInterface()`.
   Parameters that need to be updated:
   - round
   - playerChoice
   - computerChoice
   - playerScore
   - computerScore
   - result
4. Change the `game()` function to only start the game when the player click their choice called `handleWeaponClick()`
   - if one of the score is not equals to 5 yet, call the `getComputerChoice()` to get the `computerSelection`.
   - Update the user interface `updateGamesInterface()`.
   - Once one of the score is equals to 5, call the `finalScore()` function.
5. Add event listeners to get the player choice.
