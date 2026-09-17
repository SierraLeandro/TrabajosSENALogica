// 5. El mismo ejercicio anterior, pero ahora el rango esta entre A y B, deben tener en
// cuenta que si A es mayor que B, el programa debe enviar un error.
// CORREGIDO: faltaba leer el número y compararlo contra el rango A-B.

const A=parseInt(prompt("Ingrese el valor de A"));
const B=parseInt(prompt("Ingrese el valor de B"));
const numero5=parseInt(prompt("Ingrese un número"));

if(A>B){
    console.log("Error: A es mayor que B");
}
else if(numero5>=A && numero5<=B){
    console.log(`El número ${numero5} está comprendido entre ${A} y ${B}`);
}
else{
    console.log(`El número ${numero5} no está comprendido entre ${A} y ${B}`);
}