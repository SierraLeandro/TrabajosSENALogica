// 6. Un atleta recorre tres distancias diferentes en tres competiciones distintas.
// Calcular e imprimir la distancia promedio. Imprima “Excelente distancia” si el
// promedio es mayor a 12 kilómetros.

const distancia1=parseFloat(prompt("Ingrese la distancia de la primera competencia en km"));
const distancia2=parseFloat(prompt("Ingrese la distancia de la segunda competencia en km"));
const distancia3=parseFloat(prompt("Ingrese la distancia de la tercera competencia en km"));    

const promedio=(distancia1+distancia2+distancia3)/3;

if(promedio>12){
    console.log(`La distancia promedio es: ${promedio}. Excelente distancia`);
}