function calcularInteres(saldo, porcentaje) {
    return saldo * porcentaje / 100;
}

function mostrarInversion(capital, meses) {
    let saldo = capital;

    for (let mes = 1; mes <= meses; mes++) {
        let interes = calcularInteres(saldo, 2);

        saldo = saldo + interes;

        console.log(`Mes ${mes}: ${saldo}`);
    }

    let gananciaTotal = saldo - capital;

    console.log(`Ganancia total: ${gananciaTotal}`);
}

let capital = Number(prompt("Capital inicial:"));
let meses = Number(prompt("Número de meses:"));

mostrarInversion(capital, meses);
