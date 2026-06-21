
const gameValues = ["Rock", "Paper", "Scissor"];

function computerPlay(arr){
const randomSelect = Math.floor(Math.random() * arr.length);
return arr[randomSelect];
}
    const randomGameValue = computerPlay(gameValues);
    console.log(randomGameValue);
