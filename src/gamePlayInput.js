const gameValues = ["rock", "paper", "scissors"];

function userPlayValidate() {
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

function getRandomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function computerPlay() {
    return getRandomItem(gameValues);
}

export {
    gameValues,
    userPlayValidate,
    computerPlay
};