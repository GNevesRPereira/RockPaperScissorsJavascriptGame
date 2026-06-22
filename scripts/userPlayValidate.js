function userPlayValidate() {
    let userPlay = prompt("It's your turn, human!", " ");

    if (userPlay !== "") {
        console.log(userPlay);
    }else{
        alert("Insert your play, properly human!!!");
    }

}