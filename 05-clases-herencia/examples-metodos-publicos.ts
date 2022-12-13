/*
* Definición de clases y métodos con TypeScript.
* Los atributos y métodos de esta clase son públicos
*/
class Runner4{
    public nombre: string;
    constructor(toNombre:string){
        this.nombre = toNombre;
    }
    public quienSoy():void{
        console.log(this.nombre);
    }
}
const runner4 = new Runner4("Antonio");
//Se pueden modificar los atributos directamente
runner4.nombre = "Juan";
runner4.quienSoy();