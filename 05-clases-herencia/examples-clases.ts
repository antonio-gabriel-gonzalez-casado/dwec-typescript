/*
* Definición de clases antes de ECMAScript 2015
*/
function Runner(nombre){
    this.nombre = nombre;
}
/*
* Definición de métodos antes de ECMAScript 2015
*/
Runner.prototype.quienSoy = function(){
    console.log(this.name);
}

/*
* Definición de clases y métodos a partir de ECMAScript 2015
*/
class Runner2{
    nombre;
    constructor(toNombre){
        this.nombre = toNombre;
    }
    quienSoy(){
        console.log(this.nombre);
    }
}

/*
* Definición de clases y métodos con TypeScript.
*/
class Runner3{
    nombre: string;
    constructor(toNombre:string){
        this.nombre = toNombre;
    }
    quienSoy():void{
        console.log(this.nombre);
    }
}