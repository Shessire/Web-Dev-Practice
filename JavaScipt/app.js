let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if(guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
    } else {
        guess = prompt("Please enter a number or 'q' to quit")
    }
}

if (guess === 'q') {
    console.log("You quit")
} else {
    console.log("You win!")
    console.log(`It took you ${attempts} guesses`)
}