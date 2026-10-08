// Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más
// IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA.
// Escribe también la versión con for en otra función y comprueba que las dos den el mismo
// resultado.

function calcularConIva(precio) {
    return Math.round(precio * 1.19);
}

function aplicarIvaConMap(precios) {
    return precios.map(function(precio) {
        return calcularConIva(precio);
    });
}

function aplicarIvaConFor(precios) {
    let resultado = [];

    for (let i = 0; i < precios.length; i++) {
        resultado.push(calcularConIva(precios[i]));
    }

    return resultado;
}

function calcularTotal(numeros) {
    let suma = 0;

    for (let numero of numeros) {
        suma += numero;
    }

    return suma;
}

function unirConComas(lista) {
    return lista.join(", ");
}

let cantidad = Number(prompt("¿Cuántos productos?"));

let precios = [];

for (let i = 0; i < cantidad; i++) {
    let precio = Number(prompt("Precio " + (i + 1) + ":"));
    precios.push(precio);
}

let preciosConIvaMap = aplicarIvaConMap(precios);
let preciosConIvaFor = aplicarIvaConFor(precios);

console.log("Sin IVA: " + unirConComas(precios));
console.log("Con IVA: " + unirConComas(preciosConIvaMap));
console.log("Total con IVA: $" + calcularTotal(preciosConIvaMap));

console.log("Resultado con map: " + unirConComas(preciosConIvaMap));
console.log("Resultado con for: " + unirConComas(preciosConIvaFor));

console.log(
    "¿Map y for dan el mismo resultado?: " +
    (unirConComas(preciosConIvaMap) === unirConComas(preciosConIvaFor))
);