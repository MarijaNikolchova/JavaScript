let userInput = prompt("Enter a number fro 0 to 10:");
let userNumber = Number(userInput);
let randomNUmber = Math.floor(Math.random() * 10);
let message; 
if (userNumber < randomNUmber) {
    message = `The number you have entered ${userNumber} is smaller than the random number ${randomNUmber}`;
} else if ((userNumber === randomNUmber)) {
    message = `The number you have entered ${userNumber} is the same as the random number ${randomNUmber}`;
} else if (userNumber > randomNUmber) {
    message = `The number you have entered ${userNumber} is bigger than the random number ${randomNUmber}`;
} else {
    message = "You have not entered a number";
}
console.log(message);