
const gameValues = ["rock", "paper", "scissor"];

function user_play_validate() {
    let userPlay;

    while (!gameValues.includes(userPlay)) {
        userPlay = prompt("It's your turn, human! I don't have all day...");

        if (!gameValues.includes(userPlay)) {
            alert("The game is called... Rock, Paper, Scissor!!! So, insert your play currectly... FILTHY HUMAN!!!");
        }
    }

    return (userPlay);
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