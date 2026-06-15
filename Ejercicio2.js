const hechos = [
    { padre: "Juan", hijo: "Luis" },
    { padre: "Juan", hijo: "Pedro" },
    { padre: "Abraham", hijo: "Juan" }
];

//1.  Dos personas son hermanos si tenen el mismo padre y son personas diferentes. 
function SonHermanos(persona1, persona2){

    const hermanos = hechos.some(
        h1 => hechos.some(
            h2 =>
            h1.padre === h2.padre &&
            h1.hijo === persona1 &&
            h2.hijo === persona2 &&
            persona1 !== persona2
        )
    );

    return hermanos;
}

console.log(SonHermanos("Luis","Pedro"));


//2.  A es abuelo de C, Si A es padre de B y B es padre de C. 
function EsAbuelo(abuelo, nieto){

    const resultado = hechos.some(
        h1 => hechos.some(
            h2 =>
            h1.padre === abuelo &&
            h2.padre === h1.hijo &&
            h2.hijo === nieto
        )
    );

    return resultado;
}

console.log(EsAbuelo("Abraham","Luis"));
console.log(EsAbuelo("Abraham","Pedro"));




// 1. ¿Es cierto que Abraham es padre de Juan?
const esPadre = hechos.some(
    dato => dato.padre === "Abraham" &&
            dato.hijo === "Juan"
);

console.log("¿Abraham es padre de Juan?", esPadre);


// 2. ¿Quién es el padre de Luis?
const padreLuis = hechos.find(
    dato => dato.hijo === "Luis"
);

console.log("El padre de Luis es:", padreLuis.padre);


// 3. ¿Quiénes son los hijos de Juan?
const hijosJuan = hechos
    .filter(dato => dato.padre === "Juan")
    .map(dato => dato.hijo);

console.log("Los hijos de Juan son:", hijosJuan);