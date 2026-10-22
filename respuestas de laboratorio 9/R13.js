// Reescribe el ejercicio 5 sin for...in: usa Object.keys, Object.values y métodos de array.
// La salida debe ser idéntica. En un comentario responde: ¿qué función del ejercicio 5
// desapareció por completo y por qué?

function calcularPromedioObjeto(objeto) {
  let valores = Object.values(objeto);
  let suma = 0;
  valores.forEach((valor) => {
    suma += valor;
  });
  return suma / valores.length;
}

function buscarClaveMayor(objeto) {
  let claves = Object.keys(objeto);
  let claveMayor = claves[0];
  claves.forEach((clave) => {
    if (objeto[clave] > objeto[claveMayor]) {
      claveMayor = clave;
    }
  });
  return claveMayor;
}

function filtrarClavesMenores(objeto, limite) {
  return Object.keys(objeto).filter((clave) => objeto[clave] < limite);
}

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

function mostrarBoletin(notas) {
  Object.keys(notas).forEach((materia) => {
    console.log(materia + ": " + notas[materia]);
  });
  console.log("Promedio: " + calcularPromedioObjeto(notas).toFixed(1));
  console.log("Mejor materia: " + buscarClaveMayor(notas));
  let reforzar = filtrarClavesMenores(notas, 3.5);
  if (reforzar.length > 0) {
    console.log("Por reforzar: " + unirConComas(reforzar));
  } else {
    console.log("Por reforzar: ninguna");
  }
}

let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };
mostrarBoletin(notas);