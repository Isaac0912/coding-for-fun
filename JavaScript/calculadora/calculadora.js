// a calculator with .
let numberA, numberB, numberC, operator, aditional, result;
function calculate(num1, operator, num2) {
    let result;
    if (operator === 1) {
    result = num1 + num2;
} else if (operator === 2) {
    result = num1 - num2;
} else if (operator === 3) {
    result = num1 * num2;
} else if (operator === 4) {
    result = num1 / num2;
} else if (operator === 5) {
    result = num1 ** num2;
} return result;
}
do {
    numberA = Number(prompt("Enter the first number."));
    operator = Number(prompt(`Enter the operator by number:\n1-Plus\n2-Minus\n3-Multiplication\n4-Division\n5-Exponentiation`));
    numberB = Number(prompt("Enter the second number."));
    if (operator < 1 || operator > 5) {
        alert("operator: wrong input.");
    }
} while (operator < 1 || operator > 5);

result = calculate(numberA, operator, numberB);
alert(result);

do {
    aditional = prompt("Add another number? (y/n)").toLowerCase();
    if (aditional !== "y" && aditional !== "n") {
        alert("aditional: wrong input.");
    }
} while (aditional !== "y" && aditional !== "n");
    while (aditional === "y") {
    do {
        operator = Number(prompt(`Enter the operator by number:\n1-Plus\n2-Minus\n3-Multiplication\n4-Division\n5-Exponentiation`));
    numberC = Number(prompt("Enter the third number."));
    if (operator < 1 || operator > 5) {
        alert("operator: wrong input.");
    }
    } while (operator < 1 || operator > 5);

result = calculate(result, operator, numberC);
alert(result);
do {
    aditional = prompt("Add another number? (y/n)").toLowerCase();
    if (aditional !== "y" && aditional !== "n") {
        alert("aditional: wrong input.");
    }
} while (aditional !== "y" && aditional !== "n");
}
if (aditional === "n") {
    alert(`The result is ${result}`);
}