// 13. Leer la temperatura de un día (en grados centígrados). Imprimir un mensaje “HACE
// FRIO” si la temperatura es menor a 23°C, imprima “ES UN BUEN DÍA” si la
// temperatura es mayor e igual que 23°C e inferior a 30°C. En caso que la
// temperatura sea igual o superior a 30°C imprima “HACE CALOR”.
// CORREGIDO: la última condición "else if(temperatura<30)" nunca se cumplía
// (ese rango ya quedaba descartado por los if anteriores), por lo que "HACE CALOR"
// jamás se imprimía. Se cambió a un "else" simple.

const temperatura=parseFloat(prompt("Ingrese la temperatura del día en °C"));

if(temperatura<23){
    console.log("HACE FRIO");
}
else if(temperatura>=23 && temperatura<30){
    console.log("ES UN BUEN DÍA");
}
else{
    console.log("HACE CALOR");
}