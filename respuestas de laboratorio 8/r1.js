// Pedir cuántos productos se van a comprar, leer el nombre de cada uno
// y guardarlos en un array. Al final mostrar la lista numerada desde 1
// y el total de productos.

const leerProductos = (cantidad) => {

    let productos = [];

    for (let i = 0; i < cantidad; i++) {
        let producto = prompt("Digite el nombre del producto:");
        productos.push(producto);
    }

    return productos;
};


const mostrarLista = (productos) => {

    for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i]}`);
    }

    console.log(`Total de productos: ${productos.length}`);
};


let cantidad = Number(prompt("¿Cuántos productos va a comprar?"));

let productos = leerProductos(cantidad);

mostrarLista(productos);