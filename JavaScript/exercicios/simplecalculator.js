let number1 = Number(prompt("Enter the first number."));
let number2 = Number(prompt("Enter the second number."));
let operator = prompt("Which operator do you want? +,-,* or /?");
let result

if (operator === "+") {
 result = number1 + number2;
 console.log(result);   
} else if (operator === "-") {
    result = number1 - number2;
 console.log(result);
} else if (operator === "*") {
    result = number1 * number2;
 console.log(result);
} else if (operator === "/") {
    result = number1 / number2;
 console.log(result);
} else {
    console.log("input error. You really choosed an available operator?");
}