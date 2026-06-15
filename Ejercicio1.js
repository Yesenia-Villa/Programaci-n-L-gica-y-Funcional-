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
     teneCertfcado: false}

]
//Ejercicio 1  Encontrar los cursos de la categoría “Desarrollo y que además tengan certfcado. 

const desarrolloCertificado = cursos.filter(curso => curso.categoria === "Desarrollo" &&
curso.teneCertfcado === true
);

console.log(desarrolloCertificado);


//ejercicio 2  Buscar curos completamente gratis o que pertenezcan a la categoría “Diseño”. 

const gratisODiseno = cursos.filter(curso => curso.esGratis === true ||curso.categoria === "Diseño"
);
console.log(gratisODiseno);

//3.  Encontrar una lista de cursos, que no tengan certificado.
const cursoSincertificado = cursos.filter (cursos=>cursos.teneCertfcado === false);
console.log(cursoSincertificado);

//4.  Encuentra los cursos que sean de Desarrollo y que cumplan la siguiente condición de 
//benefcio: (que sean Gratis o que si tengan certificado).
const desarrolloBeneficio = cursos.filter(
    curso => curso.categoria === "Desarrollo" &&
    (curso.esGratis === true ||
    curso.teneCertfcado === true)
);

console.log(desarrolloBeneficio)

