const usuarios = [
    { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
    { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
    { nombre: 'Beto', edad: 30, rol: 'user', activo: false }
];


// Reglas
function CuentaDeshabilitada(nombre){return usuarios.some(usuario => usuario.nombre === nombre && usuario.activo === false);
}
function PuedeEntrar(nombre){return usuarios.some(usuario => usuario.nombre === nombre && usuario.edad >= 18 && usuario.activo === true);
}


// 1. Se necesita enviar un correo a los usuarios que tienen cuenta deshabilitada
const cuentaDeshabilitada = usuarios.filter(usuario => usuario.activo === false
);
console.log(cuentaDeshabilitada);


// 2. condiciones: ser mayor de dad y tener cuenta activa
const accesoPermitido = usuarios.filter(usuario => usuario.edad >= 18 && usuario.activo === true
);
console.log(accesoPermitido);


// 3. Usuarios especiales, si cuenta con rol de admin y si es menor de edad
const usuariosEspeciales = usuarios.filter(usuario => usuario.rol === "admin" && usuario.edad < 18
);
console.log(usuariosEspeciales);


// 4. Quienes tienen permiso para editar (o debe ser administrador  o mayor de edad)
const permisoEditar = usuarios.filter(usuario => usuario.activo === true && (usuario.rol === "admin" ||usuario.edad >= 18)
);
console.log(permisoEditar);


