import { userPlayValidate, computerPlay } from "./gamePlayInput.js";

const score = 0;

function game() {
    for (let round = 1; round <= 5; round++) {
        const playerSelection = userPlayValidate();
        const computerSelection = computerPlay();

        const roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);
    }
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const playerDisplay = capitalize(player);
    const computerDisplay = capitalize(computer);

    if (player === computer) {
        return `It's a Tie! Both chose ${playerDisplay}`;
    }

    const beats = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (beats[player] === computer) {
        return `You Win! ${playerDisplay} beats ${computerDisplay}`;
    } else {
        return `You Lose! ${computerDisplay} beats ${playerDisplay}`;
    }
}




game();