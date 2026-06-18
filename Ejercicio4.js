const clientes = [
    { nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
    { nombre: 'María', historialLimpio: true, ingresosEstables: false },
    { nombre: 'Jorge', historialLimpio: false, ingresosEstables: true }
];


// Reglas

function ClienteBlack(nombre){return clientes.some(cliente => cliente.nombre === nombre && cliente.historialLimpio === true &&cliente.ingresosEstables === true
);
}

function ClienteSeguro(nombre){return clientes.some(cliente => cliente.nombre === nombre && !(cliente.historialLimpio === false &&cliente.ingresosEstables === false)
);
}


// 1. Tarjeta Black
const tarjetaBlack = clientes.filter(cliente => cliente.historialLimpio === true && cliente.ingresosEstables === true
);
console.log(tarjetaBlack);


// 2. Programa de reactivación
const reactivacion = clientes.filter(cliente => cliente.historialLimpio === false || cliente.ingresosEstables === false
);
console.log(reactivacion);


// 3. Riesgo medio
const riesgoMedio = clientes.filter(cliente => cliente.ingresosEstables === true && cliente.historialLimpio === false
);
console.log(riesgoMedio);


// 4. Riesgo crítico
const riesgoCritico = clientes.some(cliente => cliente.historialLimpio === false && cliente.ingresosEstables === false
);
console.log(riesgoCritico);


// 5. Certificación internacional
const certificacion = clientes.every(cliente => !(cliente.historialLimpio === false && cliente.ingresosEstables === false)
);
console.log(certificacion);


