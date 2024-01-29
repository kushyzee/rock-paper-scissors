# Rock Paper Scissors Game

## The Odin Project JavaScript Foundations Project

This is a simple Rock, Paper, Scissors game implemented in JavaScript. The game allows the player to play against the computer for a total of 5 rounds, and the winner is determined based on the number of rounds won.

### How to Play

1. Clone the repository to your local machine:

```bash
git clone https://github.com/kushyzee/rock-paper-scissors.git
```

2. Open the index.html file in your browser.

3. Follow the prompt to enter your choice: Rock, Paper, or Scissors.

4. Open browser console to see information about each round and the final result

### Functions

`getCapitalize(word)`: This function takes a word as input and returns the word with the first letter capitalized and the rest in lowercase.

`getComputerChoice()`: This function randomly selects the computer's choice from the options: Rock, Paper, or Scissors.

`getPlayerChoice()`: This function prompts the player to enter their choice (Rock, Paper, or Scissors) and returns the capitalized input.

`playRound(player, computer)`: This function determines the winner of each round based on the choices made by the player and the computer.

`game()`: This function orchestrates the game by playing 5 rounds, keeping track of scores, and announcing the overall winner at the end.
