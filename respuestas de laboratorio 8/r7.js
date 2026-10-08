// Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones
// validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no
// cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más
// frecuente.

function contarPorEstrellas(calificaciones) {
    let contadores = [0, 0, 0, 0, 0];

    for (let calificacion of calificaciones) {
        contadores[calificacion - 1]++;
    }

    return contadores;
}

function repetirCaracter(caracter, veces) {
    return caracter.repeat(veces);
}

function buscarPosicionMayor(numeros) {
    let posicionMayor = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posicionMayor]) {
            posicionMayor = i;
        }
    }

    return posicionMayor;
}

let calificaciones = [];

for (let i = 0; i < 10; i++) {
    let calificacion;

    do {
        calificacion = Number(prompt("Calificación " + (i + 1) + ":"));

        if (calificacion < 1 || calificacion > 5 || !Number.isInteger(calificacion)) {
            alert("Ingrese una calificación válida entre 1 y 5.");
        }

    } while (calificacion < 1 || calificacion > 5 || !Number.isInteger(calificacion));

    calificaciones.push(calificacion);
}

let contadores = contarPorEstrellas(calificaciones);

for (let i = 0; i < contadores.length; i++) {
    console.log(
        "Estrellas " + (i + 1) + ": " +
        repetirCaracter("*", contadores[i]) +
        " (" + contadores[i] + ")"
    );
}

let posicionMayor = buscarPosicionMayor(contadores);
let calificacionMasFrecuente = posicionMayor + 1;

console.log("Más frecuente: " + calificacionMasFrecuente + " estrellas");