/**
 * Concatena dos cadenas que se le pasan como parámetro
 * @param {string} cadena1 texto con la primera cadena
 * @param {string} cadena2 texto con la segunda cadena
 * @return {string} cadena concatenada
 */
function concatena(cadena1: string, cadena2: string): string {
    return cadena1 + cadena2;
}
// Error de tipos
const cadenaError:string = concatena(1,true);
// Declaración correcta
const cadena:string = concatena("Hola","Mundo");