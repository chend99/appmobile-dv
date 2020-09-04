/*12- Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
  El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
  El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando. */
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
            console.log(`Estudiando con ${this.profesor.nombre}`);
        }
        else {
            console.log("No tengo profesor aún!");
        }
    }
}

class Profesor extends Persona{
    constructor(nombre,edad){
        super(nombre,edad);
    }
}

profesor1 = new Profesor("Pepe",34);
profesor2 = new Profesor("María",39);

estudiante1 = new Estudiante("Juan",19);
estudiante1.estudiando();

estudiante2 = new Estudiante("David",21,profesor1);
estudiante2.estudiando();
estudiante2.setProfesor(profesor2);
estudiante2.estudiando();
