//4- Define una función que dado un array de números nos dice si alguno es par.
function algunoEsPar(array){
    if (Array.isArray(array)) { //Array.isArray() devuelve 'true' si es un array.
        return array.some(elem => elem % 2 === 0);
    }
    else{
        console.log("Eso no es un array.");
    }
}
console.log(algunoEsPar([1,3,5,7,4,1,3,4]));
