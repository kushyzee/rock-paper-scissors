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
	}
}

let playerInput = "roCk";
let playerSelection = getCapitalize(playerInput);
console.log(playerSelection);
let computerSelection = getComputerChoice();

let result = playRound(playerSelection, computerSelection);
