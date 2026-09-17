//1. Desarrolle un algoritmo que lea dos valores y calcule el 33.33% de cada uno.

const valor1=parseFloat(prompt("Ingrese el primer valor:"));
const valor2=parseFloat(prompt("Ingrese el segundo valor:"));
const valor_Total=valor1+valor2;
const porcentaje=valor_Total*0.3333;

console.log(`El 33.33% de la suma de ${valor1} y ${valor2} es: ${porcentaje}`);
