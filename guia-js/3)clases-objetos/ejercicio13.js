/*13- Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante. 
Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando 
y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. 
Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)*/
class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

class Estudiante extends Persona{
    constructor(nombre,edad,profesor=undefined){
        super(nombre,edad); 
        this.profesor = profesor;
    }
    setProfesor(profesor) {
        this.profesor = profesor;
    }
    estudiando() {
        if(this.profesor !== undefined) {
            console.log(`${this.nombre}: Estudiando con ${this.profesor.nombre}`);
        }
        else {
            console.log(`${this.nombre}: No tengo profesor aún!`);
        }
    }
}

class Profesor extends Persona{
    constructor(nombre,edad){
        super(nombre,edad);
        this.estudiantes = [];
    }
    enseñando() {
        if(this.estudiantes.length>0){
            console.log("Este es el listado de mis alumnos: ");
            this.estudiantes.forEach(estudiante => console.log(estudiante.nombre)); 
        }
        else{
            console.log("No tengo alumnos!");
        }
    }
    addEstudiante(unEstudiante){
        this.estudiantes.push(unEstudiante);
        unEstudiante.setProfesor(this);
    }
}
alumno1 = new Estudiante("David",21);
alumno2 = new Estudiante("Juan",25);
alumno3 = new Estudiante("Maxi",34);

profesor1 = new Profesor("Jorge",40);
profesor1.addEstudiante(alumno1);
profesor1.addEstudiante(alumno2);
profesor1.addEstudiante(alumno3);

profesor1.enseñando();
alumno1.estudiando();
alumno2.estudiando();
alumno3.estudiando();