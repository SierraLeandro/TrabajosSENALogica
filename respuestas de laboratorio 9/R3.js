// El programa arranca con este objeto:
// let producto = { nombre: "Morral", precio: 85000, stock: 12 };
// Leer un porcentaje de descuento. Una función debe retornar un objeto nuevo con el precio
// rebajado y una propiedad extra precioAnterior. Las demás propiedades se copian igual.
// Mostrar ambos objetos para demostrar que el original quedó intacto.

function aplicarDescuento(producto, porcentaje) {
  let oferta = {};
  oferta.nombre = producto.nombre;
  oferta.precio = producto.precio - producto.precio * porcentaje / 100;
  oferta.stock = producto.stock;
  oferta.precioAnterior = producto.precio;
  return oferta;
}

function mostrarProducto(etiqueta, producto) {
  let texto = etiqueta + ": " + producto.nombre + " - $" + producto.precio;
  if ("precioAnterior" in producto) {
    texto += " (antes $" + producto.precioAnterior + ")";
  }
  texto += " - " + producto.stock + " unidades";
  console.log(texto);
}

let producto = { nombre: "Morral", precio: 85000, stock: 12 };

let porcentaje = Number(prompt("Porcentaje de descuento:"));
let enOferta = aplicarDescuento(producto, porcentaje);

mostrarProducto("Original", producto);
mostrarProducto("En oferta", enOferta);