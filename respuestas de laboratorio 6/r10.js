// 10. Calcular e imprimir el salario básico, el salario neto y cada uno de los porcentajes
// que tiene un empleado en su liquidación de nómina. Tenga en cuenta que recibe
// un auxilio de alimentación del 1% del salario básico y un subsidio de transporte de
// $45.000 si su salario no asciende a $300.000, sino no tendrá auxilio de
// alimentación y el subsidio de transporte será de $25.000. Luego se le hacen unas
// deducciones correspondientes al 1.5%, 28.1% y 0.55% por concepto de salud,
// pensión y aportes parafiscales respectivamente. Luego de calculado el salario neto,
// se pide sacar un 0.05% del salario neto para una donación a una catástrofe.

const valor_hora10=parseFloat(prompt("ingrese el valor de cada hora trabajada"));
const numero_horas10=parseInt(prompt("ingrese el número de horas trabajadas"));
const salario_basico10=valor_hora10*numero_horas10; 
const retencion_salud10=salario_basico10*0.015;  
const retencion_pension10=salario_basico10*0.281;
const retencion_aportes10=salario_basico10*0.0055;

const retencion_total10=retencion_pension10+retencion_salud10+retencion_aportes10;

if(salario_basico10<=300000){
    const auxilio_alimentacion=salario_basico10*0.01;
    const subsidio_transporte=45000;
    const salario_neto=salario_basico10+auxilio_alimentacion+subsidio_transporte-retencion_total10;
    const donacion=salario_neto*0.0005;
    console.log(`El salario básico es: ${salario_basico10}. La retención_total es: ${retencion_total10}. El auxilio de alimentación es: ${auxilio_alimentacion}. El subsidio de transporte es: ${subsidio_transporte}. El salario neto es: ${salario_neto}. La donación es: ${donacion}`);
}   
else{
    const auxilio_alimentacion=0;
    const subsidio_transporte=25000;
    const salario_neto=salario_basico10+auxilio_alimentacion+subsidio_transporte-retencion_total10;
    const donacion=salario_neto*0.0005;
    console.log(`El salario básico es: ${salario_basico10}. La retención_total es: ${retencion_total10}. El auxilio de alimentación es: ${auxilio_alimentacion}. El subsidio de transporte es: ${subsidio_transporte}. El salario neto es: ${salario_neto}. La donación es: ${donacion}`);
}