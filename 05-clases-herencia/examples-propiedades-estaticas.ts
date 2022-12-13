/*
* Definición de clases y métodos con TypeScript.
* Los atributos y métodos de esta clase son privados
*/
class Runner7{
    private nombre: string;
    static role: string; 
    constructor(toNombre:string, toRole: string){
        this.nombre = toNombre;
        //Da un error de compilación porque el role es estático 
        //es decir no forma parte de la clase.
        this.role = toRole;
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
    // En este caso no da error el acceso al atributo 
    // Porque este método es de tipo static
    static getRole():string{
        return this.role;
    }
    static getRoleTexto():string{
        return "runner";
    }
}
const runner7 = new Runner7("Antonio", "runner");
//A los métodos públicos sí se puede acceder
console.log(runner7.getNombre());
runner7.setNombre("Juan");
//Error porque no forman parte de la clase
runner7.role = "runner";
runner7.getRole();
//Atributos y métoos que forman parte de la instancia de la clase
//Normalmente este tipo de instancia se suele usar para constantes
//asociadas a un objeto sin que se tengan que establecer.
Runner7.role="runner";
Runner7.getRole();
Runner7.getRoleTexto();