// 9. Calcular el salario neto de un empleado sabiendo que se le hace una retención del
// 3% para pensión y 5% para salud si su salario básico no llega a los $400.000, si este
// es mayor a $800.000 los porcentajes serán del 4% para pensión y 7% para salud; en
// caso contrario los porcentajes serán 9% y 7% respectivamente. Se debe leer el
// valor de cada hora y el número de horas trabajadas por el empleado.

const valor_hora9=parseFloat(prompt("ingrese el valor de cada hora trabajada"));
const numero_horas9=parseInt(prompt("ingrese el número de horas trabajadas"));
const salario_basico9=valor_hora9*numero_horas9;   

if(salario_basico9<400000){
    const retencion_pension=salario_basico9*0.03;
    const retencion_salud=salario_basico9*0.05;
    const retencion_total=retencion_pension+retencion_salud;
    const salario_neto=salario_basico9-retencion_total;
    console.log(`El salario básico es: ${salario_basico9}. La retención para pensión es: ${retencion_pension}. La retención para salud es: ${retencion_salud}. El salario neto es: ${salario_neto}`);
}   
else if(salario_basico9>800000){
    const retencion_pension=salario_basico9*0.04;
    const retencion_salud=salario_basico9*0.07;
    const retencion_total=retencion_pension+retencion_salud;
    const salario_neto=salario_basico9-retencion_total;
    console.log(`El salario básico es: ${salario_basico9}. La retención para pensión es: ${retencion_pension}. La retención para salud es: ${retencion_salud}. El salario neto es: ${salario_neto}`);
}
else{
    const retencion_pension=salario_basico9*0.09;
    const retencion_salud=salario_basico9*0.07;
    const retencion_total=retencion_pension+retencion_salud;
    const salario_neto=salario_basico9-retencion_total;
    console.log(`El salario básico es: ${salario_basico9}. La retención para pensión es: ${retencion_pension}. La retención para salud es: ${retencion_salud}. El salario neto es: ${salario_neto}`);
}