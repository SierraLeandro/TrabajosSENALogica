// 8. En un montallantas se ofrece un descuento del 20% sobre el valor de cada llanta si
// el número de llantas no supera las 10, de lo contrario tiene un descuento del 50%.
// Se pide desarrollar un algoritmo que lea el número de llantas y el valor de cada
// llanta. Calcular el valor de la compra y el valor total después del descuento.

const numero_llantas=parseInt(prompt("Ingrese el número de llantas"));
const valor_llanta=parseFloat(prompt("Ingrese el valor de cada llanta"));   

if(numero_llantas<=10){
    const valor_compra=numero_llantas*valor_llanta;
    const descuento=valor_compra*0.2;   
    console.log(`El valor de la compra es: ${valor_compra}. El valor del descuento es: ${descuento}. El valor total a pagar es: ${valor_compra-descuento}`);
}
else{
    const valor_compra=numero_llantas*valor_llanta;
    const descuento=valor_compra*0.5;   
    console.log(`El valor de la compra es: ${valor_compra}. El valor del descuento es: ${descuento}. El valor total a pagar es: ${valor_compra-descuento}`);
}