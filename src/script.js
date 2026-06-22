import { userPlayValidate, computerPlay } from "./gamePlayInput.js";

let computerScore = 0;
let playerScore = 0;
let gameFinished = false;
function game() {
    for (let round = 1; round <= 5; round++) {
        const playerSelection = userPlayValidate();
        const computerSelection = computerPlay();

        const roundResult = playRound(playerSelection, computerSelection);
            console.log(`Round ${round}`);
            console.log(roundResult);
            if(round ===5){
                gameFinished = true;
            }
    }
      if(gameFinished === true){
        if(computerScore < playerScore){
             console.log(`You Win, Final score: you ${playerScore} -- computer ${computerScore} `);
        }else if(computerScore > playerScore){
             console.log(`You Lost, Final score: you ${playerScore} -- computer ${computerScore} `);
        }else{
             console.log(`A tie, Final score: you ${playerScore} -- computer ${computerScore} `);
    }
    }   
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const playerDisplay = capitalize(player);
    const computerDisplay = capitalize(computer);

    if (player === computer) {
        return `It's a Tie! Both chose ${playerDisplay} 
         Your score: ${playerScore} -- Computer score: ${computerScore}`;
    }

    const beats = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (beats[player] === computer) {
        playerScore++;
        return `You Win! ${playerDisplay} beats ${computerDisplay}
        Your score: ${playerScore} -- Computer score: ${computerScore}`;
    } else {
        computerScore++;
        return `You Lose! ${computerDisplay} beats ${playerDisplay} 
        Your score: ${playerScore} -- Computer score: ${computerScore}`;
    }
   
}




game();