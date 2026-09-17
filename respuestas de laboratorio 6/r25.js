// 25. Calcular la raíz cuadrada del triple del valor de PI - X.
// CORREGIDO: "x" ya estaba declarado con let en el ejercicio 24 (mismo scope,
// let duplicado = SyntaxError). Se renombró a "x25". También se ajustó la fórmula
// a 3 * (PI - x) para que coincida con el enunciado ("el triple del valor de PI - X"),
// antes calculaba (3 * PI) - x, que es distinto.

let x25 = parseFloat(prompt("Ingrese el valor de X"));

let resultado = Math.sqrt(3 * (Math.PI - x25));

console.log("El resultado es: " + resultado);
