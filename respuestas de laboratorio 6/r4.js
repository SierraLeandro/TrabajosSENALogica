// 4. Programa que lea un número por pantalla e indique si el número leído está
// comprendido entre 10 y 50.

const numero4=parseInt(prompt("Ingrese un número"));

if(numero4>=10 && numero4<=50){
    console.log(`El número ${numero4} está comprendido entre 10 y 50`);
}
else{
    console.log(`El número ${numero4} no está comprendido entre 10 y 50`);
}