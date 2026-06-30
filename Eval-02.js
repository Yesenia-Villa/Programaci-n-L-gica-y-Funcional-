//Caso 1
function deepFreeze(Objeto){
    Object.freeze(Objeto);
    for(let propiedad in Objeto){
        if (typeof Objeto[propiedad] == "object" && Objeto[propiedad] !=null){
            deepFreeze(Objeto[propiedad]);
        }
    }
    return Objeto;
}
const peticionesHttp = [
 { id: "REQ-01", metodo: "GET", ipOrigen: "192.168.1.50", latenciaMs: 45, tamanioPayloadKb: 2, 
payload: "SELECT * FROM users" },
 { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 
1500, payload: "DROP TABLE users;--" }, 
 { id: "REQ-03", metodo: "GET", ipOrigen: "192.168.1.55", latenciaMs: 12, tamanioPayloadKb: 1, 
payload: "ping" },
 { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 
950, payload: "normal_profile_update" },
 { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 
1200, payload: "upload_heavy_image" }, 
 { id: "REQ-06", metodo: "GET", ipOrigen: "172.16.25.40", latenciaMs: 50, tamanioPayloadKb: 
500, payload: "exec MaliciousScript" } 
];

deepFreeze(peticionesHttp);
const esMetodoEscritura = peticion =>peticion.metodo =="POST";
const esLatenciaAlta = peticion => peticion.latenciaMs >= 2000;
const esPayloadSospechoso = peticion => peticion.payload.includes("DROP")|| peticion.payload.includes("SELECT")||peticion.payload.includes("MaliciousScript");

const detectarAmenazaPotencial = peticion => esMetodoEscritura(peticion) && (esLatenciaAlta(peticion) || esPayloadSospechoso(peticion));

function* analizadorSeguridadLazy(iterable, predicado){
    for(let peticion of iterable){
        if(predicado(peticion)){
         yield peticion;
        }
    }
}

const amenazasDetectadas = analizadorSeguridadLazy(peticionesHttp, detectarAmenazaPotencial);
const primeraAmenaza =amenazasDetectadas.next().value;
const segundaAmenza = amenazasDetectadas.next().value;

console.log("Primera amenza:", primeraAmenaza);
console.log("Segunda amenza:", segundaAmenza);

const promedioPayload = [primeraAmenaza, segundaAmenza].reduce((acumulador, peticion)=>acumulador+peticion.tamanioPayloadKb, 0)/2;
console.log("Promedio payload:", promedioPayload);



//Caso 2
function deepFreeze(objeto){
    Object.freeze(objeto);
    for(let propiedad in objeto){
        if (typeof objeto[propiedad] == "object" && objeto[propiedad] != null){
            deepFreeze(objeto[propiedad]);
        }
    }
    return objeto;
}
const ordenesEnvio = [
 { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4, distanciaKm: 8, asegurado: 
false },
 { id: "ORD-102", tipo: "express", destino: "Veracruz", pesoKg: 22, distanciaKm: 120, asegurado: 
true }, 
 { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15, asegurado: 
false },
 { id: "ORD-104", tipo: "express", destino: "Tabasco", pesoKg: 5, distanciaKm: 3, asegurado: false 
},
 { id: "ORD-105", tipo: "express", destino: "Yucatán", pesoKg: 18, distanciaKm: 250, asegurado: 
false }, 
 { id: "ORD-106", tipo: "express", destino: "Chiapas", pesoKg: 35, distanciaKm: 190, asegurado: 
true } 
];
deepFreeze(ordenesEnvio);
const esEnvioExpres = ordenEnvio => ordenEnvio.tipo == "express";
const esPaquetePesado = ordenEnvio => ordenEnvio.pesoKg >= 15;
const esRUtaForanea = ordenEnvio => !ordenEnvio.destino == "  Tabasco";
const esDespachoPrioritario =ordenEnvio => esEnvioExpres(ordenEnvio) && (esPaquetePesado(ordenEnvio)|| esRUtaForanea(ordenEnvio));

function* despachadorOrdenesLazy(iterable, predicado){
    for(let ordenEnvio of iterable){
        if(predicado(ordenEnvio)){
            yield ordenEnvio;
        }
    }
}
const ordenesPrioritarias=despachadorOrdenesLazy(ordenesEnvio, esDespachoPrioritario);
const primeraOrden=ordenesPrioritarias.next().value;
const segundaOrden=ordenesPrioritarias.next().value;
console.log("Primera Orden:", primeraOrden);
console.log("Segunda Orden:", segundaOrden);

const promedioDistancia = [primeraOrden, segundaOrden].reduce((acumulador, ordenEnvio)=> acumulador+ ordenEnvio.distanciaKm,0)/2;
console.log("Promedio de distancia:", promedioDistancia);


