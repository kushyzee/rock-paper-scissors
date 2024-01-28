function getCapitalize(word) {
	// convert the first letter to uppercase
	let firstLetter = word.slice(0, 1).toUpperCase();

	// merge the first letter with the other letters converted to lowercase
	return firstLetter + word.slice(1).toLowerCase();
}

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];

	// generate randomNum between 0 and 2
	let randomNum = Math.floor(Math.random() * 3);
	return choice[randomNum];
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection, computerSelection)

    let tested = 0
    while (tested === 'tie') {
      result = playRound(playerSelection, computerSelection)
    }
  }
}

function playRound(player, computer) {
	if (player === computer) {
		console.log(`you both chose ${player}`);
		return "tie";
	} else if (player === "Rock" && computer === "Scissors") {
		console.log("You Win! Rock beats Scissors");
		return 'playerWins';
	} else if (player === "Paper" && computer === "Rock") {
		console.log("You Win! Paper beats Rock");
    return 'playerWins'
	} else if (player === "Scissors" && computer === "Paper") {
		console.log("You Win! Scissors beats Paper");
		return 'playerWins';
	} else {
		console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
		return 'computerWins';
	}
}

let playerInput = prompt("Rock, Paper or Scissors?");
let playerSelection = getCapitalize(playerInput);
let computerSelection = getComputerChoice();

// game()

console.log(game());
