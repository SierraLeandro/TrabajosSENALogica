//3. Calcular el 0.8% de un número y el 98% del cuadrado del cuadrado del mismo número.

const numero=parseFloat(prompt("Ingrese un número:"));
const porcentaje1=numero*0.008;
const porcentaje2=Math.pow(numero,4)*0.98;

console.log(`El 0.8% de ${numero} es: ${porcentaje1}`);
console.log(`El 98% del cuadrado del cuadrado de ${numero} es: ${porcentaje2}`);
