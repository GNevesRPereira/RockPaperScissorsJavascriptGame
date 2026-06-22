
const gameValues = ["Rock", "Paper", "Scissor"];

function user_play_validate() {
    let userPlay = prompt("It's your turn, human!");

    if (gameValues.includes(userPlay)) {
        console.log(userPlay);
    } else {
        alert("Insert your play, properly human!!!");
    }
}

function computer_play(arr) {
    const randomSelect = Math.floor(Math.random() * arr.length);
    return arr[randomSelect];
}


const computerRandomGameValue = computer_play(gameValues);
console.log(computerRandomGameValue);

