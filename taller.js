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

/* 9. Objeto carro */

let carro={
    marca:"lamborghini",
    modelo:"svj",

    propietario:{
        nombre:"david",
        edad:22
    }
};
console.log(carro.propietario.nombre);


/* 10. Función (SIN DESESTRUCTURACIÓN) */

let carro1 = {
  marca: "Toyota",
  propietario: {
    nombre: "David",
  }
};

function mostrarCarro({ marca, propietario: { nombre} }) {
  console.log(`El carro es un ${marca}. su propietario es ${nombre}.`);
}
mostrarCarro(carro1);


/* 11. Modificar propiedad */

persona={
    nombre: "andres",
    edad: 30,
    profesion: "profesor",
}
console.log(persona);
persona.edad=31;
console.log(persona);


/* 12. Desestructuración */

let persona = {
  nombre: "David",
  profesion: "Desarrollador",
}
function info({ nombre, profesion }) {
  return `El nombre es ${nombre}, su profesion es ${profesion}.`;
}
console.log(info(persona));


/* 13. Desestructuración de objeto carro */

let carroo = {
  marca: "Toyota",
  modelo: "Corolla",
  color: "Rojo"
};

let { marca, modelo } = carroo;

console.log(marca);
console.log(modelo);


/* 14. Desestructuración */

let carro3 = {
  marca: "Toyota",
  propietario: {
    nombree: "David",
    eedad: 20
  }
};

let { propietario: { nombree, eedad } } = carro3;

console.log(nombree);
console.log(eedad);


/* 15. Parámetro desestructurado */

function mostrarDatos({ nombre, edad }) {
  console.log(nombre);
  console.log(edad);
}

let persona = {
  nombre: "David",
  edad: 20,
  ciudad: "Puelenje"
};

mostrarDatos(persona);


/* 16. Desestructuración en función */

function mostrarPropietario({ propietario: { nombre, edad } }) {
  return `Propietario: ${nombre}, Edad: ${edad}`;
}

let carro5 = {
  marca: "Toyota",
  propietario: {
    nombre: "David",
    edad: 20
  }
};

mostrarPropietario(carro5);


/* 17. Renombramiento */

let persona = {
  nombre: "David",
  edad: 20,
  ciudad: "Puelenje"
};

let { nombre: nombrePersona, edad: edadPersona } = persona;

console.log(nombrePersona);
console.log(edadPersona);


/* 18. Copia con spread */

let persona = {
  nombre: "David",
  edad: 20,
  ciudad: "Puelenje"
};

// Copia usando spread
let copiaPersona = { ...persona };

// Cambiamos una propiedad en la copia
copiaPersona.edad = 25;

console.log(persona);       // objeto original
console.log(copiaPersona);  // objeto copiado


/* 19. Copiar objeto anidado */

let persona = {
  nombre: "David",
  edad: 20,
  direccion: {
    ciudad: "Cali",
    barrio: "Puelenje"
  }
};

let copiaPersona = {
  ...persona,
  direccion: {
    ...persona.direccion
  }
};

copiaPersona.direccion.ciudad = "Popayán";

console.log(persona.direccion.ciudad);      
console.log(copiaPersona.direccion.ciudad); 


/* 20. Desestructuración completa */

function mostrarLibro({
  titulo,
  autor: { nombreAutor },
  editorial: { nombreEditorial }
}) {
  return `El libro "${titulo}" fue escrito por ${nombreAutor} y publicado por la editorial ${nombreEditorial}.`;
}

let libro = {
  titulo: "JavaScript Básico",
  autor: {
    nombreAutor: "David Luna"
  },
  editorial: {
    nombreEditorial: "TechBooks"
  }
};

mostrarLibro(libro);