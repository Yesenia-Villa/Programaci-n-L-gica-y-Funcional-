//Ejercicio 1 
const transacciones =  Object.freeze([
 { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
 { id: 102, tipo: 'retiro', monto: 15000, pais: 'Colombia' }, 
 { id: 103, tipo: 'retiro', monto: 12000, pais: 'México' },
 { id: 104, tipo: 'retiro', monto: 55000, pais: 'México' }, 
 { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
 { id: 106, tipo: 'retiro', monto: 75000, pais: 'Espana' } 
]);

const esRetiro = transaccion => transaccion.tipo == 'retiro';
const esMontoSOspe=transaccion => transaccion.monto >=50000;
const esZonaRiesgo = transaccion => !(transaccion.pais == 'México');
//regla
const alertaFraude = transaccion =>esRetiro(transaccion) && (esMontoSOspe(transaccion) || esZonaRiesgo(transaccion));

function* detectarFraudes(iterable, predicado){
    for(let transaccion of iterable){
        if (predicado(transaccion)){
            yield transaccion;
        }
    }
}
const alertasFraude= detectarFraudes(transacciones, alertaFraude);
console.log ("Primera alerta:", alertasFraude.next().value);
console.log ("Segunda alerta:", alertasFraude.next().value);


//Ejercico 2 Admision universitaria
const aspirantes = Object.freeze( [
 { nombre: 'Luis', examen: 90, entrevista: 80, estudioSocioeconomico: true }, 
 { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true }, 
 { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false }, 
 { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true }, 
 { nombre: 'Iván', examen: 90, entrevista: 90, estudioSocioeconomico: true } 
]);

const listaAspirantes =aspirantes.map(aspirante=>({...aspirante , puntajeFinal:(aspirante.examen*0.70)+ (aspirante.entrevista*0.30)
}));

const calificaParaBeca=aspirante=>aspirante.puntajeFinal>=85 && aspirante.estudioSocioeconomico;

function* obtenerBecados(iterable, predicado){
    for(let aspirante of iterable)
        if (predicado(aspirante)){
            yield aspirante;
        }
}
const generadorBecados=obtenerBecados(listaAspirantes, calificaParaBeca);
const primerBecado=generadorBecados.next().value;
const segundoBecado=generadorBecados.next().value;
console.log("Primer becado:", primerBecado);
console.log("Segundo becado:", segundoBecado);

const promedioPuntajes=[primerBecado, segundoBecado].reduce((acumulador, aspirante)=>acumulador + aspirante.puntajeFinal,0)/2;
console.log("Promediode puntaje:", promedioPuntajes);


//Ejercico 3 Despacho de inventarios
const paquetes =Object.freeze( [
 { tracking: 'ZA1', estado: 'Tabasco', peso: 20 },
 { tracking: 'ZA2', estado: 'Veracruz', peso: 18 },
 { tracking: 'ZA3', estado: 'Chiapas', peso: 5 },
 { tracking: 'ZA4', estado: 'Yucatán', peso: 25 }, 
 { tracking: 'ZA5', estado: 'Tabasco', peso: 10 },
 { tracking: 'ZA6', estado: 'Oaxaca', peso: 30 } 
]);
const esDestinoLocal =paquete=>paquete.estado=='Tabasco';
const esPesado=paquete=>paquete.peso>=15;

const envioPrioritariolocal =paquete=> !esDestinoLocal(paquete) && esPesado(paquete);
function* filtrarPaquetes(iterable, predicado){
    for(let paquete of iterable)
        if (predicado(paquete)){
            yield paquete;
        }
}

const paquetesPrioritarios = filtrarPaquetes(paquetes, envioPrioritariolocal);
console.log("Primer Paquete:", paquetesPrioritarios.next().value);
console.log("Segundo Paquete:", paquetesPrioritarios.next().value);