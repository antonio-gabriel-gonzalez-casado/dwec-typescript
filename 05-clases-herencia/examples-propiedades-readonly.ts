/*
* Definición de clases y métodos con TypeScript.
*/
class Runner8{
    private nombre: string;
    readonly role: string; 
    constructor(toNombre:string){
        this.nombre = toNombre;
        this.role = "runner";
    }
    private quienSoy(){
        console.log(this.nombre);
    }
    // Getters y Setters
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(toNombre:string):void{
       this.nombre = toNombre;
    }
    getRole():string{
        return this.role;
    }
    setRole(toRole:string):void{
        this.role = toRole;
    }
}
const runner8 = new Runner8("Antonio");
//A los métodos públicos sí se puede acceder
console.log(runner8.getNombre());
runner8.setNombre("Juan");
console.log(runner8.getRole());
