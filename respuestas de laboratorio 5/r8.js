//8. Elaborar un algoritmo que lea de un mismo registro la cédula de un empleado, el nombre, el salario
//básico por hora y las horas trabajadas en la semana. Se debe imprimir la cédula, el nombre y el
//salario devengado en la semana.

const cedula=parseFloat(prompt("Ingrese la cédula del empleado:"));
const nombre=prompt("Ingrese el nombre del empleado:");
const horas_Trabajadas=parseFloat(prompt("Ingrese las horas trabajadas en la semana:"));
const salario_PorHora=parseFloat(prompt("Ingrese el salario básico por hora:"));
const salario_Devengado=horas_Trabajadas*salario_PorHora;

console.log(`La cédula del empleado es: ${cedula}`);
console.log(`El nombre del empleado es: ${nombre}`);
console.log(`El salario devengado en la semana es: ${salario_Devengado}`);