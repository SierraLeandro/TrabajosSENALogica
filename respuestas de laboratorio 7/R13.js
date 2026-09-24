const obtenerValorAbsoluto = (numero) => {
  if (numero < 0) {
    return numero * -1;
  } else {
    return numero;
  }
};

const generarLetrero = (diferencia) => {

  if (diferencia > 0) {
    return "SUBIÓ";
  } else if (diferencia < 0) {
    return "BAJÓ";
  } else {
    return "SE MANTUVO";
  }
};

const leerPromedioBasculas = (cantidadBasculas) => {

  let suma = 0;

  for (let i = 1; i <= cantidadBasculas; i++) {
    const peso = parseFloat(prompt(`Báscula ${i}: `));
    suma += peso;
  }

  return suma / cantidadBasculas;
};

for (let i = 1; i <= 5; i++) {

  console.log(`Miembro ${i}`);

  const pesoAnterior = parseFloat(prompt("Peso anterior: "));

  const promedio = leerPromedioBasculas(10);

  const diferencia = promedio - pesoAnterior;

  const letrero = generarLetrero(diferencia);

  if (diferencia === 0) {
    console.log(letrero);
  } else {
    console.log(`${letrero} ${obtenerValorAbsoluto(diferencia)} kg`);
  }
}