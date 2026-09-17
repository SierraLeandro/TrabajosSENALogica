//9. La temperatura de ayer tuvo una disminución del 23% en la mañana de hoy, y en la tarde aumento
//un 17% en relación a la misma temperatura de ayer. Determinar la disminución, el incremento y la
//temperatura actual.

const temperatura_Ayer=parseFloat(prompt("ingresar la temperatura de ayer"));
const disminucion=temperatura_Ayer*0.23;
const incremento=temperatura_Ayer*0.17;
const temperatura_Actual=temperatura_Ayer-disminucion+incremento;

console.log(`La disminución de la temperatura es: ${disminucion}`);
console.log(`El incremento de la temperatura es: ${incremento}`);
console.log(`La temperatura actual es: ${temperatura_Actual}`);