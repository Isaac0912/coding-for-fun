let age = Number(prompt("What is your age?"));

if (age < 0) {
    console.log("Invalid input.");
} else if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You have legal age.")
}