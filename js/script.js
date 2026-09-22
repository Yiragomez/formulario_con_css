//crear el registro de usuario
function crearUsuario(nombre,apellido,pais,ciudad,tipo_documento,numero_de_identificacion,fecha_de_nacimiento,numero_de_celular,datos_personales){

const usuarioCreado = {
        id : Date.now(),
        nombreCompleto :`${nombre} ${apellido}`,
        LugarNacimiento : {
            pais: pais,
            ciudad: ciudad
        },
        documento : {
            tipo : tipo_documento,
            numero : numero_de_identificacion
        },
        fecha : fecha_de_nacimiento,
        numero : numero_de_celular,
        datospersonales : datos_personales,
        fechaRegistro: new Date().toLocaleDateString()
        
}

    return usuarioCreado
};

const formulario = document.querySelector('form');

//captura de informacion
    
formulario.addEventListener('submit', function (event) {

    event.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const tipo_documento = document.getElementById('tipo_documento').value;
    const numero_de_identificacion = document.getElementById('numero_identificacion').value;
    const fecha_de_nacimiento = document.getElementById('fecha_nacimiento').value;
    const numero_de_celular = document.getElementById('celular').value;
    const datos_personales = document.getElementById('politica_datos').value;

    const UsuarioGuardado = crearUsuario(nombre,apellido,pais,ciudad,tipo_documento,numero_de_identificacion,fecha_de_nacimiento,numero_de_celular,datos_personales);

    console.log('Registro Creado');

    const usuarioJSON = JSON.stringify(UsuarioGuardado)
localStorage.setItem(UsuarioGuardado.id,usuarioJSON);
})

//GUARDADO
// EJERCICIO 1: Extraer títulos con map

function extraerTitulos(notas) {
    return notas.map(nota => nota.title);
}

const notas = [
    {
        id: 1,
        title: "Dia 1",
        content: "Contenido 1"
    },
    {
        id: 2,
        title: "Dia 2",
        content: "Contenido 2"
    },
    {
        id: 3,
        title: "Dia 3",
        content: "Contenido 3"
    }
];

const resultado = extraerTitulos(notas);

console.log(resultado);

localStorage.setItem("titulos", JSON.stringify(resultado));

//nuevo ejercicio con pokemon
const formularioPokemon = document.getElementById('formPokedex');
formularioPokemon.addEventListener('submit',async function (event) {
    event.preventDefault();
    const nombrePokemon = document.getElementById('pokemonInput').value.trim().toLowerCase();

    if(!nombrePokemon) return;

try {

        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);

        if(!respuesta.ok){
            throw new Error('¡No encontre nada chamo!');
        }
        const datos = await respuesta.json();

        cositasPokemon(datos);
    } catch(error){

        const contenedor = document.getElementById('resultadoPokemon')
        contenedor.innerHTML = 
        `<div>
            <p> ${error.message}.</p>
        </div>`;
    }
    });

function cositasPokemon(argumentos){
    
    const contenedor = document.getElementById('resultadoPokemon')

    const nombre = argumentos.name.toUpperCase() ;
    const imagen = argumentos.sprites.front_default;

    contenedor.innerHTML = 
        `<div>
            <h2>${nombre}</h2>
            <img src="${imagen}" style="with: 200px; height: 200px ">
        </div>`;
}