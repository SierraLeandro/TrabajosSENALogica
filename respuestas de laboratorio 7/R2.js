let sumaCubos = 0;

const calcularCubo = (numero) => {
  return numero * numero * numero;
};

const calcularCuartaParte = (numero) => {
  return numero / 4;
};

for (let i = 1; i <= 10; i++) {

  const numero = parseInt(prompt(`Número ${i}: `));

  const cubo = calcularCubo(numero);
  const cuartaParte = calcularCuartaParte(numero);

  console.log(`Número: ${numero} | Cubo: ${cubo} | Cuarta parte: ${cuartaParte}`);

  sumaCubos += cubo;
}

console.log(`Suma de los cubos: ${sumaCubos}`);
