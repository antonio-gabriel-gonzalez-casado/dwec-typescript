/** 
* Declaración de la interfaz EventoRunning 
* con un atributo nombre.
*/
interface EventoRunning {
    nombre: string;
    maxInscritos?: number;
    escribirNombreEvento():void;
    obtenerNumeroInscritos?():number;
};
/**
* Si se declara una variable de tipo EventoRunning
* hay que especificar los atributos del tipo 
*/
const eventoRunning1: EventoRunning = {};
/**
 * Error por tipo incorrecto
 */
const eventoRunning2: EventoRunning = {
    nombre: 3,
};
/**
 * Declaraciones correcta
 */
 const eventoRunning3: EventoRunning = {
    nombre: "Carrera IES ALIXAR",
    escribirNombreEvento: function() {console.log(this.nombre);},
};
const eventoRunning4: EventoRunning = {
    nombre: "Carrera IES ALIXAR",
    maxInscritos:100,
    escribirNombreEvento: function() {console.log(this.nombre);},
    obtenerNumeroInscritos: function() {return this.maxInscritos},
};
