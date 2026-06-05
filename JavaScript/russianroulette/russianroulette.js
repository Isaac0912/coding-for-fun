let attempt = 1;
let chosenNumber = 0;
let playAgain = 1;

while (playAgain !== 2 && playAgain !== 0) {
    let numberBullet = Math.floor(Math.random() * 6) + 1;
    alert(`Attempt ${attempt}`);
    chosenNumber = Number(prompt("Russian Roulette!\nChoose a number from 1 to 6."));
    if (chosenNumber === 0) {
        break;
    } else if (chosenNumber < 1 || chosenNumber > 6) {
        alert("Invalid number. Please enter a number from 1 to 6.");
        continue;
    }
    if (chosenNumber === numberBullet) {
        alert(`The chamber you chose was the loaded one. You died on attempt ${attempt}`);
        attempt = 1;
    } else if (chosenNumber !== numberBullet) {
        alert("The chamber you chose was empty. You survived.");
        attempt++;
    }
    playAgain = Number(prompt("Play again?\n1-Continue.\n2-Exit."));
}
alert("Execution finished.");
console.log("Execution finished.");