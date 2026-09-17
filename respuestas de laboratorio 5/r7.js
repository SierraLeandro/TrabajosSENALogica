//7. A la mamá de Juan le preguntan su edad, y ella contesta: Tengo tres hijos, pregúntele la edad a Juan.
//Miguel tiene 2/3 la edad de Juan, margarita tiene 4/3 de la edad de Miguel y mi edad es la suma de
//las tres. Hacer un algoritmo que muestre la edad de los cuatro.

const edad_Juan=parseFloat(prompt("Ingrese la edad de Juan:"));
const edad_Miguel=edad_Juan*(2/3);
const edad_Margarita=edad_Miguel*(4/3);
const edad_Mama=edad_Juan+edad_Miguel+edad_Margarita;

console.log(`La edad de Juan es: ${edad_Juan}`);
console.log(`La edad de Miguel es: ${edad_Miguel}`);
console.log(`La edad de Margarita es: ${edad_Margarita}`);
console.log(`La edad de la mamá es: ${edad_Mama}`);