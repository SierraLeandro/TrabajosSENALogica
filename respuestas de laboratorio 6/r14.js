// 14. Leer la nota de un estudiante (en números enteros) e imprimir su equivalente en
// letras sabiendo que si la nota es 5 su equivalente es EXCELENTE, 4 es BUENO, 3 es
// ACEPTABLE, 2 INSUFICIENTE y 1 DEFICIENTE.

const nota=parseInt(prompt("Ingrese la nota del estudiante"));

if(nota==5){
    console.log("EXCELENTE");
}
else if(nota==4){
    console.log("BUENO");
}
else if(nota==3){
    console.log("ACEPTABLE");
}
else if(nota==2){
    console.log("INSUFICIENTE");
}
else if(nota==1){
    console.log("DEFICIENTE");
} 