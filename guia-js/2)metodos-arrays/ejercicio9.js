/*9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen*/
function even(elem){
    return elem%2===0;
}
function rechazar(funcionCondicional,array){
    var arrayConLosQueNoCumplen = array.filter(elem => !funcionCondicional(elem));
    return arrayConLosQueNoCumplen;
}
console.log(rechazar(even,[7,9,87,42]));