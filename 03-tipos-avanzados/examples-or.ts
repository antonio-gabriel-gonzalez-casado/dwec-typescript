/**
 * Tipo propio datos personales
 */
type DatosPersonales2 = {
    nombre: string;
    edad?: number;
}
/**
 * Tipo propio datos camiseta
 */
type DatosCamiseta2 = {
    tamanio: string;
}
/**
 * Unión entre de tipos para crear uno nuevo 
 * con la unión de ambos
 */
type Runner2 = DatosPersonales2 | DatosCamiseta2;
/**
 * Declaración de constante runner con los datos
 * de todos los atributos de ambos tipos
 */
const runner2: Runner2 = {
    nombre: "Antonio",
    edad: 20,
}
const runner3: Runner2 = {
    tamanio: "M"
}