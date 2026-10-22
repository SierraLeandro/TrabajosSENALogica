// Parte A. Con este objeto de códigos de aeropuerto:
// let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
// Construir un objeto invertido (código: ciudad). El usuario escribe códigos hasta "fin" y el
// programa dice a qué ciudad corresponden.


function invertir(objeto) {
    let invertido = {};

    for (let [clave, valor] of Object.entries(objeto)) {
        invertido[valor] = clave;
    }

    return invertido;
}

let codigos = {
    bogota: "BOG",
    medellin: "MDE",
    bucaramanga: "BGA",
    cali: "CLO"
};

let codigosInvertidos = invertir(codigos);

while (true) {
    let codigo = prompt("Código:");

    if (codigo.toLowerCase() === "fin") {
        break;
    }

    codigo = codigo.toUpperCase();

    if (codigosInvertidos[codigo]) {
        console.log(codigo + ": " + codigosInvertidos[codigo]);
    } else {
        console.log("No hay ciudad con el código " + codigo);
    }
}


// Parte B. Ahora invierte este objeto de zonas de reparto, donde un valor se repite:
// let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };
// Si lo inviertes como en la parte A, se pierde un barrio. Escribe otra función que agrupe: cada
// zona debe guardar un array con todos sus barrios.


function invertirAgrupando(objeto) {
    let agrupado = {};

    for (let [clave, valor] of Object.entries(objeto)) {
        if (agrupado[valor]) {
            agrupado[valor].push(clave);
        } else {
            agrupado[valor] = [clave];
        }
    }

    return agrupado;
}

function unirConComas(lista) {
    return lista.join(", ");
}

let zonas = {
    centro: "A",
    laPlaya: "B",
    pabloVI: "A"
};

let zonasAgrupadas = invertirAgrupando(zonas);

console.log("Zonas agrupadas:");

for (let [zona, barrios] of Object.entries(zonasAgrupadas)) {
    console.log(zona + ": " + unirConComas(barrios));
}
