//10. La temperatura de hoy tuvo una disminución del 5% en la mañana, y en la tarde aumento un 40%
//luego de realizada esa disminución. Determinar y la temperatura actual.

const temperatura_Hoy=parseFloat(prompt("ingresar la temperatura de hoy"));
const disminuyo=temperatura_Hoy*0.05;
const aumento=temperatura_Hoy*0.4;
const temperatura_Actual=temperatura_Hoy-disminuyo+aumento;

console.log(`La disminución de la temperatura es: ${disminuyo}`);
console.log(`El aumento de la temperatura es: ${aumento}`);
console.log(`La temperatura actual es: ${temperatura_Actual}`);