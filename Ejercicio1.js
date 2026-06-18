const cursos=[
    { titulo: 'React Avanzado',
      categoria: 'Desarrollo',
      esGrats: false,
      teneCertfcado: true },

    { titulo: 'Introducción a UX/UI',
      categoria: 'Diseño',
      esGrats: true,
      teneCertfcado: false },

    { titulo: 'Node.js y MongoDB',
      categoria: 'Desarrollo',
      esGrats: true,
      teneCertfcado: true },

    { titulo: 'Figma para Principiantes',
      categoria: 'Diseño',
      esGrats: false,
      teneCertfcado: false }
];


// REGLAS

function TieneCertificado(titulo){
    const certificado = cursos.some(
        curso => curso.titulo === titulo &&
                 curso.teneCertfcado === true
    );

    return certificado;
}

function EsGratis(titulo){
    const gratis = cursos.some(
        curso => curso.titulo === titulo &&
                 curso.esGrats === true
    );

    return gratis;
}


// EJERCICIO 1
const desarrolloCertificado = cursos.filter(
    curso => curso.categoria === "Desarrollo" &&
             curso.teneCertfcado === true
);

console.log(desarrolloCertificado);


// EJERCICIO 2
const gratisODiseno = cursos.filter(
    curso => curso.esGrats === true ||
             curso.categoria === "Diseño"
);

console.log(gratisODiseno);


// EJERCICIO 3
const cursoSincertificado = cursos.filter(
    curso => curso.teneCertfcado === false
);

console.log(cursoSincertificado);


// EJERCICIO 4
const desarrolloBeneficio = cursos.filter(
    curso => curso.categoria === "Desarrollo" &&
            (curso.esGrats === true ||
             curso.teneCertfcado === true)
);

console.log(desarrolloBeneficio);


