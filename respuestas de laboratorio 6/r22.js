// 22. Un tendero empezó el día con un Valor X en dinero. Luego tuvo 4 ventas por un
// valor de $800.000 y finalmente pagó a sus acreedores el 10% de todo lo que tenía
// en caja. Imprima el dinero con el que empezó, el dinero con el que terminó y el
// pago a sus acreedores. Imprima si se le pagó a proveedores más de $50.000 o no.

const dinero_inicial=parseFloat(prompt("Ingrese el valor inicial en dinero del tendero"));
const ventas=800000;
const dinero_final=dinero_inicial+ventas;
const pago_acreedores=dinero_final*0.1;

if(pago_acreedores>50000){
    console.log(`El dinero con el que empezó es: ${dinero_inicial}. El dinero con el que terminó es: ${dinero_final}. El pago a sus acreedores fue de: ${pago_acreedores}. Se le pagó a proveedores más de $50.000`);
}
else{
    console.log(`El dinero con el que empezó es: ${dinero_inicial}. El dinero con el que terminó es: ${dinero_final}. El pago a sus acreedores fue de: ${pago_acreedores}. No se le pagó a proveedores más de $50.000`);
}