import { gameValues, user_play_validate, computer_play } from "./gamePlayInput.js";
import { playRound } from "./playRound.js";

function game() {
    for (let round = 1; round <= 5; round++) {
        const playerSelection = user_play_validate();
        const computerSelection = computer_play(gameValues);

        const roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);
    }
}

game();