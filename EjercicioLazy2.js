//Ejercicio 1Analizar de sensores
const lecturasSensor = Object.freeze([
     { id: 1, tempC: 150, estado: "estable" },
     { id: 2, tempC: 850, estado: "estable" },
     { id: 3, tempC: 920, estado: "mantenimiento" },
     { id: 4, tempC: 120, estado: "estable" },
     { id: 5, tempC: 1100, estado: "estable" },
     { id: 6, tempC: 1300, estado: "crítico" }
]);
//predicados
const esTemperaturaCritica = lecturaSensor => lecturaSensor.tempC >= 850;
const estaEnOperacion = lecturaSensor => lecturaSensor.estado == "estable";
//composision logica
const detectarAnomalia = lecturaSensor => esTemperaturaCritica(lecturaSensor) && estaEnOperacion (lecturaSensor);
//funcion perezosa
function* analizarSensores(iterable, predicado){
    for( let lecturaSensor of iterable){
        if(predicado(lecturaSensor)){
            yield {id: lecturaSensor.id, temperaturaFahrenheit:(lecturaSensor.tempC * 9/5)+32};
        }
    }
}
//consulta
const alertasSensor = analizarSensores(lecturasSensor, detectarAnomalia);
//alertas
const primeraAlerta= alertasSensor.next().value;
const segundaAlerta =alertasSensor.next().value;

console.log("Primera alerta:", primeraAlerta);
console.log("Segunda alerta:", segundaAlerta);

//Ejercicio 2 Streaming de video
const chunksVideo = Object.freeze([
     { n: 1, sizeMb: 4, codec: "h264" },
     { n: 2, sizeMb: 25, codec: "raw" },
     { n: 3, sizeMb: 12, codec: "h265" },
     { n: 4, sizeMb: 40, codec: "raw" },
     { n: 5, sizeMb: 50, codec: "webm" }
]);
//Predicados
const esFragmentoPesado = fragmentoVideo => fragmentoVideo.sizeMb >= 20;
const esFormatoNoOptimizado = fragmentoVideo => fragmentoVideo.codec == "raw";

//composicion logica
const requiereCompresion =fragmentoVideo => esFragmentoPesado(fragmentoVideo) && esFormatoNoOptimizado(fragmentoVideo);

//funcion Peresosa
function* procesarVideo(iterable, predicado){
    for(let fragmentoVideo of iterable){
        if(predicado (fragmentoVideo)){
            yield{ numero: fragmentoVideo.n, tamanioReducido: fragmentoVideo.sizeMb / 2, codec: fragmentoVideo.codec};
        }
    }
}
//consulta
const fragmentosReducidos = procesarVideo(chunksVideo, requiereCompresion);

const primerFragmento = fragmentosReducidos.next().value;
const segundoFragmento = fragmentosReducidos.next().value;

console.log("Primer fragmento:", primerFragmento);
console.log("segunddo Fragmento:", segundoFragmento);

//Ejercicio 3 Sistema maritimo de carga
const aduanaPuerto = Object.freeze([
     { manifiesto: "C-01", destino: "Rotterdam", pesoToneladas: 12 },
     { manifiesto: "C-02", destino: "Tokio", pesoToneladas: 45 },
     { manifiesto: "C-03", destino: "Rotterdam", pesoToneladas: 60 },
     { manifiesto: "C-04", destino: "Rotterdam", pesoToneladas: 18 },
     { manifiesto: "C-05", destino: "Lisboa", pesoToneladas: 22 }
]);
//predicados
const esDestinoRotterdam = contenedor => contenedor.destino == "Rotterdam";
 const esPesoPermitido = contenedor => contenedor.pesoToneladas <= 20;

 //composision logica
 const contenedorApto = contenedor => esDestinoRotterdam(contenedor) && esPesoPermitido(contenedor);

 //funcion perezosa
 function* escanearContenedores(iterable, predicado){
    for(let contenedor of iterable){
        if(predicado(contenedor)){
            yield contenedor;
        }
    }
 }
 //consulta
 const contenedoresAptos = escanearContenedores(aduanaPuerto, contenedorApto);

 const primerContenedor = contenedoresAptos.next().value;
 const segundoContenedor = contenedoresAptos.next().value;

 console.log ("Primer contenedor:", primerContenedor);
 console.log("segundoContenedor:", segundoContenedor);

 //calculo de peso total
 const pesoTotal = [primerContenedor, segundoContenedor].reduce((acumulador, contenedor)=> acumulador+ contenedor.pesoToneladas,0);
 console.log("Peso total:", pesoTotal);