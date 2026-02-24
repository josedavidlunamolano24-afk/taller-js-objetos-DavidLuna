/* 1. Variables básicas */

let nombre = "David";
let edad = 22;
let ciudad = "los campos";

console.log(`Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);


/* 2. Función con el nombre que desee */

function calcularPromedio(a, b, c, d, e) {
  let resultado = (a + b + c + d + e);
  return resultado;
}

calcularPromedio(10, 20, 30, 40, 50);


/* 3. Función con parámetros */

function persona(per){
    return `Hola, mi nombre es ${per.nombre} y tengo ${per.edad} años.`;
}
let per={
    nombre: "David",
    edad: 22,
    ciudad: "los campos",
}
console.log(persona(per));


// Punto 5: Crear objeto
const persona = {
    nombre: "david",
    edad: 22,
    profesion: "Desarrollador de software"
};
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

// punto 6:propiedad nueva
persona.telefono = "3183175479";
console.log(persona.telefono);


/* 7. Función con objeto (SIN DESESTRUCTURACIÓN) */

let persona = {
  nombre: "David",
  profesion: "Estudiante",
  edad: 20
};

function mostrarPersona(persona) {
  console.log(persona.nombre);
  console.log(persona.profesion);
}

mostrarPersona(persona);

/* 8. Objeto */

let estudiante={
    nombre:"david",
    edad:22,
    notas:{
        matematicas:4.5,
        español:3.8
    }
};
console.log(estudiante.notas.matematicas);
console.log(estudiante.notas.español);