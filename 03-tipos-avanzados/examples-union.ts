/**
 * Tipo propio datos personales
 */
type DatosPersonales = {
    nombre: string;
    edad?: number;
}
/**
 * Tipo propio datos camiseta
 */
type DatosCamiseta = {
    tamanio: string;
}
/**
 * Unión entre de tipos para crear uno nuevo 
 * con la unión de ambos
 */
type Runner = DatosPersonales & DatosCamiseta;
/**
 * Declaración de constante runner con los datos
 * de todos los atributos de ambos tipos
 */
const runner: Runner = {
    nombre: "Antonio",
    edad: 20,
    tamanio: "M",
}