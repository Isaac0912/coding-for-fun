// Faça uma forma de gerar ordens de 3 algarismos distintos com os elementos do conjunto A = {1, 2, 3, 4, 5}.

let algarismo1 = 0, algarismo2 = 0, algarismo3 = 0, conjuntoA = [1, 2, 3, 4, 5];
function arranjoSimples(algarismo, arr) {
    let indice = Math.floor(Math.random() * arr.length);
    algarismo = arr[indice];
    arr.splice(indice, 1);
    return algarismo;
}
algarismo1 = arranjoSimples(algarismo1, conjuntoA);
algarismo2 = arranjoSimples(algarismo2, conjuntoA);
algarismo3 = arranjoSimples(algarismo3, conjuntoA);
let resultado = ((algarismo1 * 100) + algarismo2 * 10) + algarismo3;
console.log(resultado); 