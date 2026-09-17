//2. Calcular el 15% de un número y el 1.5% de otro número.

const numero1=parseFloat(prompt("Ingrese el primer número:"));
const porcentaje1=numero1*0.15;

const numero2=parseFloat(prompt("Ingrese el segundo número:"));
const porcentaje2=numero2*0.015;

console.log(`El 15% de ${numero1} es: ${porcentaje1}`);
console.log(`El 1.5% de ${numero2} es: ${porcentaje2}`);