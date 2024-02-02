btnGroup = document.querySelectorAll("button");

function getComputerChoice() {
	const choice = ["Rock", "Paper", "Scissors"];

	// generate randomNum between 0 and 2
	let randomNum = Math.floor(Math.random() * 3);
	return choice[randomNum];
}

function game(e) {
	let playerScore = 0;
	let computerScore = 0;

	let playerSelection = e.target.textContent;
	console.log(playerSelection);
	let computerSelection = getComputerChoice();
	let result = playRound(playerSelection, computerSelection);

	// 	// determine who wins each round
	// 	if (result === "playerWins") {
	// 		playerScore++;
	// 		console.log(`player: ${playerScore}
	//     computer: ${computerScore}
	//     `);
	// 	} else {
	// 		computerScore++;
	// 		console.log(`player: ${playerScore}
	//     computer: ${computerScore}
	//     `);
	// 	}

	// determine winner
	if (playerScore > computerScore) {
		console.log(`Player Wins with ${playerScore} rounds won out of 5`);
	} else {
		console.log(`Computer Wins with ${computerScore} rounds won out of 5`);
	}
}

function playRound(player, computer) {
	// if tie, replay the round
	if (player === computer) {
		console.log(`you both chose ${player}. Replay round`);
		player = getPlayerChoice();
		computer = getComputerChoice();
		return playRound(player, computer);
	}

	// if player wins
	else if (player === "Rock" && computer === "Scissors") {
		console.log("You Win! Rock beats Scissors");
		return "playerWins";
	} else if (player === "Paper" && computer === "Rock") {
		console.log("You Win! Paper beats Rock");
		return "playerWins";
	} else if (player === "Scissors" && computer === "Paper") {
		console.log("You Win! Scissors beats Paper");
		return "playerWins";
	}

	// computer wins
	else {
		console.log(`You lose! ${computer} beats ${player}`);
		return "computerWins";
	}
}

btnGroup.forEach((btn) => {
	btn.addEventListener("click", game);
});
