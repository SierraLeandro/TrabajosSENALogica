// Con este inventario:
// let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

// Objetos en JavaScript · Sesión 2 · Página 17

// Mostrar cuántos productos hay, el total de unidades, los productos con stock bajo (más de 0 y
// menos de 10) con su cantidad, y los agotados. Usa Object.entries, Object.values, filter
// y map; nada de for ni for...in.

function unirConComas(lista) {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    if (i > 0) {
      texto += ", ";
    }
    texto += lista[i];
  }
  return texto;
}

function contarUnidades(inventario) {
  let total = 0;
  Object.values(inventario).forEach((cantidad) => {
    total += cantidad;
  });
  return total;
}

function obtenerStockBajo(inventario) {
  return Object.entries(inventario).filter((par) => par[1] > 0 && par[1] < 10);
}

function obtenerAgotados(inventario) {
  return Object.entries(inventario)
    .filter((par) => par[1] === 0)
    .map((par) => par[0]);
}

function formatearPares(pares) {
  let textos = pares.map((par) => par[0] + " (" + par[1] + ")");
  return unirConComas(textos);
}

let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

let stockBajo = obtenerStockBajo(inventario);
let agotados = obtenerAgotados(inventario);

console.log("Productos: " + Object.keys(inventario).length);
console.log("Unidades en total: " + contarUnidades(inventario));
console.log("Stock bajo: " + formatearPares(stockBajo));
console.log("Agotados: " + unirConComas(agotados));