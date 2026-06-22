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

        if (invalidAttempts >= 1) {
            alert("Human... the game is called Rock, Paper, Scissors. Focus.");
        } else if (invalidAttempts >= 2) {
            alert("Seriously?!! Come on... Insert your play correctly: Rock, Paper or Scissors!");
        } else if (invalidAttempts >= 3) {
            alert("You must  be pulling my leg, or something... Come on... Once again it's: Rock, Paper or Scissors!");
        } else if (invalidAttempts >= 4) {
            alert("You can't be this stupid... It's Rock, Paper or Scissors!ROCK, PAPER OR SCISSORS! YOU DOLT!!!");
        } else if (invalidAttempts >= 5) {
            alert("I would recommend, that you should be neutered, in order to ensure the future of your species...You can at least, write ROCK, PAPER OR SCISSORS... RIGHT?!! Go on, i believe in you");
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
    }
}