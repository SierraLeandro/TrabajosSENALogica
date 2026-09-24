function convertirAKelvin(celsius) {
    return celsius + 273.15;
}

function convertirAFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let cantidadDias = Number(prompt("¿Cuántos días?:"));
let sumaTemperaturas = 0;

for (let dia = 1; dia <= cantidadDias; dia++) {
    let celsius = Number(prompt(`Temperatura día ${dia} (°C):`));

    let kelvin = convertirAKelvin(celsius);
    let fahrenheit = convertirAFahrenheit(celsius);

    console.log(
        `Día ${dia}: ${celsius} °C = ${kelvin} K = ${fahrenheit} °F`
    );

    // Acumulamos la temperatura de cada día
    sumaTemperaturas += celsius;
}

let promedio = calcularPromedio(sumaTemperaturas, cantidadDias);

console.log(`Promedio: ${promedio} °C`);
