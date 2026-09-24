const multiplicar1 = parseInt(prompt("Ingrese un número: "));
let resultado = "";

const CalcularLineaTabla = (Multiplicar1 , Multiplicar2)=>{
 let Proceso = (Multiplicar1 * Multiplicar2);
 return `${Multiplicar1} x ${Multiplicar2} = ${Proceso}\n`;
 
}

for(let i=1; i<=10 ; i++){
    resultado += CalcularLineaTabla(multiplicar1 , i);
}
console.log(resultado);