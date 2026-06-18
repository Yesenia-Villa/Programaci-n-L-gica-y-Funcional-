

const transacciones = [
    { id: 1, tipo: 'deposito', monto: 10000 },
    { id: 2, tipo: 'retiro', monto: 6000 },
    { id: 3, tipo: 'retiro', monto: 1500 },
    { id: 4, tipo: 'retiro', monto: 8000 }
];


// Reglas
const esRetiro = transaccion => transaccion.tipo === "retiro";
const altoRiesgo = transaccion => transaccion.monto > 5000;

//1. Filtrar solo las transacciones que sean de tipo "retiro" y superen los $5,000.
const retirosAlto = transacciones.filter(transaccion => esRetiro(transaccion) && altoRiesgo(transaccion));
console.log(retirosAlto);

//2 Aplicarles una tarifa/multa de penalización del 5% por movimiento de alto riesgo
const transPenalizadas = retirosAlto.map(transaccion => ({...transaccion, multa: transaccion.monto * 0.05}));
console.log(transPenalizadas);

//3 Calcular el monto total de dinero penalizado que el banco recaudará.
const montoTotal = transPenalizadas.reduce((a, transaccion) => a + transaccion.multa, 0);
console.log( montoTotal);
