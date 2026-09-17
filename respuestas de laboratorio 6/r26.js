// 26. Goku es un personaje de anime que tiene la particularidad que puede
// transformarse y aumentar su nivel de pelea luego de determinados
// entrenamientos. Desarrolle un algoritmo que lea el nivel de pelea antes de una
// transformación que aumentó su nivel de pela en un 300%. Imprimir su nivel de
// pelea actual y su aumento, sólo si el nivel final es mayor a 5000.

let nivel = parseFloat(prompt("Ingrese el nivel de pelea inicial"));

let aumento = nivel * 3;
let nivelFinal = nivel + aumento;

if (nivelFinal > 5000) {
    console.log("Aumento: " + aumento);
    console.log("Nivel de pelea actual: " + nivelFinal);
}