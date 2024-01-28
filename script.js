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

function playRound(player, computer) {
	if (player === computer) {
		return `Tie! you both chose ${player}`;
	} else if (player === "Rock" && computer === "Scissors") {
		return "You Win! Rock beats Scissors";
	} else if (player === "Paper" && computer === "Rock") {
		return "You Win! Paper beats Rock";
	} else if (player === "Scissors" && computer === "Paper") {
		return "You Win! Scissors beats Paper";
	} else {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	}
}

let playerInput = prompt("Rock, Paper or Scissors?");
let playerSelection = getCapitalize(playerInput);
let computerSelection = getComputerChoice();

let result = playRound(playerSelection, computerSelection);
console.log(result);
