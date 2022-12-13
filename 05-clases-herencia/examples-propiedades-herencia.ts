/**
* Herencia de clases.
*/
class Persona{
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
const person = new Persona("Antonio");
//A los métodos públicos sí se puede acceder
console.log(person.getNombre());
person.setNombre("Juan");
/**
 * Creación de una clase que extiende de Persona
 */
class Runner9 extends Persona{
    dorsal:number;
    constructor(toNombre:string, toDorsal:number){
        super(toNombre);
        this.dorsal = toDorsal;
    }
    public quienSoy(){
        console.log(this.getNombre());
    } 
}
//Se debe usar el constructor del padre
const runner9 = new Runner9("nombre", 1233);
console.log(runner9.getNombre());
runner9.setNombre("Juan");