
function crearUsuario(
    nombre,
    apellido,
    pais,
    ciudad,
    tipo_documento,
    numero_de_identificacion,
    fecha_de_nacimiento,
    numero_de_celular,
    datos_personales
){

    const usuarioCreado = {

        id: Date.now(),

        nombreCompleto: `${nombre} ${apellido}`,

        LugarNacimiento: {

            pais: pais,

            ciudad: ciudad

        },

        documento: {

            tipo: tipo_documento,

            numero: numero_de_identificacion

        },

        fecha: fecha_de_nacimiento,

        numero: numero_de_celular,

        datospersonales: datos_personales,

        fechaRegistro: new Date().toLocaleDateString()

    };


    return usuarioCreado;

}



const formulario = document.getElementById('FormularioRegistro');


formulario.addEventListener('submit', function (event) {

    event.preventDefault();


    const nombre =
        document.getElementById('nombre').value;


    const apellido =
        document.getElementById('apellido').value;


    const pais =
        document.getElementById('pais').value;


    const ciudad =
        document.getElementById('ciudad').value;


    const tipo_documento =
        document.getElementById('tipo_documento').value;


    const numero_de_identificacion =
        document.getElementById('numero_identificacion').value;


    const fecha_de_nacimiento =
        document.getElementById('fecha_nacimiento').value;


    const numero_de_celular =
        document.getElementById('celular').value;


 
    const datos_personales =
        document.getElementById('datos_personales').checked;


    const UsuarioGuardado = crearUsuario(

        nombre,

        apellido,

        pais,

        ciudad,

        tipo_documento,

        numero_de_identificacion,

        fecha_de_nacimiento,

        numero_de_celular,

        datos_personales

    );


    console.log('Registro Creado');

    console.log(UsuarioGuardado);


    const usuarioJSON =
        JSON.stringify(UsuarioGuardado);



    localStorage.setItem(

        UsuarioGuardado.id,

        usuarioJSON

    );


    console.log('Usuario guardado en localStorage');


    console.log(usuarioJSON);


    formulario.reset();

});



function extraerTitulos(notas) {

    return notas.map(
        nota => nota.title
    );

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


const resultado =
    extraerTitulos(notas);


console.log(resultado);


localStorage.setItem(

    "titulos",

    JSON.stringify(resultado)

);
