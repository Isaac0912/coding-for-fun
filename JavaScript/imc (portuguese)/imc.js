let peso = Number(prompt("Digite seu peso em kgs"));
let altura = Number(prompt("Digire sua altura em metros."));

let formulaImc = peso / altura ** 2;
console.log("Seu IMC é:", formulaImc)
if (formulaImc < 18.50) {
    console.log("Magresa.");
} else if (formulaImc >= 18.50 && formulaImc <= 24.99) {
    console.log("Normal.");
} else if (formulaImc >= 25 && formulaImc <= 29.99) {
    console.log("Sobrepeso.");
} else if (formulaImc >= 30 && formulaImc <= 34.99) {
    console.log("Obesidade Grau I.");
} else if (formulaImc >= 35 && formulaImc <= 39.99) {
    console.log("Obesidade Grau II.");
} else {
    console.log("Obesidade Grau III.");
}