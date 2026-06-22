
const gameValues = ["rock", "paper", "scissors"];

function user_play_validate() {
    let invalidAttempts = 0;

    while (true) {
        let userPlay = prompt("It's your turn, human! I don't have all day...");

        if (userPlay === null) {
            invalidAttempts++;
            alert("You cannot escape me, human. Choose Rock, Paper or Scissors!");
            continue;
        }

        userPlay = userPlay.trim().toLowerCase();

        if (userPlay === "scissor") {
            userPlay = "scissors";
        }

        if (gameValues.includes(userPlay)) {
            return userPlay;
        }

        invalidAttempts++;

        if (invalidAttempts >= 3) {
            alert("Human... the game is called Rock, Paper, Scissors. Focus.");
        } else {
            alert("Insert your play correctly: Rock, Paper or Scissors!");
        }
    }
}


function computer_play(arr) {
    const randomSelect = Math.floor(Math.random() * arr.length);
    return arr[randomSelect];
}


// const computerRandomGameValue = computer_play(gameValues);


export {
    gameValues,
    user_play_validate,
    computer_play
 }