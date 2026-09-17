// 20. La banda ancha incrementó la velocidad de transferencia de datos en Internet en
// un 230%. Imprima la velocidad anterior y la velocidad actual, teniendo en cuenta
// que un equipo tiene banda ancha y otro no. Leer si tiene banda ancha o no un
// computador y tenga en cuenta que si no la tiene el incremento es 0.
// CORREGIDO: faltaba el caso "no", donde según el enunciado el incremento debe
// ser 0 (velocidad actual = velocidad anterior).

const tiene_banda_ancha=prompt("¿El computador tiene banda ancha? (si/no)");

if(tiene_banda_ancha.toLowerCase()=="si"){
    const velocidad_anterior=parseFloat(prompt("Ingrese la velocidad anterior de transferencia de datos en Mbps"));
    const velocidad_actual=velocidad_anterior*3.3;
    console.log(`La velocidad anterior es: ${velocidad_anterior} Mbps. La velocidad actual es: ${velocidad_actual} Mbps`);
}
else{
    const velocidad_anterior=parseFloat(prompt("Ingrese la velocidad anterior de transferencia de datos en Mbps"));
    const velocidad_actual=velocidad_anterior; // incremento 0
    console.log(`La velocidad anterior es: ${velocidad_anterior} Mbps. La velocidad actual es: ${velocidad_actual} Mbps`);
}