// En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio.
// Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N:
// rotar 7 en una fila de 5 es lo mismo que rotar 2.

function rotarDerecha(lista, k) {
    let n = lista.length;
    let resultado = [];

    k = k % n;

    for (let i = 0; i < n; i++) {
        let nuevaPosicion = (i + k) % n;
        resultado[nuevaPosicion] = lista[i];
    }

    return resultado;
}

function unirConComas(lista) {
    return lista.join(", ");
}

let cantidad = Number(prompt("¿Cuántas personas?"));

let personas = [];

for (let i = 0; i < cantidad; i++) {
    let persona = prompt("Persona " + (i + 1) + ":");
    personas.push(persona);
}

let k = Number(prompt("¿Cuántas posiciones rotar?"));

let filaRotada = rotarDerecha(personas, k);

console.log("Fila original: " + unirConComas(personas));
console.log("Fila rotada: " + unirConComas(filaRotada));