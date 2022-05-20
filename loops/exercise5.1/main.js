let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
let rightNumber = false;

console.log(randomNumber);
while (!rightNumber) {
    let userNumber = prompt("Enter a number between 0 and " + maxNumber);
    userNumber = Number(userNumber);

    if (userNumber === randomNumber) {
        alert("You guessed the right number. Congrats");
        rightNumber = true;
    } else if (userNumber > randomNumber) {
        alert("You guessed higher than the right number. Try again. " + " Right Number: " + randomNumber);
    } else {
        alert("You guessed lower than the right number. Try again. " + " Right Number: " + randomNumber);
    }
}

