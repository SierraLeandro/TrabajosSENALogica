// 11. Calcular el peso equivalente en Gramos de una fruta que tiene un peso no
// conocido en Kilogramos, sólo si el peso sobrepasa los 5 kilogramos, de lo contrario
// calcular el equivalente en onzas. 16 onzas son una libra. 2 libras son 1 kilogramo.
// Un kilogramo son 1000 gramos.

const peso_fruta=parseFloat(prompt("Ingrese el peso de la fruta en kg"));

if(peso_fruta>5){
    const peso_gramos=peso_fruta*1000;
    console.log(`El peso de la fruta en gramos es: ${peso_gramos}`);
}
else{
    const peso_onzas=peso_fruta*35.274;
    console.log(`El peso de la fruta en onzas es: ${peso_onzas}`);
}