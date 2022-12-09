/**
 * Definición de una lista de eventos clave-valor
 */
const eventos: Record<string, number> = {}
/**
 * Asignación de clave-valor
 */
eventos["Carrera IES ALIXAR"] = 100;
eventos["Carrera Nocturna"] = 200;

/**
 * Definición de tipo RunnerInfo
 */
interface RunnerInfo {
    nombre: string;
    edad: number;
}
/**
 * Definición de una lista de runners 
 * En la definción se realiza la asignación clave-valor
 */
const runners: Record<number, RunnerInfo> = {
    1: { edad: 20, nombre: "Antonio" },
    2: { edad: 50, nombre: "Juan" },
    3: { edad: 26, nombre: "Pedro" },
};


