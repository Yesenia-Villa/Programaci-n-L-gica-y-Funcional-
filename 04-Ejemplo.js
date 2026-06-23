const datos={
    nombre:"Dany",
    edad:40,
    ciudad:"Balancan",
    intereses:["React","JS"]
};

//Ocultar propiedades
Object.defineProperty(datos,"edad",{enumerable:false});
console.log(Object.keys(datos));
console.log(Object.getOwnPropertyNames(datos))




function deepFreeze(obj){
    //validar que sea un objeto 
    if(obj===null || typeof obj !=='object' || Object.isFrozen(Object)){
        return obj;
    }
    //Obtener todo el objeto
    const propiedadesObjeto=Object.getOwnPropertyNames(obj);
    //Recorrer cada una de las propiedades
    for(let nombres of propiedadesObjeto ){
        const propoedadesHijo=obj[nombres]

        //Aplicamos la funcion recursiva
        if(propoedadesHijo && typeof propiedadHijo==='object'){
            deepFreeze(propoedadesHijo)
        }
        
    }
    //congelamos todo el objeto con sus hijos
    return Object.freeze(obj)
}

//Pasar el objeto a la funcion recursiva
const datosInmutables=deepFreeze(datos);
const nuevoNombre=datosInmutables.ciudad="Tenosique";
const nuevoInteres=datosInmutables.intereses.push("Java");

console.log(nuevoNombre);
console.log(nuevoInteres);
