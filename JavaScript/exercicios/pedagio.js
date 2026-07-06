let veiculo = "carro".toLowerCase();

if (veiculo === "moto") {
    console.log("Seu pedágio é R$4,50");
} else if (veiculo === "carro") {
    console.log("Seu pedágio é R$9,00");
} else if (veiculo === "caminhão leve") {
    console.log("Seu pedágio é R$13,50");
} else if (veiculo === "caminhão pesado") {
    console.log("Seu pedágio é R$18,00");
} else {
    console.log("Veículo isento de pagamento.");
}