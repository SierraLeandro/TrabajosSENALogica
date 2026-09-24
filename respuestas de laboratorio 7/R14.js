let clientes = 0;
let totalDia = 0;
let compraMasAlta = 0;
let numeroCompraMasAlta = 0;

const atenderCliente = (numeroCliente) => {

  let totalCliente = 0;

  console.log(`Cliente ${numeroCliente}`);

  let precio = parseInt(prompt("Precio (0 para cerrar la cuenta): "));

  while (precio !== 0) {

    totalCliente += precio;

    precio = parseInt(prompt("Precio (0 para cerrar la cuenta): "));
  }

  return totalCliente;
};

const hayOtroCliente = () => {

  const respuesta = prompt("¿Hay otro cliente? (S/N): ").toUpperCase();

  return respuesta === "S";
};

let continuar = true;

while (continuar) {

  clientes++;

  const totalCliente = atenderCliente(clientes);

  console.log(`Total cliente ${clientes}: ${totalCliente}`);

  totalDia += totalCliente;

  if (totalCliente > compraMasAlta) {
    compraMasAlta = totalCliente;
    numeroCompraMasAlta = clientes;
  }

  continuar = hayOtroCliente();
}

console.log(`Clientes atendidos: ${clientes}`);
console.log(`Total cobrado: ${totalDia}`);
console.log(`Compra más alta: cliente ${numeroCompraMasAlta} con ${compraMasAlta}`);