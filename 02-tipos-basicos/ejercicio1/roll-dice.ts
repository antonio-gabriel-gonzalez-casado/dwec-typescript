/**
 * * Función que dado un usuario y un número máximo de tiradas de un dado
 * * devuelve si el usuario es ganador o perdedor en cada tirada. 
 * * El usuario es ganador cuando el dado muestra el valor máximo.
 * @param {string} userName Usuario que tira el dado
 * @param {number} maxOfTries Número máximo de tiradas
 * @return {string[]} Devuelve un array de mensajes de ganador o perdedor en función del resulado obtenido.
 */
function rollTheDice(userName, maxOfTries) {
    // Inicialización del array de resultado a array vacío
    const results = [];
    // Constante para el número máximo de lados que tiene el dado
    let MAX_DICE_NUMBER;
  
    // Se comprueba que se ha pasado el parámetro maxOfTries se captura el error.
    if (!maxOfTries) {
      throw new Error('Número de Intentos debe estar definido');
    }
  
    // Si el maxOfTries es un string se convierte a número
    if (typeof maxOfTries === 'string') {
      maxOfTries = parseInt(maxOfTries, 10);
    }
  
     // Si el maxOfTries no es un número se captura el error correspondiente
    if (typeof maxOfTries !== 'number') {
      throw new Error('Número de Intentos debe ser un número');
    }
  
    // Si el ususuario no está establecido se captura el error correspondiente
    if (!userName) { 
      throw new Error('Inserta un usuario');
    }
    
    // Si el ususuario no es una cadena de caracteres se captura el error correspondiente
    if (typeof userName !== 'string') {
      throw new Error('Usuario debe ser de tipo cadena: ' + typeof userName);
    }
  
    // Se establece el número máximo de caras que tiene el dado.
    MAX_DICE_NUMBER = 6;
  
    // Bucle para lanzar los intentos
    for (let index = 0; index < maxOfTries; index++) {
        // Se obtiene el número más próximo a la multiplicación del número máximo de caras por un número aleatorio entre 0 y 1. 
        const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
        // Si el resultado es igual al número máximo de caras entonces el usuario gana, sino pierde.
        if (result === MAX_DICE_NUMBER) {
            results.push(`${userName} GANA`);
        } else {
            results.push(`${userName} PIERDE`);
        }
    }
  
    return results;
  }
  
  //Empieza el juego
  const results = rollTheDice('TypeScript', 2);
  
  console.log(results);