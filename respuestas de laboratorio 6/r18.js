// 18. Desarrolle un algoritmo que dé solución a la ecuación contable ACTIVO = PASIVO +
// PATRIMONIO. Además, imprima si la empresa tiene saldo en cero, tiene perdida o
// tiene alguna ganancia.

const activo=parseFloat(prompt("Ingrese el valor del activo"));
const pasivo=parseFloat(prompt("Ingrese el valor del pasivo"));
const patrimonio=parseFloat(prompt("Ingrese el valor del patrimonio"));

const saldo=activo-(pasivo+patrimonio);

if(saldo==0){
    console.log("La empresa tiene saldo en cero");
}
else if(saldo<0){
    console.log("La empresa tiene perdida");
}
else if(saldo>0){
    console.log("La empresa tiene ganancia");
}