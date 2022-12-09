/**
 * Concatena dos cadenas que se le pasan como parámetro
 * @param {string} cadena1 texto con la primera cadena
 * @param {string} cadena2 Si no se especifica el parámetro concatena cadena vacía
 * @return {string} cadena concatenada
 */
function concatena3(cadena1: string, cadena2:string=""): string {
    return cadena1 + cadena2;
}
// Declaración correcta
const cadena31:string = concatena3("Hola");
// Declaración correcta
const cadena32:string = concatena3("Hola",undefined);
// Declaración correcta
const cadena33:string = concatena3("Hola","Mundo");