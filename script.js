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

function getPlayerChoice() {
	let playerInput = prompt("Rock, Paper or Scissors?");
	let playerSelection = getCapitalize(playerInput);
	return playerSelection;
}

function game() {
	let playerScore = 0;
	let computerScore = 0;

	// play 5 rounds of the game
	for (let i = 0; i < 5; i++) {
		let round = i + 1;
		console.log(`Round ${round}`);
		let playerSelection = getPlayerChoice();
		let computerSelection = getComputerChoice();
		let result = playRound(playerSelection, computerSelection);

		if (result === "playerWins") {
			playerScore++;
			console.log(`player: ${playerScore}
      computer: ${computerScore}
      `);
		} else {
			computerScore++;
			console.log(`player: ${playerScore}
      computer: ${computerScore}
      `);
		}
	}

	// determine winner
	if (playerScore > computerScore) {
		console.log("`Player Wins with ${computerScore} rounds won out of 5`");
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
	} else if (player === "Rock" && computer === "Scissors") {
		console.log("You Win! Rock beats Scissors");
		return "playerWins";
	} else if (player === "Paper" && computer === "Rock") {
		console.log("You Win! Paper beats Rock");
		return "playerWins";
	} else if (player === "Scissors" && computer === "Paper") {
		console.log("You Win! Scissors beats Paper");
		return "playerWins";
	} else {
		console.log(`You lose! ${computer} beats ${player}`);
		return "computerWins";
	}
}

// game()

game();
