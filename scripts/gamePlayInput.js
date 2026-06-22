
const gameValues = ["rock", "paper", "scissor"];

function user_play_validate() {
    let userPlay;

    while (!gameValues.includes(userPlay)) {
        userPlay = prompt("It's your turn, human!");

        if (!gameValues.includes(userPlay)) {
            alert("Insert your play, properly human!!!");
        }
    }

    console.log(userPlay);
}

function computer_play(arr) {
    const randomSelect = Math.floor(Math.random() * arr.length);
    return arr[randomSelect];
}


const computerRandomGameValue = computer_play(gameValues);
console.log(computerRandomGameValue);

