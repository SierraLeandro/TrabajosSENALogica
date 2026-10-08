// Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser
// idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la
// mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?

function mostrarLista(productos) {
    productos.forEach(function(producto, indice) {
        console.log((indice + 1) + ". " + producto);
    });
}

let productos = [];

let cantidad = Number(prompt("¿Cuántos productos?"));

for (let i = 0; i < cantidad; i++) {
    let producto = prompt("Producto " + (i + 1) + ":");
    productos.push(producto);
}

mostrarLista(productos);

// RTA: No, un forEach no se puede detener a la mitad usando break como en un for.
// Por eso forEach es útil cuando queremos recorrer todos los elementos,
// pero no es la mejor opción cuando necesitamos detener el recorrido antes de tiempo.