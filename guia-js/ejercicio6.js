/*6- Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. 
     Podés usar la función que hiciste en el ejercicio anterior.*/
function aprobo(notasAlumno){
    var notaAprobacion = 4;
    return notasAlumno.every(nota => nota>=notaAprobacion);
}
function quienesAprobaron(notasAlumnos){
    return notasAlumnos.filter(notas => aprobo(notas));
}
console.log(quienesAprobaron([[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]])); //Debugger me devuelve (2) [Array(4), Array(4)] y Terminal [ [ 7, 9, 4, 5 ], [ 9, 6, 7, 10 ] ]
