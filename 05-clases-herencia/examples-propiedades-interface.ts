/**
 * Esta interfaz define
 * los métodos y atributos PÚBLICOS
 * que debe tener la clase Persona
 */
interface IPersona2{
    //Se puede definir con una función flecha
    getNombre: () => string;
    //Se puede definir con una función clásica
    setNombre(toNombre):void;

}

/**
* Ejemplo de clase Persona
*/
class Persona2 implements IPersona2{
    private nombre: string;
    constructor(toNombre:string){
        this.nombre = toNombre;
    }
    
    // Getters y Setters
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(toNombre:string):void{
       this.nombre = toNombre;
    }
}
const person2 = new Persona2("Antonio");
//A los métodos públicos sí se puede acceder
console.log(person2.getNombre());
person2.setNombre("Juan");