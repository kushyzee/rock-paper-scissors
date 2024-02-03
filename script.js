const btnGroup = document.querySelectorAll("button");
const resultOutput = document.querySelector("#output");

let displayRoundOutcome = document.createElement("p");
resultOutput.appendChild(displayRoundOutcome);

let displayRoundWinner = document.createElement("p");
resultOutput.appendChild(displayRoundWinner);

let displayGameWinner = document.createElement("p");
resultOutput.appendChild(displayRoundWinner);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];

	// generate randomNum between 0 and 2
	let randomNum = Math.floor(Math.random() * 3);
	return choice[randomNum];
}

function game(e) {
	let playerSelection = e.target.textContent;
	let computerSelection = getComputerChoice();
	let result = playRound(playerSelection, computerSelection);

	// determine who wins each round
	if (result === "playerWins") {
		playerScore++;
		displayRoundWinner.textContent = `player ${playerScore}  -  ${computerScore} computer`;
	} else if (result === "computerWins") {
		computerScore++;
		displayRoundWinner.textContent = `player ${playerScore}  -  ${computerScore} computer`;
	}

	// determine winner
	const ROUND = 5;
	if (playerScore === ROUND) {
		console.log(`Player Wins with ${playerScore} rounds won out of 5`);
	} else if (computerScore === ROUND) {
		console.log(`Computer Wins with ${computerScore} rounds won out of 5`);
	}
}

function playRound(player, computer) {
	// if tie, replay the round
	if (player === computer) {
		displayRoundOutcome.textContent = `you both chose ${player}. Replay round`;
		btnGroup.forEach((btn) => {
			btn.addEventListener("click", game);
		});
	}

	// if player wins
	else if (player === "Rock" && computer === "Scissors") {
		displayRoundOutcome.textContent = "Rock beats Scissors";
		return "playerWins";
	} else if (player === "Paper" && computer === "Rock") {
		displayRoundOutcome.textContent = "Paper beats Rock";
		return "playerWins";
	} else if (player === "Scissors" && computer === "Paper") {
		displayRoundOutcome.textContent = "Scissors beats Paper";
		return "playerWins";
	}

	// computer wins
	else {
		displayRoundOutcome.textContent = `${computer} beats ${player}`;
		return "computerWins";
	}
}

btnGroup.forEach((btn) => {
	btn.addEventListener("click", game);
});
