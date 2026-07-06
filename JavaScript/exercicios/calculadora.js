let numeroA = Number(prompt("Digite o primeiro número."));
let numeroB = Number(prompt("Digite o segundo número."));
let resultado;
let operador = prompt("Digite o operador.")
switch (operador) {
    case "+":
        resultado = numeroA + numeroB
    break;
    case "-":
        resultado = numeroA - numeroB
    break;
    case "*":
        resultado = numeroA * numeroB
    break;
    case "/":
        resultado = numeroA / numeroB
    break;
    case "**":
        resultado = numeroA ** numeroB
    break;
    default:
        console.log("entrada inválida.")
    break;
} console.log(resultado);