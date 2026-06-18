const hechos = [
    { padre: "Juan", hijo: "Luis" },
    { padre: "Juan", hijo: "Pedro" },
    { padre: "Abraham", hijo: "Juan" }
];


// REGLA 1: Hermanos
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


// REGLA 2: Abuelo
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


// CONSULTAS

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


// 4. ¿Luis y Pedro son hermanos?
console.log("¿Luis y Pedro son hermanos?", SonHermanos("Luis","Pedro"));


// 5. ¿Abraham es abuelo de Luis?
console.log("¿Abraham es abuelo de Luis?", EsAbuelo("Abraham","Luis"));


// 6. ¿Abraham es abuelo de Pedro?
console.log("¿Abraham es abuelo de Pedro?", EsAbuelo("Abraham","Pedro"));