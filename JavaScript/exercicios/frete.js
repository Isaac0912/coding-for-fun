let pacotePeso = 20;
let UF = "PR";
let pacoteFrete;
let pacoteValor;
switch (UF) {
    case "PR":
    case "RS":
    case "SC":
        pacoteFrete = 5.00
    break;
    case "MS":
    case "SP":
    case "RJ":
        pacoteFrete = 8.00
    break;
    case "MT":
    case "GO":
    case "DF":
    case "MG":
    case "ES":
        pacoteFrete = 11.50
    break;
    default:
        pacoteFrete = 20.00
    break;
}
pacoteValor = pacotePeso * pacoteFrete;
console.log("Seu produto de ", pacotePeso, "kgs + frete por kg de", pacoteFrete + ", ficou com valor", pacoteValor);