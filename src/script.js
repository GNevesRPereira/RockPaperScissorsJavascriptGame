import { userPlayValidate, computerPlay } from "./gamePlayInput.js";

let computerScore = 0;
let playerScore = 0;
let playerName;

function getPlayerName() {
     playerName = prompt("Before we start, tell me your name, human:");

    if (playerName === null || playerName.trim() === "") {
        alert("very funny, I'm gonna call you Human")
        playerName = "Human";
    }

    return playerName.trim();
}

function initInstructions(){
    alert(
        "Welcome to Rock, Paper, Scissors.\n\n" +
        "Open the console with F12 or Ctrl + Shift + J.\n\n" +
        "Then type start() and press Enter to begin."
    );
    console.log("Type start() to challenge the Evil AI.");
}



function startGame(){
    playerScore = 0;
    computerScore = 0;

    playerName  = getPlayerName()

    console.log(`The Evil AI accepts your challenge, ${playerName}.`);

    game();

    return "Game completed. The Evil AI is waiting for a rematch.";
}

 

function game() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        const playerSelection = userPlayValidate(playerName);
        const computerSelection = computerPlay();

        const roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
    }
        if(computerScore < playerScore){
             console.log(`You Win, Final score: ${playerName} : ${playerScore} -- Evil AI : ${computerScore} `);
        }else if(computerScore > playerScore){
             console.log(`You Lost, Final score: ${playerName} : ${playerScore} -- Evil AI : ${computerScore} `);
        }else{
             console.log(`A tie, Final score: ${playerName} : ${playerScore} -- Evil AI : ${computerScore} `);
    }
    
    alert("Game is finished, now reload your page if you want to challenge me, the MASTERMIND!")
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const playerDisplay = capitalize(player);
    const computerDisplay = capitalize(computer);

    if (player === computer) {
        return `It's a Tie! Both chose ${playerDisplay} 
         ${playerName} score: ${playerScore} -- Evil AI score: ${computerScore}`;
    }

    const beats = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (beats[player] === computer) {
        playerScore++;
        return `You Win! ${playerDisplay} beats ${computerDisplay}
        ${playerName} score: ${playerScore} -- Evil AI score: ${computerScore}`;
    } else {
        computerScore++;
        return `You Lose! ${computerDisplay} beats ${playerDisplay} 
        ${playerName} score: ${playerScore} -- Evil AI score: ${computerScore}`;
    }
}

initInstructions()
window.start = startGame;
window.startGame = startGame;
window.s = startGame;