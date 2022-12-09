/**
 * Concatena dos cadenas que se le pasan como parámetro
 * @param {string} cadena1 texto con la primera cadena
 * @param {string} cadena2 texto con la segunda cadena
 * @return {string | never} cadena concatenada. 
 *                          Si alguno o ambos parámetros es undefined devuelve never
 */
 function concatena5(cadena1: string, cadena2: string): string | never {
    if (cadena1 == undefined || cadena2 == undefined){
        throw new Error("Ambos parámetros tienen que estar establecidos");
    } 
    return cadena1 + cadena2;
}
// Declaración correcta
const cadena5:string = concatena5("Hola","Mundo");