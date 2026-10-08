// Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el del
// medio. Si N es par hay dos del medio: mostrar ambos.

const leerNumeros = (cantidad) => {

    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt(`Número ${i + 1}:`));
        numeros.push(numero);
    }

    return numeros;
};


const obtenerUltimo = (numeros) => {

    return numeros[numeros.length - 1];
};


const mostrarMedio = (numeros) => {

    let cantidad = numeros.length;

    if (cantidad == 1) {
        console.log(`Del medio: ${numeros[0]}`);
    } else if (cantidad % 2 == 0) {

        let medio1 = cantidad / 2 - 1;
        let medio2 = cantidad / 2;

        console.log(`Del medio: ${numeros[medio1]} y ${numeros[medio2]}`);

    } else {

        let medio = Math.floor(cantidad / 2);

        console.log(`Del medio: ${numeros[medio]}`);
    }
};


let cantidad = Number(prompt("¿Cuántos números?"));

while (cantidad < 1) {
    cantidad = Number(prompt("Debe ingresar al menos 1 número. ¿Cuántos números?"));
}

let numeros = leerNumeros(cantidad);

console.log(`Primero: ${numeros[0]}`);

console.log(`Último: ${obtenerUltimo(numeros)}`);

mostrarMedio(numeros);
