// Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares,
// en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar
// "(ninguno)".

function esPar(numero) {
    return numero % 2 === 0;
}

function filtrarPares(numeros) {
    let pares = [];

    for (let numero of numeros) {
        if (esPar(numero)) {
            pares.push(numero);
        }
    }

    return pares;
}

function filtrarImpares(numeros) {
    let impares = [];

    for (let numero of numeros) {
        if (!esPar(numero)) {
            impares.push(numero);
        }
    }

    return impares;
}

function unirConComas(lista) {
    if (lista.length === 0) {
        return "(ninguno)";
    }

    return lista.join(", ");
}

let numeros = [];

for (let i = 0; i < 8; i++) {
    let numero = Number(prompt("Número " + (i + 1) + ":"));
    numeros.push(numero);
}

let pares = filtrarPares(numeros);
let impares = filtrarImpares(numeros);

console.log("Pares (" + pares.length + "): " + unirConComas(pares));
console.log("Impares (" + impares.length + "): " + unirConComas(impares));