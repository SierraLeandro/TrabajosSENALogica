// Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que
// apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido
// includes, indexOf y Set.

function existeEnLista(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return true;
        }
    }

    return false;
}

function eliminarRepetidos(numeros) {
    let sinRepetidos = [];

    for (let numero of numeros) {
        if (!existeEnLista(sinRepetidos, numero)) {
            sinRepetidos.push(numero);
        }
    }

    return sinRepetidos;
}

function unirConComas(lista) {
    return lista.join(", ");
}

let numeros = [];

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt("Número " + (i + 1) + ":"));
    numeros.push(numero);
}

let sinRepetidos = eliminarRepetidos(numeros);

let repetidosEliminados = numeros.length - sinRepetidos.length;

console.log("Sin repetidos: " + unirConComas(sinRepetidos));
console.log("Se eliminaron " + repetidosEliminados + " repetidos");
