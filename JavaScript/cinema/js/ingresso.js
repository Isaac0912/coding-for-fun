let inteiraValor = (40).toFixed(2);
let meiaentradaValor = ((40 / 100) * 50).toFixed(2);
let pagamento;
let status = true;
let cliente = prompt("Digite seu nome.");
console.log("Boa tarde!", cliente + ".");
console.log("Valor dos ingressos:");
console.log("Inteira (1): R$" + inteiraValor);
console.log("Meia-entrada (2): R$" + meiaentradaValor);

while (status = true) {
    let ingressoEscolha = Number(prompt("Digite o número para a opção de ingresso."));
    let idade = Number(prompt("Digite sua idade."));
    let carteira = prompt("Você tem sua carteirinha de estudante?").toLowerCase();
    if (idade <= 18 && ingressoEscolha === 2 && carteira === "sim") {
    console.log("Preço meia-entrada R$" + meiaentradaValor);
    console.log("Pagamento: ");
    console.log("Crédito (1)");
    console.log("Débito (2)");
    console.log("PIX (3)");
    pagamento = Number(prompt("Digite o número da sua opção de pagamento."));
    while (pagamento) {
        if (pagamento === 1) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else if (pagamento === 2) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else if (pagamento === 3) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else {
            console.log("Entrada incorreta. Digite o número correto.")
            pagamento = Number(prompt("Digite o número da sua opção de pagamento."));
        }
    } 
    break;
} else if (idade > 18 && ingressoEscolha === 1) {
    console.log("Preço inteira R$" + inteiraValor);
    console.log("Pagamento: ");
    console.log("Crédito (1)");
    console.log("Débito (2)");
    console.log("PIX (3)");
    pagamento = Number(prompt("Digite o número da sua opção de pagamento."));
    while (pagamento) {
        if (pagamento === 1) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else if (pagamento === 2) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else if (pagamento === 3) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else {
            console.log("Entrada incorreta. Digite o número correto.")
            pagamento = Number(prompt("Digite o número da sua opção de pagamento."));
        }
    } 
    break;
} else if (idade > 18 && ingressoEscolha === 2 && carteira != "sim") {
    console.log("Rejeitado. Você não possui carteirinha para meia-entrada.");
} else if (idade <= 18 && ingressoEscolha === 2 && carteira != "sim") {
    console.log("Rejeitado. Você não possui carteirinha para meia-entrada.");
} else if (idade > 18 && ingressoEscolha === 2 && carteira === "sim") {
    console.log("Rejeitado. Você não possui carteirinha válida para meia-entrada."); 
} else if (idade <= 18 && ingressoEscolha === 1) {
    console.log("Preço inteira R$" + inteiraValor);
    console.log("Pagamento: ");
    console.log("Crédito (1)");
    console.log("Débito (2)");
    console.log("PIX (3)");
    pagamento = Number(prompt("Digite o número da sua opção de pagamento."));
    while (pagamento) {
        if (pagamento === 1) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else if (pagamento === 2) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else if (pagamento === 3) {
            console.log("Concluído. Aproveite seu filme!");
            break;
        } else {
            console.log("Entrada incorreta. Digite o número correto.")
            pagamento = Number(prompt("Digite o número da sua opção de pagamento."));
        }
    } 
    break;
}else {
    console.log("Erro. Certifique se respondeu corretamente.");
}
} 