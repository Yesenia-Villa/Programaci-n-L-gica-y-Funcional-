const llenadoTanque=Object.freeze([
    "01 Magna",
    "02  Premium",
    "03 Magna",
    "04 Premium",
    "05 Premium"
]);

//Definir la regla o predicado
const esPrimum=id=>id.includes("Premium");
//Definir  la funcion 
function* filtrarTipo(iterable, predicado){
    for(let gasolina of iterable){
        /* console.log ("Analiza el arreglo:", gasolina) */
        if (predicado(gasolina)){
            yield gasolina;
        }
    }
}
//Definir la consulta
const bombadeCarga=filtrarTipo(llenadoTanque, esPrimum);
//Mostrar en pantalla
const premium=bombadeCarga.next().value;
console.log("Tipo gas:", premium);
console.log("Tipo gas:", premium);