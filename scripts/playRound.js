
const playerSelection = user_play_validate();
const computerSelection = computerRandomGameValue;

function playRound(playerSelection, computerSelection) {

    if (playerSelection !== null) {
        console.log("player selected:",playerSelection);
        console.log("computer selected:",computerSelection);
    }

}

playRound(playerSelection, computerSelection);

