/** 
* Declaración del tipo Evento 
* con un atributo nombre.
*/
type Evento = {
    nombre: string;
    maxInscritos?: number;
};
/**
* Si se declara una variable de tipo Evento
* hay que especificar los atributos del tipo 
*/
const evento1: Evento = {};
/**
 * Error por tipo incorrecto
 */
const evento3: Evento = {
    nombre: 3,
};
/**
 * Declaraciones correcta
 */
 const evento2: Evento = {
    nombre: "Carrera IES ALIXAR",
};
const evento4: Evento = {
    nombre: "Carrera IES ALIXAR",
    maxInscritos:100,
};