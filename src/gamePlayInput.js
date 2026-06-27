const gameValues = ["rock", "paper", "scissors"];

function getInvalidInputMessage(invalidAttempts, playerName){
    switch(invalidAttempts) {
        case 1: 
            return `${playerName}... the game is called Rock, Paper, Scissors. Focus.`;
        case 2:
            return "Seriously?! Come on... choose Rock, Paper or Scissors.";
        case 3:
            return "You must be pulling my leg... Once again: Rock, Paper or Scissors.";
        case 4:
            return "The Evil AI is losing patience. Rock. Paper. Scissors.";
        case 5:
            return `Final warning, ${playerName}. Type Rock, Paper or Scissors.`
        default:
            return "You are just typing at this point...";
    }
}
const inputCorrections = {
    scissor: {
        value: "scissors",
        message: "Really? 'Scissor'? Fine, human. I will assume you meant Scissors."
    },
    papers: {
        value: "paper",
        message: "How many papers do you need? One Paper is enough."
    },
    rocks: {
        value: "rock",
        message: "Rocks? Very funny. I will count it as Rock."
    }
};

function userPlayValidate(playerName) {
    let invalidAttempts = 0;
    let promptMessage = `It's your turn, ${playerName}! I don't have all day...`;

    while (true) {
        let userPlay = prompt(`${promptMessage}\n\nPress Cancel to quit the game.`);

        if (userPlay === null) {
            const wantsToQuit = confirm("Are you sure you want to quit the game?");
            
            if (wantsToQuit) {
                return null;
            }
            continue;
        }

        userPlay = userPlay.trim().toLowerCase();

      if (inputCorrections[userPlay]) {
        console.log(inputCorrections[userPlay].message);
        userPlay = inputCorrections[userPlay].value;
        }

        if (gameValues.includes(userPlay)) {
            return userPlay;
        }

        invalidAttempts++;

        promptMessage = getInvalidInputMessage(invalidAttempts, playerName);
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