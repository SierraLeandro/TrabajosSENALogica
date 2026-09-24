let cantidad = 0;
let suma = 0;
let aprobados = 0;
let menor = 0;

const esNotaValida = (nota) => {
  return nota >= 0 && nota <= 5;
};

const estaAprobado = (nota) => {
  return nota >= 3;
};

let nota = parseFloat(prompt("Nota (-1 para terminar): "));

while (nota !== -1) {

  if (esNotaValida(nota)) {

    cantidad++;
    suma += nota;

    if (cantidad === 1) {
      menor = nota;
    } else if (nota < menor) {
      menor = nota;
    }

    if (estaAprobado(nota)) {
      aprobados++;
    }

  } else {
    console.log("Nota inválida, debe estar entre 0 y 5");
  }

  nota = parseFloat(prompt("Nota (-1 para terminar): "));
}

console.log(`Notas válidas: ${cantidad}`);

if (cantidad > 0) {
  console.log(`Promedio: ${suma / cantidad}`);
  console.log(`Nota más baja: ${menor}`);
  console.log(`Aprobados: ${aprobados}`);
} else {
  console.log("No hay notas válidas");
}