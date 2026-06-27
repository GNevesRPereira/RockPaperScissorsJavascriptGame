import { userPlayValidate, computerPlay } from "./gamePlayInput.js";

let computerScore = 0;
let playerScore = 0;
let playerName;

const wait = () => new Promise(resolve => setTimeout(resolve, 0));

function getPlayerName() {
    while (true) {
            const name = prompt("Before we start, tell me your name, human:\n\nPress Cancel to quit the game.");

            if (name === null) {
                const wantsToQuit = confirm("Are you sure you want to quit the game?");

                if (wantsToQuit) {
                    return null;
                }

                continue;
            }

            if (name.trim() === "") {
                alert("Very funny, I'm gonna call you Human.");
                return "Human";
            }

            return name.trim();
        }
}
function initGame(){
    alert(
        "Welcome to Rock, Paper, Scissors.\n\n" +
        "The Evil AI is waiting for you.\n\n" +
        "Open the console with F12 or Ctrl + Shift + J to see the results.\n\n" +
         "Press Cancel at any time if you want to quit the game.\n\n" +
         "Press OK to start."
    );
    playerName = getPlayerName()

    if (playerName === null) {
        console.log("Game closed before it even started. The EVIL AI is disappointed.\n\n" +
            "Refresh the page to start a new game"
        );
            return;
    }
    game();
}
 

async function game() {
    for (let round = 1; round <= 5; round++) {

        await wait()

        console.log(`Round ${round}`);

        const playerSelection = userPlayValidate(playerName);

        if (playerSelection === null) {
            console.log(`Game closed. The EVIL AI will wait for you, ${playerName}.`);
            return;
            }

        const computerSelection = computerPlay();

        const roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
    }
        if(computerScore < playerScore){
             console.log(`You Win, Final score: ${playerName} : ${playerScore} -- Evil AI ${computerScore} `);
        }else if(computerScore > playerScore){
             console.log(`You Lost, Final score: ${playerName} : ${playerScore} -- Evil AI ${computerScore} `);
        }else{
             console.log(`A tie, Final score: ${playerName} :  ${playerScore} -- Evil AI ${computerScore} `);
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

initGame();