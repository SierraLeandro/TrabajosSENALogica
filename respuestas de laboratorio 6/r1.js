// 1. Desarrolle un algoritmo que lea el valor del pasaje y el número de pasajeros que
// abordarán un microbús. Calcular el valor total a pagar. Además, imprima un
// mensaje que diga si tiene sobre cupo o no. Tenga en cuenta que a un microbús le
// caben 20 pasajeros.

const valor_pasaje=parseFloat(prompt("Ingrese el valor del pasaje"));
const numero_pasajeros=parseInt(prompt("Ingrese el número de pasajeros"));  
const valor_total=valor_pasaje*numero_pasajeros;

if(numero_pasajeros>20){
    console.log(`El valor total a pagar es: ${valor_total}. Tiene sobre cupo`);
}
else{
    console.log(`El valor total a pagar es: ${valor_total}. No tiene sobre cupo`);
}
