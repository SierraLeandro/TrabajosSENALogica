// 19. Calcular el número de días y horas vividos por una persona de la cual se desconoce
// su año de nacimiento. Sólo si el año de nacimiento es anterior al año 2000.

const año_nacimiento=parseInt(prompt("Ingrese su año de nacimiento"));

if(año_nacimiento<2000){
    const año_actual=new Date().getFullYear();
    const edad=año_actual-año_nacimiento;
    const dias_vividos=edad*365;
    const horas_vividas=dias_vividos*24;
    console.log(`Usted ha vivido ${dias_vividos} días y ${horas_vividas} horas`);
}