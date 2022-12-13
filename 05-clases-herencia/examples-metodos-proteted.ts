/*
* Definición de clases y métodos con TypeScript.
* Los atributos y métodos de esta clase son protected
*/
class Person{
    protected edad: number;
    constructor(){}
}
class Runner6 extends Person{
    private nombre: string;
    constructor(toNombre:string){
        super();
        this.nombre = toNombre;
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
    //Se puede acceder a atributos protected del padre directamente
    public getEdad():number{
        return this.edad;
    }
    public setEdad(toEdad:number):void{
       this.edad = toEdad;
    }
}
const runner6 = new Runner6("Antonio");
//No se pueden modificar los atributos
runner6.nombre = "Juan";
//Ni invocar a los métodos
runner6.quienSoy();
const person6 = new Person();
person6.edad = 25;
//A los métodos públicos sí se puede acceder
console.log(runner6.getNombre());
runner6.setNombre("Juan");
console.log(runner6.getEdad());
runner6.setEdad(25);