// Leer el nombre del cliente y la cantidad de adultos, y crear una reserva con la actividad "Rafting
// río Fonce" y seguro: true. Preguntar si van menores; si sí, agregar la propiedad menores con
// su cantidad. Preguntar si rechaza el seguro; si sí, eliminar la propiedad seguro. Calcular el
// total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro. Mostrar solo los
// datos que existen en la reserva.

function crearReserva(cliente, adultos) {
  let reserva = {};
  reserva.cliente = cliente;
  reserva.actividad = "Rafting río Fonce";
  reserva.adultos = adultos;
  reserva.seguro = true;
  return reserva;
}

function calcularTotal(reserva) {
  let personas = reserva.adultos;
  let total = reserva.adultos * 70000;
  if ("menores" in reserva) {
    total += reserva.menores * 50000;
    personas += reserva.menores;
  }
  if ("seguro" in reserva) {
    total += personas * 8000;
  }
  return total;
}

function mostrarReserva(reserva) {
  console.log("--- Reserva ---");
  console.log("Cliente: " + reserva.cliente);
  console.log("Actividad: " + reserva.actividad);
  console.log("Adultos: " + reserva.adultos);
  if ("menores" in reserva) {
    console.log("Menores: " + reserva.menores);
  }
  if ("seguro" in reserva) {
    console.log("Seguro: incluido");
  } else {
    console.log("Seguro: no incluido");
  }
  console.log("Total: $" + calcularTotal(reserva));
}

let cliente = prompt("Cliente:");
let adultos = Number(prompt("Adultos:"));
let reserva = crearReserva(cliente, adultos);

let hayMenores = prompt("¿Van menores de edad? (si/no):");
if (hayMenores === "si") {
  reserva.menores = Number(prompt("¿Cuántos menores?:"));
}

let rechazaSeguro = prompt("¿Rechaza el seguro? (si/no):");
if (rechazaSeguro === "si") {
  delete reserva.seguro;
}

mostrarReserva(reserva);