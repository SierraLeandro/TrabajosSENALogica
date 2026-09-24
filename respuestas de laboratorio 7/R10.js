let personas = 0;
let totalPesos = 0;

const convertirDolaresAPesos = (dolares) => {
  return dolares * 3550;
};

const procesarListado = () => {

  let dolares = parseInt(prompt("Dólares (0 para terminar): "));

  while (dolares !== 0) {

    let pesos = convertirDolaresAPesos(dolares);

    console.log(`Equivale a: ${pesos} pesos`);

    personas++;
    totalPesos += pesos;

    dolares = parseInt(prompt("Dólares (0 para terminar): "));
  }

  console.log(`Personas atendidas: ${personas}`);
  console.log(`Total en pesos: ${totalPesos}`);
};

procesarListado();