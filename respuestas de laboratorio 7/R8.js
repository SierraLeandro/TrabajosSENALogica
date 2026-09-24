let suma = 0;
let menor = 0;
let mayor = 0;

const obtenerMenor = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

const obtenerMayor = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const calcularPromedio = (suma, cantidad) => {
  return suma / cantidad;
};

for (let i = 1; i <= 25; i++) {

  const puntos = parseInt(prompt(`Puntos auto ${i}: `));

  suma += puntos;

  if (i === 1) {
    menor = puntos;
    mayor = puntos;
  } else {
    menor = obtenerMenor(menor, puntos);
    mayor = obtenerMayor(mayor, puntos);
  }
}

console.log(`Promedio: ${calcularPromedio(suma, 25)}`);
console.log(`Menor contaminación: ${menor}`);
console.log(`Mayor contaminación: ${mayor}`);