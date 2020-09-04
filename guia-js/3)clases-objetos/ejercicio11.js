/*11- Crea una clase Persona que tenga los atributos nombre y edad. 
  Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.*/
  class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
  }
  var persona1 = new Persona("David",21);
  persona1.presentarse();