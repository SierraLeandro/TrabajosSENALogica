const cantidadPersonas = parseInt(prompt("¿Cuántas personas?: "));

let hombres = 0;
let mujeres = 0;
let sumaEdadesHombres = 0;
let sumaEdadesMujeres = 0;
let sumaEdades = 0;

const esHombre = (genero) => {
  return genero === "H";
};

const calcularPromedio = (suma, cantidad) => {
  return suma / cantidad;
};

for (let i = 1; i <= cantidadPersonas; i++) {

  const genero = prompt(`Género persona ${i} (H/M): `).toUpperCase();
  const edad = parseInt(prompt(`Edad persona ${i}: `));

  sumaEdades += edad;

  if (esHombre(genero)) {
    hombres++;
    sumaEdadesHombres += edad;
  } else {
    mujeres++;
    sumaEdadesMujeres += edad;
  }
}

if (hombres > 0) {
  console.log(`Hombres: ${hombres} | Promedio de edad: ${calcularPromedio(sumaEdadesHombres, hombres)}`);
} else {
  console.log("No hay hombres para calcular el promedio.");
}

if (mujeres > 0) {
  console.log(`Mujeres: ${mujeres} | Promedio de edad: ${calcularPromedio(sumaEdadesMujeres, mujeres)}`);
} else {
  console.log("No hay mujeres para calcular el promedio.");
}

console.log(`Promedio del grupo: ${calcularPromedio(sumaEdades, cantidadPersonas)}`);