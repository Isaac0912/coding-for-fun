let precoingresso = Number(40.00);
let statuscliente = prompt("Você é um estudante? ");

if (statuscliente === "sim") {
    precoingresso = precoingresso - (precoingresso * (50/100));
} else {
    precoingresso = precoingresso;
}
console.log(precoingresso);
console.log("Pague o ingresso.");
console.log("Entre no cinema.");