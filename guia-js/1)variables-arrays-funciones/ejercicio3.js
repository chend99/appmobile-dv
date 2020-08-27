/*3- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función.*/
function esPar(numero){
    if (isNaN(numero)) { //isNaN es una función que devuelve 'true' si el parametro no es un número.
        mensaje = `${numero} no es un número.`;
    }
    else if(numero%2==0){
        mensaje = `${numero} es par.`;
    }
    else{
        mensaje = `${numero} es impar.`;
    }
    return mensaje;
}
console.log(esPar(234));