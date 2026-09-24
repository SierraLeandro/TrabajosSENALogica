const precioKilo = parseInt(prompt("Precio por kilo: "));

let totalRecaudado = 0;
let clientesDescuento = 0;

const tieneDescuento = (kilos) => {
  return kilos > 10;
};

const calcularTotalCliente = (kilos, precioKilo) => {

  let total = kilos * precioKilo;

  if (tieneDescuento(kilos)) {
    total = total - (total * 15 / 100);
  }

  return total;
};

for (let i = 1; i <= 15; i++) {

  const kilos = parseInt(prompt(`Kilos cliente ${i}: `));

  const totalCliente = calcularTotalCliente(kilos, precioKilo);

  if (tieneDescuento(kilos)) {
    console.log(`Cliente ${i} paga: ${totalCliente} (con descuento)`);
    clientesDescuento++;
  } else {
    console.log(`Cliente ${i} paga: ${totalCliente}`);
  }

  totalRecaudado += totalCliente;
}

console.log(`Total recaudado: ${totalRecaudado}`);
console.log(`Clientes con descuento: ${clientesDescuento}`);