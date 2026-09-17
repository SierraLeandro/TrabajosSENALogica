// 2. Leer nombre y estatura de una persona, Imprimir el nombre si su estatura es
// mayor a 165.

const nombre=prompt("Ingrese su nombre");
const estatura=parseFloat(prompt("Ingrese su estatura en cm"));

if(estatura>165){
    console.log(`Su nombre es: ${nombre}`);
}
