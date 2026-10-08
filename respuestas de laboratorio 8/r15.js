// Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la
// cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el
// primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km
// y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en
// cobertura".

function obtenerEnvioGratis(distancias) {
    return distancias.filter(function(distancia) {
        return distancia <= 3;
    });
}

function contarConEnvio(distancias) {
    let pedidos = distancias.filter(function(distancia) {
        return distancia > 3 && distancia <= 10;
    });

    return pedidos.length;
}

function buscarPrimeroFuera(distancias) {
    return distancias.find(function(distancia) {
        return distancia > 10;
    });
}

function unirConComas(lista) {
    return lista.join(", ");
}

let cantidad = Number(prompt("¿Cuántos pedidos?"));

let distancias = [];

for (let i = 0; i < cantidad; i++) {
    let distancia = Number(prompt("Distancia " + (i + 1) + ":"));
    distancias.push(distancia);
}

let envioGratis = obtenerEnvioGratis(distancias);
let pedidosConEnvio = contarConEnvio(distancias);
let primeroFuera = buscarPrimeroFuera(distancias);

console.log(
    "Envío gratis (" + envioGratis.length + "): " +
    unirConComas(envioGratis)
);

console.log("Pagan envío: " + pedidosConEnvio);

if (primeroFuera === undefined) {
    console.log("Todos los pedidos están en cobertura");
} else {
    console.log(
        "Primer pedido fuera de cobertura: " +
        primeroFuera +
        " km"
    );
}