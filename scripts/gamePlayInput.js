
const gameValues = ["Rock", "Paper", "Scissor"];

function computer_play(arr) {
    const randomSelect = Math.floor(Math.random() * arr.length);
    return arr[randomSelect];
}

function user_play_validate() {
    let userPlay = prompt("It's your turn, human!", " ");

    if (userPlay == "") {
        console.log(userPlay);
    } else {
        alert("Insert your play, properly human!!!");
    }

}
const computerRandomGameValue = computer_play(gameValues);
console.log(computerRandomGameValue);

