let veiculo = "carro";
let pedagioValor
switch (veiculo) {
    case "moto":
        pedagioValor = 10
    break;
    case "carro":
        pedagioValor = 15
    break;
    case "van":
        pedagioValor = 18
    break;
    case "caminhão leve":
        pedagioValor = 22
    break;
    case "caminhão pesado":
        pedagioValor = 25
    break;
    default:
        pedagioValor = 0
        console.log("Isento")
    break;
}
console.log("O valor do seu pedágio é", pedagioValor);