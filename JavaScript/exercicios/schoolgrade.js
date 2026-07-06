let grade1 = Number(prompt("Enter your first grade."));
let grade2 = Number(prompt("Enter your second grade."));
let grade3 = Number(prompt("Enter your third grade."));

let media = (grade1 + grade2 + grade3) / 3;
console.log("your media is", media.toFixed(2));

if (media >= 7.0 && media <= 10) {
    console.log("Approved");
} else if (media < 7.0 && media > 0) {
    console.log("Failed");
} else {
    console.log("Wrong input.")
}