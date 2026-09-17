// 17. Calcule el promedio de goles anotados por un jugador en 4 encuentros, sólo si la
// suma de éstos es superior a 20.

const goles1=parseInt(prompt("Ingrese los goles anotados en el primer encuentro"));
const goles2=parseInt(prompt("Ingrese los goles anotados en el segundo encuentro"));
const goles3=parseInt(prompt("Ingrese los goles anotados en el tercer encuentro"));
const goles4=parseInt(prompt("Ingrese los goles anotados en el cuarto encuentro"));

const suma_goles=goles1+goles2+goles3+goles4;

if(suma_goles>20){
    const promedio_goles=suma_goles/4;
    console.log(`El promedio de goles anotados es: ${promedio_goles}`);
}