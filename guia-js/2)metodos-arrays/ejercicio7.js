/*6- 7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo*/
function hayAlgunNegativo(array){
    return array.some(elem => elem<0);
}
console.log(hayAlgunNegativo([2,-3,9]));