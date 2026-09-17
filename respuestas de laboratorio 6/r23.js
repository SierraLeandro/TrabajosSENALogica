// 23. Calcular el salario neto de empleado sabiendo que se le hace una retención del
// 25%. Imprima un mensaje que diga si gana más del mínimo, gana menos o gana el
// salario mínimo.

const salario=parseFloat(prompt("Ingrese el salario del empleado"));
const salario_neto=salario*0.75;

if(salario_neto>1000000){
    console.log(`El empleado gana más del salario mínimo`);
}
else if(salario_neto<1000000){
    console.log(`El empleado gana menos del salario mínimo`);
}
else{
    console.log(`El empleado gana el salario mínimo`);
}