
const gameValues = ["Rock", "Paper", "Scissor"];

function computer_play(arr){
const randomSelect = Math.floor(Math.random() * arr.length);
return arr[randomSelect];
}
    const computerRandomGameValue = computer_play(gameValues);
    console.log(computerRandomGameValue);
