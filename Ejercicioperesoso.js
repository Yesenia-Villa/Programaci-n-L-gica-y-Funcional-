//1. Ejercicio . Generador de ID únicos para una base de datos. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) ---  
function* generarIds() {   
for (let i = 1; i <= 100; i++) { 
yield `TEC-2026-${i}`;  
  }   
} 
const ids= generarIds();
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

//2. Ejercicio. Paginación infinita, al hacer scroll, se va cargando de 3 en 3. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
const dbPosts = [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4", 
    "Post 5",
    "Post 6"]; 
function * obtenerTodoElFeed(posts) { 
    for (let p of posts){
yield `<html>${p}</html> `; 
    }
} 
const postsLeidos = obtenerTodoElFeed(dbPosts);
console.log(postsLeidos.next().value); 
console.log(postsLeidos.next().value); 
console.log(postsLeidos.next().value); 

//3. Ejercicio. Buscador de errores críticos en logs de un servidor. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
const logsServidor = [ "200 OK",
     "200 OK",
      "500 ERROR", 
      "200 OK", 
      "500 ERROR", 
      "404 NOT FOUND"]; 
function* buscarTodosLosErrores(logs) { 
    for (let log of logs){
        if (log.includes("500")){
            yield log;
           }
        }
    }
    const errores =buscarTodosLosErrores(logsServidor);
    console.log(errores.next().value);
    console.log(errores.next().value);

//4. Generador de la serie de Fibonacci. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
function* serieFibonacciEager(limite) { 
let a = 0; 
let b = 1;
let contador = 0;

while (contador <limite){
    yield a;
    let siguiente = a + b;
    a = b;
    b = siguiente;
    contador++;
  }
}
const secuencia = serieFibonacciEager(10);
console.log (secuencia.next().value);
console.log (secuencia.next().value);
console.log (secuencia.next().value);
console.log (secuencia.next().value);
console.log (secuencia.next().value);


//5. Simulador de carrito de compras: Tienes un lote inmenso de productos y quieres aplicarles un IVA o descuento, pero el cliente en caja va pagando uno por uno de forma síncrona. 
// --- CÓDIGO INICIAL (A TRANSFORMAR) --- 
const preciosAlmacen = [100,
    200,
    300,
    400, 
    500]; 
function* aplicarIvaATodo(precios) { 
for(let precio of precios) { 

yield precio * 1.16;
   } 
}
const procesado =aplicarIvaATodo(preciosAlmacen);
console.log(procesado.next().value);
console.log(procesado.next().value);
console.log(procesado.next().value);