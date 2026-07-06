// a calculator using do_while, while, if  and else if.
let numberA;
let numberB;
let numberC;
let operator;
let answer;
let aditional;
do {
    numberA = Number(prompt("Enter the first number."));
    operator = Number(prompt(`Enter the operator by number:\n1-Plus\n2-Minus\n3-Multiplication
    \n4-Division\n5-Exponentiation`));
    numberB = Number(prompt("Enter the second number."));
    if (operator < 1 || operator > 5) {
        alert("operator: wrong input.");
    }
} while (operator < 1 || operator > 5);

if (operator === 1) {
    answer = numberA + numberB;
} else if (operator === 2) {
    answer = numberA - numberB;
} else if (operator === 3) {
    answer = numberA * numberB;
} else if (operator === 4) {
    answer = numberA / numberB;
} else if (operator === 5) {
    answer = numberA ** numberB;
} alert(answer);

do {
    aditional = prompt("Add another number? (y/n)").toLowerCase();
    if (aditional !== "y" && aditional !== "n") {
        alert("aditional: wrong input.");
    }
} while (aditional !== "y" && aditional !== "n");
    while (aditional === "y") {
    do {
        operator = Number(prompt(`Enter the operator by number:\n1-Plus\n2-Minus\n3-Multiplication
    \n4-Division\n5-Exponentiation`));
    numberC = Number(prompt("Enter the third number."));
    if (operator < 1 || operator > 5) {
        alert("operator: wrong input.");
    }
    } while (operator < 1 || operator > 5);

    if (operator === 1) {
    answer = answer + numberC;
} else if (operator === 2) {
    answer = answer - numberC;
} else if (operator === 3) {
    answer = answer * numberC;
} else if (operator === 4) {
    answer = answer / numberC;
} else if (operator === 5) {
    answer = answer ** numberC;
} alert(answer);
do {
    aditional = prompt("Add another number? (y/n)").toLowerCase();
    if (aditional !== "y" && aditional !== "n") {
        alert("aditional: wrong input.");
    }
} while (aditional !== "y" && aditional !== "n");
}
if (aditional === "n") {
    alert(`Your result is ${answer}`);
}