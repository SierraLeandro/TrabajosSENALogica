// Leer las notas de 5 aprendices en escala de 0 a 5. Si una nota está fuera del rango, se vuelve a
// pedir hasta que sea válida. Mostrar todas las notas separadas por comas, el promedio con un
// decimal y si el grupo aprobó (promedio mayor o igual a 3.0).

const leerNotas = (cantidad) => {

    let notas = [];

    for (let i = 0; i < cantidad; i++) {

        let nota = Number(prompt(`Digite la nota ${i + 1}:`));

        while (nota < 0) {
            nota = Number(prompt("Nota inválida. Digite una nota entre 0 y 5:"));
        }

        while (nota > 5) {
            nota = Number(prompt("Nota inválida. Digite una nota entre 0 y 5:"));
        }

        notas.push(nota);
    }

    return notas;
};


const calcularPromedio = (notas) => {

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    return suma / notas.length;
};


const unirConComas = (notas) => {

    let texto = "";

    for (let i = 0; i < notas.length; i++) {

        texto = texto + notas[i];

        if (i < notas.length - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
};


const mostrarResultado = (notas, promedio) => {

    console.log(`Notas: ${unirConComas(notas)}`);
    console.log(`Promedio: ${promedio.toFixed(1)}`);

    if (promedio >= 3) {
        console.log("El grupo aprobó");
    } else {
        console.log("El grupo no aprobó");
    }
};


let notas = leerNotas(5);

let promedio = calcularPromedio(notas);

mostrarResultado(notas, promedio);