import { userPlayValidate, computerPlay, QUIT_COMMAND } from "./gamePlayInput.js";
 
let computerScore = 0;
let playerScore = 0;
let playerName;
 
const wait = () => new Promise(resolve => setTimeout(resolve, 0));
 
function getPlayerName() {
    while (true) {
<<<<<<< HEAD
        playerName = prompt('Before we start, tell me your name, human (or type "quit" to leave):');
 
        if (playerName === null || playerName.trim() === "") {
            alert("very funny, I'm gonna call you Human")
            playerName = "Human";
            return playerName;
        }
 
        playerName = playerName.trim();
 
        if (playerName.toLowerCase() === QUIT_COMMAND) {
            const confirmQuit = confirm("Are you sure you want to quit the game?");
 
            if (confirmQuit) {
                return QUIT_COMMAND;
            }
 
            continue;
        }
 
        return playerName;
    }
=======
            const name = prompt("Before we start, tell me your name, human:");

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
>>>>>>> experiment/gameClosing
}
 
function initGame(){
    alert(
        "Welcome to Rock, Paper, Scissors.\n\n" +
        "The Evil AI is waiting for you.\n\n" +
        "Open the console with F12 or Ctrl + Shift + J to see the results.\n\n" +
         "Press Cancel at any time if you want to quit the game.\n\n" +
         "Press OK to start."
    );
<<<<<<< HEAD
 
    const nameResult = getPlayerName();
 
    if (nameResult === QUIT_COMMAND) {
        console.log("You quit before the game even started. You Loser!!.");
        alert("Leaving already? Fine. Reload the page whenever you grow some courage.");
        return;
    }
 
=======
    playerName = getPlayerName()

    if (playerName === null) {
        console.log("Game closed before it even started. The EVIL AI is disappointed.\n\n" +
            "Refresh the page to start a new game"
        );
            return;
    }
>>>>>>> experiment/gameClosing
    game();
}
 
 
async function game() {
    let quit = false;
 
    for (let round = 1; round <= 5; round++) {
 
        await wait()
 
        console.log(`Round ${round}`);
 
        const playerSelection = userPlayValidate(playerName);
<<<<<<< HEAD
 
        if (playerSelection === QUIT_COMMAND) {
            quit = true;
            break;
        }
 
=======

        if (playerSelection === null) {
            console.log(`Game closed. The EVIL AI will wait for you, ${playerName}.`);
            return;
            }

>>>>>>> experiment/gameClosing
        const computerSelection = computerPlay();
 
        const roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
    }
 
    endGame(quit);
}
 
function endGame(quit) {
    if (quit) {
        console.log(`${playerName} fled the battlefield!, Evil AI scared you Huh, A forfeit means Losing!!!`);
        alert(`You quit, ${playerName}? The Evil AI will remember this. Reload the page if you ever want a rematch.`);
        return;
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
 
