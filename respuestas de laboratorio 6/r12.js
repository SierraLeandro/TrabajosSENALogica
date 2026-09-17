// 12. El peso de un vehículo (en toneladas) se redujo en un 15% luego de hacerle unas
// reparaciones. Se pide calcular el peso actual luego de la reducción. Por último se
// pide calcular el equivalente en kilogramos y en gramos de ese peso actual. Si la
// reducción es mayor a 31⁄2 toneladas imprima un mensaje “El vehículo quedó
// liviano”.
// CORREGIDO: "peso_actual" ya estaba declarado en el ejercicio 7 (mismo scope,
// const duplicado = SyntaxError). Se renombró a "peso_actual12".

const peso_vehiculo=parseFloat(prompt("Ingrese el peso del vehículo en toneladas"));
const peso_reduccion=peso_vehiculo*0.15;
const peso_actual12=peso_vehiculo-peso_reduccion;
const peso_kilogramos=peso_actual12*1000;
const peso_gramos=peso_kilogramos*1000;

if(peso_reduccion>3.5){
    console.log(`El peso actual del vehículo es: ${peso_actual12} toneladas. El peso en kilogramos es: ${peso_kilogramos} kg. El peso en gramos es: ${peso_gramos} g. El vehículo quedó liviano`);
}
else{
    console.log(`El peso actual del vehículo es: ${peso_actual12} toneladas. El peso en kilogramos es: ${peso_kilogramos} kg. El peso en gramos es: ${peso_gramos} g.El vehículo no esta liviano`);
}   