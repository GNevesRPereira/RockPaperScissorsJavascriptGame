import { userPlayValidate, computerPlay, QUIT_COMMAND } from "./gamePlayInput.js";
 
let computerScore = 0;
let playerScore = 0;
let playerName;
 
const wait = () => new Promise(resolve => setTimeout(resolve, 0));
 
function getPlayerName() {
    while (true) {
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
}
 
function initGame(){
    alert(
        "Welcome to Rock, Paper, Scissors.\n\n" +
        "The Evil AI is waiting for you.\n\n" +
        "Open the console with F12 or Ctrl + Shift + J to see the results, then press OK to start."
    );
 
    const nameResult = getPlayerName();
 
    if (nameResult === QUIT_COMMAND) {
        console.log("You quit before the game even started. You Loser!!.");
        alert("Leaving already? Fine. Reload the page whenever you grow some courage.");
        return;
    }
 
    game();
}
 
 
async function game() {
    let quit = false;
 
    for (let round = 1; round <= 5; round++) {
 
        await wait()
 
        console.log(`Round ${round}`);
 
        const playerSelection = userPlayValidate(playerName);
 
        if (playerSelection === QUIT_COMMAND) {
            quit = true;
            break;
        }
 
        const computerSelection = computerPlay();
 
        const roundResult = playRound(playerSelection, computerSelection);
            console.log(roundResult);
    }
 
    endGame(quit);
}
 
function endGame(quit) {
    if (quit) {
        console.log(`${playerName} fled the battlefield! Final score: ${playerName}: ${playerScore} -- Evil AI: ${computerScore}`);
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
 
