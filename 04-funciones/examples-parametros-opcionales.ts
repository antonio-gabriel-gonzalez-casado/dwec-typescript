/**
 * Concatena dos cadenas que se le pasan como parámetro
 * @param {string} cadena1 texto con la primera cadena
 * @param {string} cadena2 Opcional. Si no se especifica el parámetro entonces será undefined
 * @return {string} cadena concatenada
 */
function concatena2(cadena1: string, cadena2?: string): string {
    if (cadena2 != undefined){
        return cadena1 + cadena2;
    }
    return cadena1;
}
// Declaración correcta
const cadena2:string = concatena2("Hola");
// Declaración correcta
const cadena3:string = concatena2("Hola",undefined);