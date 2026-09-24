function calcularHorasExtra(horas) {
    if (horas > 40) {
        return horas - 40;
    } else {
        return 0;
    }
}

function calcularSalarioSemanal(horas) {
    if (horas <= 40) {
        return horas * 12000;
    } else {
        let horasExtra = calcularHorasExtra(horas);
        let salarioNormal = 40 * 12000;
        let salarioExtra = horasExtra * 15000;

        return salarioNormal + salarioExtra;
    }
}

let cantidadObreros = Number(prompt("¿Cuántos obreros?:"));
let totalNomina = 0;

for (let obrero = 1; obrero <= cantidadObreros; obrero++) {
    let horas = Number(prompt(`Horas obrero ${obrero}:`));

    let salario = calcularSalarioSemanal(horas);

    console.log(`Obrero ${obrero}: ${salario}`);

    totalNomina += salario;
}

console.log(`Total nómina: ${totalNomina}`);
