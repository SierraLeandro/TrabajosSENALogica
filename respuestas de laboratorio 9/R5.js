// El programa arranca con este objeto:
// let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };
// Mostrar cada materia con su nota, el promedio con un decimal, la materia con mejor nota y las
// materias por reforzar (nota menor a 3.5). Las funciones deben seguir funcionando si agregas
// una quinta materia sin tocarlas.

function contarClaves(objeto) {
  let cantidad = 0;
  for (let clave in objeto) {
    cantidad++;
  }
  return cantidad;
}

function calcularPromedioObjeto(objeto) {
  let suma = 0;
  for (let clave in objeto) {
    suma += objeto[clave];
  }
  return suma / contarClaves(objeto);
}

function buscarClaveMayor(objeto) {
  let claveMayor = undefined;
  for (let clave in objeto) {
    if (claveMayor === undefined || objeto[clave] > objeto[claveMayor]) {
      claveMayor = clave;
    }
  }
  return claveMayor;
}

function filtrarClavesMenores(objeto, limite) {
  let claves = [];
  for (let clave in objeto) {
    if (objeto[clave] < limite) {
      claves.push(clave);
    }
  }
  return claves;
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
  for (let materia in notas) {
    console.log(materia + ": " + notas[materia]);
  }
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