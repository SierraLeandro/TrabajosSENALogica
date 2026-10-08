// Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días
// estuvieron por encima del promedio y cuántos fueron.

function calcularPromedio(numeros) {
    let suma = 0;

    for (let numero of numeros) {
        suma += numero;
    }

    return Math.round(suma / numeros.length);
}

function contarMayoresQue(numeros, limite) {
    let contador = 0;

    for (let numero of numeros) {
        if (numero > limite) {
            contador++;
        }
    }

    return contador;
}

function mostrarDiasSobre(dias, ventas, limite) {
    console.log("Días por encima del promedio:");

    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] > limite) {
            console.log(dias[i] + ": $" + ventas[i]);
        }
    }
}

let dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

let ventas = [];

for (let i = 0; i < dias.length; i++) {
    let venta = Number(prompt("Ventas del " + dias[i] + ":"));
    ventas.push(venta);
}

let promedio = calcularPromedio(ventas);

console.log("Promedio diario: $" + promedio);

mostrarDiasSobre(dias, ventas, promedio);

let totalDias = contarMayoresQue(ventas, promedio);

console.log("Total: " + totalDias + " días");