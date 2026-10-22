// El programa arranca con este inventario:
// let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };
// Se registran ventas: producto y cantidad, hasta que el producto sea "fin". Si el producto no
// existe o no hay suficiente, se avisa y no se modifica nada. Al final se muestra el inventario y los
// productos agotados.

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

function vender(inventario, producto, cantidad) {
  if (!(producto in inventario)) {
    return "No vendemos " + producto;
  }
  if (cantidad > inventario[producto]) {
    return "Solo quedan " + inventario[producto] + " " + producto;
  }
  inventario[producto] -= cantidad;
  return "Vendidas " + cantidad + " " + producto + ". Quedan " + inventario[producto];
}

function obtenerAgotados(inventario) {
  let agotados = [];
  for (let producto in inventario) {
    if (inventario[producto] === 0) {
      agotados.push(producto);
    }
  }
  return agotados;
}

function mostrarInventario(inventario) {
  console.log("Inventario final:");
  for (let producto in inventario) {
    console.log(producto + ": " + inventario[producto]);
  }
  let agotados = obtenerAgotados(inventario);
  if (agotados.length > 0) {
    console.log("Agotados: " + unirConComas(agotados));
  } else {
    console.log("Agotados: ninguno");
  }
}

let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };

let producto = prompt("Producto:");
while (producto !== "fin") {
  if (producto in inventario) {
    let cantidad = Number(prompt("Cantidad:"));
    console.log(vender(inventario, producto, cantidad));
  } else {
    console.log(vender(inventario, producto, 0));
  }
  producto = prompt("Producto:");
}

mostrarInventario(inventario);