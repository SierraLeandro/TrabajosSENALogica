// Leer una frase, pasarla a minúsculas y separarla en palabras con split(" "). Contar cuántas
// veces aparece cada palabra usando un objeto. Mostrar cada palabra con su conteo en el orden
// en que apareció por primera vez, cuántas palabras distintas hay y cuál es la más repetida. Si
// hay empate, gana la que apareció primero.

function contarClaves(objeto) {
  let cantidad = 0;
  for (let clave in objeto) {
    cantidad++;
  }
  return cantidad;
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

function contarPalabras(frase) {
  let palabras = frase.toLowerCase().split(" ");
  let contador = {};
  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    if (palabra in contador) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  }
  return contador;
}

let frase = prompt("Frase:");
let contador = contarPalabras(frase);

for (let palabra in contador) {
  console.log(palabra + ": " + contador[palabra]);
}

let masRepetida = buscarClaveMayor(contador);
console.log("Palabras distintas: " + contarClaves(contador));
console.log("Más repetida: " + masRepetida + " (" + contador[masRepetida] + " veces)");