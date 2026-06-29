//combinar programacion Lazy con funcional
//Definir los predicados atomicos
const esPar=n=>n%2===0;
const multiploCinco=n=>n%5===0;
//Definir la funcion 
function*filtrarNumeros(iterable, predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato;
        }
    }
}

function* generarNumeros(){
    let i=0;
    while (true) yield i++;
}

//Generar los numeros a traves de una variable
const numerosAleatorios=generarNumeros();
const generarPares=filtrarNumeros(numerosAleatorios,esPar);
console.log("Primer numero par:" , generarPares.next().value)
console.log("Segundor numero par:" , generarPares.next().value)
console.log("Tercer numero par:" , generarPares.next().value)

const numerosAleatorios2=generarNumeros();
const multiplo=filtrarNumeros(numerosAleatorios2,multiploCinco);
console.log("Multiplo:" ,multiplo.next().value)
console.log("Multiplo:" ,multiplo.next().value)
console.log("Multiplo:" ,multiplo.next().value)