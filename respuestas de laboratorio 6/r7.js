// 7. Una persona ingresa a un gimnasio pesando una cantidad desconocida. Luego de
// una sesión de trabajo redujo su peso en un 10%, posteriormente, asistió a una
// última sesión en la que rebajó 18.5%. En un período de 8 días de inactividad
// aumentó un 3% de su peso. Calcular e imprimir cada una de las disminuciones, el
// aumento y el peso actual de esa persona, además imprima si tiene sobrepeso o no.
// Nota: El límite es hasta 78 kg).

const peso_inicial=parseFloat(prompt("Ingrese su peso inicial en kg"));
const peso_reduccion1=peso_inicial*0.1;
const peso_reduccion2=(peso_inicial-peso_reduccion1)*0.185;
const peso_aumento=((peso_inicial-peso_reduccion1-peso_reduccion2)*0.03);
const peso_actual=peso_inicial-peso_reduccion1-peso_reduccion2+peso_aumento

console.log(`La primera reducción fue de: ${peso_reduccion1} kg`);
console.log(`La segunda reducción fue de: ${peso_reduccion2} kg`);
console.log(`El aumento fue de: ${peso_aumento} kg`);
console.log(`El peso actual es: ${peso_actual} kg`);

if(peso_actual>78){
    console.log("Tiene sobrepeso");
}   
else{
    console.log("No tiene sobrepeso");
}