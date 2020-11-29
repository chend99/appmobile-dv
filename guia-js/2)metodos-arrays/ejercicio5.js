/*5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó.
     Un alumno aprobó si todas sus notas son mayores o iguales a 4*/
function aprobo(notasAlumno){
    var notaAprobacion = 4;
    return notasAlumno.every(elem => elem>=notaAprobacion);
}
console.log(aprobo([8,6,2,4]));
