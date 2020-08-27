/*10- Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento*/
function contiene(valorBuscado,array){
    return array.some(elem => elem === valorBuscado);
}
console.log(contiene(8,[7,8,9]));