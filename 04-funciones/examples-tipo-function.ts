/**
 * Declaración de la variable de tipo Function
 */
let concatena41: (cadena1: string, cadena2:string) => string;

/**
 * Concatena dos cadenas que se le pasan como parámetro
 * @param {string} cadena1 texto con la primera cadena
 * @param {string} cadena2 Si no se especifica el parámetro concatena cadena vacía
 * @return {string} cadena concatenada
 */
concatena41 = function concatena4(cadena1: string, cadena2:string=""): string {
    return cadena1 + cadena2;
}
// Inicialización incorrecta
concatena41 = function concatena4(cadena1: number, cadena2:number=0): number {
    return cadena1 + cadena2;
}





