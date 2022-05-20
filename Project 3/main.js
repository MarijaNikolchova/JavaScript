let arr = ["rock", "paper", "scissors"];

let userInput = prompt("Enter: Rock, Paper or Scissors");
let randomComputerNumber = Math.floor(Math.random() * 3);
let userNumber = arr.indexOf(userInput.toLowerCase());

let message;
if (userNumber !== -1) {

    if (randomComputerNumber === 0 && userNumber === 2) {
        message = `Player chose: ${userInput.toLowerCase()} Computer chose: ${arr[randomComputerNumber]} Computer Wins!`
    } else if (userNumber === 0 && randomComputerNumber === 2) {
        message = `Player chose: ${userInput.toLowerCase()} Computer chose: ${arr[randomComputerNumber]} Player Wins!`
    } else if (randomComputerNumber > userNumber) {
        message = `Player chose: ${userInput.toLowerCase()} Computer chose: ${arr[randomComputerNumber]} Computer Wins!`
    } else if (userNumber > randomComputerNumber) {
        message = `Player chose: ${userInput.toLowerCase()} Computer chose: ${arr[randomComputerNumber]} Player Wins!`
    } else {
        message = `Player chose: ${userInput.toLowerCase()} Computer chose: ${arr[randomComputerNumber]} it's a tie!`
    }

} else {
    message = "You enterd an invalid option"
}

alert(message);