// 24. Resolver la siguiente ecuación Aux = i (n-3) / n2+x

let n = parseFloat(prompt("Ingrese el valor de n"));
let x = parseFloat(prompt("Ingrese el valor de x"));

let aux = (n - 3) / (n ** 2 + x);

console.log("El resultado es: " + aux);