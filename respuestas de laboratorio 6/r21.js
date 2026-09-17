// 21. En una biblioteca se prestaron 457 libros en los últimos días. Calcular el número
// total de libros que hay en la actualidad sabiendo que al iniciar la biblioteca tenia Y
// libros, imprima si hay libros o no.

const libros_iniciales=parseInt(prompt("Ingrese el número de libros iniciales en la biblioteca"));
const libros_prestados=457;
const libros_actuales=libros_iniciales-libros_prestados;

if(libros_actuales>0){
    console.log(`El número total de libros en la actualidad es: ${libros_actuales}. Hay libros en la biblioteca`);
}
else{
    console.log(`El número total de libros en la actualidad es: ${libros_actuales}. No hay libros en la biblioteca`);
}