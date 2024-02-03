const btnGroup = document.querySelectorAll("button");
const resultOutput = document.querySelector("#output");
const body = document.querySelector("body");

let displayRoundOutcome = document.createElement("p");
resultOutput.appendChild(displayRoundOutcome);

let displayRoundWinner = document.createElement("p");
resultOutput.appendChild(displayRoundWinner);

let displayGameWinner = document.createElement("p");
resultOutput.appendChild(displayGameWinner);

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];

	// generate randomNum between 0 and 2
	let randomNum = Math.floor(Math.random() * 3);
	return choice[randomNum];
}

function showRoundWinner(result) {
	if (result === "playerWins") {
		playerScore++;
		displayRoundWinner.textContent = `player ${playerScore}  -  ${computerScore} computer`;
	} else if (result === "computerWins") {
		computerScore++;
		displayRoundWinner.textContent = `player ${playerScore}  -  ${computerScore} computer`;
	}
}

function getGameWinner() {
	const ROUND = 5;
	let winner = false;
	if (playerScore === ROUND) {
		displayGameWinner.textContent = "Game over! You win";
		winner = true;
	} else if (computerScore === ROUND) {
		displayGameWinner.textContent = "Game over! Computer Win";
		winner = true;
	}

	return winner;
}

function restartGame() {
	playerScore = 0;
	computerScore = 0;
	resultOutput.childNodes.forEach((child) => (child.textContent = ""));
	btnGroup.forEach((btn) => (btn.style.display = ""));
	this.parentNode.removeChild(this);
}

function game(e) {
	let playerSelection = e.target.textContent;
	let computerSelection = getComputerChoice();
	let result = playRound(playerSelection, computerSelection);

	showRoundWinner(result);
	let gameWon = getGameWinner();

	if (gameWon) {
		btnGroup.forEach((btn) => (btn.style.display = "none"));
		const restartBtn = document.createElement("button");
		restartBtn.textContent = "Restart game?";
		body.insertBefore(restartBtn, resultOutput);
		restartBtn.addEventListener("click", restartGame);
	}
}

function playRound(player, computer) {
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
	} else {
		displayRoundOutcome.textContent = `${computer} beats ${player}`;
		return "computerWins";
	}
}

btnGroup.forEach((btn) => {
	btn.addEventListener("click", game);
});
