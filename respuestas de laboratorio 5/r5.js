//  5. Leer un número. Descontarle el 67%. Imprima el número, el descuento y el número después del
//descuento.

const numero=parseFloat(prompt("Ingrese un número:"));
const descuento=numero*0.67;
const numero_Final=numero-descuento;

console.log(`El numero ingresado es: ${numero}`);
console.log(`El descuento del 67% es: ${descuento}`);
console.log(`El número después del descuento es: ${numero_Final}`);