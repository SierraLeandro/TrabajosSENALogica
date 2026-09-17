//4. Haga un algoritmo que calcule el 80% del cuadrado de la suma de dos números. Y el 5% del doble
//del triple de la mitad de la suma de los mismos números.

const N1=parseFloat(prompt("Ingrese el primer número:"));
const N2=parseFloat(prompt("Ingrese el segundo número:"));

const suma=N1+N2;
const porcentaje1=Math.pow(suma,2)*0.8;
const porcentaje2=(suma*2*3/2)*0.05;

console.log(`El 80% del cuadrado de la suma de ${N1} y ${N2} es: ${porcentaje1}`);
console.log(`El 5% del doble del triple de la mitad de la suma de ${N1} y ${N2} es: ${porcentaje2}`);