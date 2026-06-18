const servicios = [
{
 id: 1,
    nombre: "Autenticación",
    zona: "us-east",
    consultasPorMinuto: 12000,
    activo: true,
    tecnologias: ["Node", "Redis"]
},
{
    id: 2,
    nombre: "Procesamiento Pagos",
    zona: "us-west",
    consultasPorMinuto: 4500,
    activo: true,
    tecnologias: ["Java", "Spring"]
},
{
    id: 3,
    nombre: "Recomendaciones AI",
    zona: "us-east",
    consultasPorMinuto: 25000,
    activo: false,
    tecnologias: ["Python", "TensorFlow"]
},
{
    id: 4,
    nombre: "Notificaciones",
    zona: "eu-central",
    consultasPorMinuto: 8500,
    activo: true,
    tecnologias: ["Node", "RabbitMQ"]
},
{
    id: 5,
    nombre: "Reportes Históricos",
    zona: "us-west",
    consultasPorMinuto: 500,
    activo: false,
    tecnologias: ["Python", "MongoDB"]
}
];

//Predicados atomicos
const estaActivo = servicio => servicio.activo === true;

const ZonaUs = servicio => servicio.zona === "us-east" || servicio.zona === "us-west";

const altaCarga =servicio => servicio.consultasPorMinuto >= 10000;

const usaNode = servicio => servicio.tecnologias.includes("Node");


//composicion de reglas

//regla 1 el servicio no esta activo y es de alta carga
const requiereMantenimientoUrgente = servicio =>!estaActivo(servicio) && altaCarga(servicio);

//regla 2 el servicio esta activo y (OR corre en zona US OR es de alta carga
const esServicioCriticoUS = servicio => estaActivo(servicio) && (ZonaUs(servicio) || altaCarga(servicio));

//regla 3corre en zona Us y usa Node Pero debe ser de Alta Carga
const migrarAcloudflare =servicio =>ZonaUs(servicio) && usaNode(servicio) &&!altaCarga(servicio);


//Transformacion y metodos de orden superior Filtrar y Mapear
const serviciosCriticos = servicios .filter(esServicioCriticoUS) .map(servicio => servicio.nombre);
console.log(serviciosCriticos);
const servicioMantenimiento = servicios.filter(requiereMantenimientoUrgente).map(servicio => servicio.nombre);
console.log(servicioMantenimiento);

const serviciosCloudFlare = servicios.filter(migrarAcloudflare).map(servicio=> servicio.nombre);
console.log(serviciosCloudFlare);

//Reduce
const totalConsultas = servicio = servicios.filter(estaActivo).reduce((acumulador, servicio)=>acumulador + servicio.consultasPorMinuto, 0);
console.log(totalConsultas);
