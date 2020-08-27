/*8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen*/
function even(elem){
    return elem%2===0;
}
function cuantosCumplen(funcionCondicional,array){
    var arrayConLosQueCumplen = array.filter(elem => funcionCondicional(elem));
    return arrayConLosQueCumplen.length;
}
console.log(cuantosCumplen(even,[7,9,25,42]));
