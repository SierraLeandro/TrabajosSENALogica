const generarNumeroSecreto = (minimo, maximo) => {
  return Math.floor(Math.random() * maximo) + minimo;
};

const evaluarIntento = (intento, secreto) => {

  if (intento === secreto) {
    return "correcto";
  } else if (intento > secreto) {
    return "mayor";
  } else {
    return "menor";
  }
};

const secreto = generarNumeroSecreto(1, 100);

let intento = 0;
let intentos = 0;
let resultado = "";

while (intentos < 7 && resultado !== "correcto") {

  intentos++;

  intento = parseInt(prompt(`Intento ${intentos}: `));

  resultado = evaluarIntento(intento, secreto);

  if (resultado === "correcto") {
    console.log(`¡Adivinaste en ${intentos} intentos!`);
  } else if (resultado === "mayor") {
    console.log("El número secreto es menor");
  } else {
    console.log("El número secreto es mayor");
  }
}

if (resultado !== "correcto") {
  console.log(`Perdiste. El número secreto era: ${secreto}`);
}