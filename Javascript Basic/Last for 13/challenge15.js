numero = 11;

numero > 13 ? getDifferenceDoubled(numero) : getDifference(numero);

function getDifferenceDoubled(num){
    return console.log((num - 13) * 2)
}

function getDifference(num){
    return console.log(13 - num);
}

/*
solucao da pagina

function difference(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(difference(32))
console.log(difference(11))


*/