
const playerSelection = user_play_validate();
const computerSelection = computerRandomGameValue;

function playRound(playerSelection, computerSelection) {

    if (playerSelection !== null) {
        console.log("player selected:", playerSelection);
        console.log("computer selected:", computerSelection);
    }

}

playRound(playerSelection, computerSelection);

function roundScore() {
    switch (9) {
        case 0:
            playerSelection == "rock" && computerSelection == "rock";
            console.log("It's a tie");
        case 1:
            playerSelection == "rock" && computerSelection == "paper";
            console.log("Computer wins the round.");
        case 2:
            playerSelection == "rock" && computerSelection == "scissor";
            console.log("Player wins the round.");
        case 3:
            playerSelection == "paper" && computerSelection == "paper";
            console.log("It's a tie");
        case 4:
            playerSelection == "paper" && computerSelection == "scissor";
            console.log("Computer wins the round.");
        case 5:
            playerSelection == "paper" && computerSelection == "rock";
            console.log("Player wins the round.");
        case 6:
            playerSelection == "scissor" && computerSelection == "scissor";
            console.log("It's a tie");
        case 7:
            playerSelection == "scissor" && computerSelection == "rock";
            console.log("Computer wins the round.");
        case 8:
            playerSelection == "scissor" && computerSelection == "paper";
            console.log("Player wins the round.");

    }
}
