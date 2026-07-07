//Tabla de hechos
const historialCommits = [
    { version: 1.0, ambiente: "desarrollo" },
    { version: 1.1, ambiente: "desarrollo" },
    { version: 1.2, ambiente: "testing" },
    { version: 1.3, ambiente: "testing" },
    { version: 2.0, ambiente: "produccion" },
    { version: 2.1, ambiente: "produccion" },
    { version: 2.2, ambiente: "produccion" }
];

//Predicado 
const esProduccion = comit => comit.ambiente == 'produccion';
//funcion busqueda binaria
function buscarPrimeraProduccion(iterable, predicado){
    //Primer elemento
    let izquierda = 0;
    //ultimo elemento
    let derecha = iterable.length -1;
    //guardar posision encontrada
    let posicion = -1;
    //elementos por revisar
    while(izquierda <= derecha){
    //calcula punto medio
    let medio = Math.floor((izquierda + derecha)/2);
    console.log ("Evaluando version:", iterable[medio].version);
    //verifica si pertenece a produccion
    if(predicado(iterable[medio])){
    //Guardar la posicion
    posicion = medio;
    //Buscar si existe alguna otra posision a la derecha o izquierda
    derecha = medio -1; }else{ izquierda = medio +1;
        }
    }
    //regresa la posision encontrada
    return posicion;
}
//funcion
const primerCommit = buscarPrimeraProduccion (historialCommits, esProduccion);
//resultado
if (primerCommit != -1){
    
    console.log("Primer commit en produccion:", historialCommits[primerCommit]);
}