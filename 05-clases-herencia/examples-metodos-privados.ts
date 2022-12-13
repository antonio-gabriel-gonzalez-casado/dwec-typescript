/*
* Definición de clases y métodos con TypeScript.
* Los atributos y métodos de esta clase son privados
*/
class Runner5{
    private nombre: string;
    constructor(toNombre:string){
        this.nombre = toNombre;
    }
    private quienSoy():void{
        console.log(this.nombre);
    }
    // Getters y Setters
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(toNombre:string):void{
       this.nombre = toNombre;
    }
}
const runner5 = new Runner5("Antonio");
//No se pueden modificar los atributos
runner5.nombre = "Juan";
//Ni invocar a los métodos
runner5.quienSoy();
//A los métodos públicos sí se puede acceder
console.log(runner5.getNombre());
runner5.setNombre("Juan");