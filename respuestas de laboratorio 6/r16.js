// 16. Un ratón se comió el 40% de un pedazo de queso y su peso aumentó en un 1,1%.
// Leer el peso del queso y el peso del ratón. Calcular e imprimir el peso actual de los
// dos sólo si el 20% del peso del ratón es inferior al peso final del queso.

const peso_queso=parseFloat(prompt("Ingrese el peso del queso en kg"));
const peso_ratón=parseFloat(prompt("Ingrese el peso del ratón en kg"));

const peso_queso_final=peso_queso*0.6;
const peso_ratón_final=peso_ratón*1.011;

if(peso_ratón_final*0.2<peso_queso_final){
    console.log(`El peso final del queso es: ${peso_queso_final} kg. El peso final del ratón es: ${peso_ratón_final} kg`);
}   