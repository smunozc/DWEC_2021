//FUNCIONES

//Obtiene el boton de enviar y espera a que haga click para ejecutar la funcion sumarIntentos
document.getElementById("enviar").addEventListener("click", (e) => {

    let confirmacion = confirm("¿Esta seguro de que desea enviar los datos?");
    if (confirmacion) {
        if (!validaciones()) {
            e.preventDefault();
        }
    } else {
        e.preventDefault();
    }

    if(get_cookie("intentos") !== ""){
        let intentos = get_cookie("intentos");
        intentos++;
        set_cookie("intentos", intentos, 1);
        document.getElementById("intentos").innerHTML = intentos;
    } else {
        set_cookie("intentos", 1, 1);
        let newCookie = get_cookie("intentos");
        document.getElementById("intentos").innerHTML = newCookie;
    }

    

}, false);

//Obtiene el nombre y los apellidos y espera a que se pierda el foco para ejecutar las funciones transformarNombreMayusculas y transformarApellidosMayusculas
let inputNombre = document.getElementById("nombre").addEventListener("blur", transformarNombreMayusculas, false);
let inputApellidos = document.getElementById("apellidos").addEventListener("blur", transformarApellidosMayusculas, false);

//Transformar nombre y apellidos a mayusculas cuando el foco salga del input
function transformarNombreMayusculas() {
    document.getElementById("nombre").value = document.getElementById("nombre").value.toUpperCase();
}

function transformarApellidosMayusculas() {
    document.getElementById("apellidos").value = document.getElementById("apellidos").value.toUpperCase();
}


//VALIDACIONES

function validaciones() {
    let mensaje = "";
    let regex;
    let nValidation = 9;

    function validarNombreyApellidos() {
        let nombre = document.getElementById("nombre");
        let apellidos = document.getElementById("apellidos");

        /*
            /^                      =   empieza.
            [a-zA-Zñáéíóú]+         =   admite mínimo 1 o más caracteres de la 'a' a la 'z' mayúsuclas y minusculas, además palabras con tildes y 'ñ'.
            [\s]*                   =   permite 0 más espacios en blanco.
            ([a-zA-Zñáéíóú]+[\s]*)+ =   admite mínimo 1 o más del conjunto de expresiones dentro del paréntesis.
            $/                      =   finaliza.
        */
        regex = /^([a-zA-ZñáéíóúÑÁÉÍÓÚ]+[\s]*)+$/;

        if (!regex.test(nombre.value)) {
            mensaje += "El nombre es incorrecto <br>";
            nombre.focus();
            nValidation--;
        }

        if (!regex.test(apellidos.value)) {
            mensaje += "El apellido es incorrecto <br>";
            apellidos.focus();
            nValidation--;
        }
    }

    function validarEdad() {
        let edad = document.getElementById("edad");
        regex = /^([0-9]{1,2})$|^([1][0][0-5])$/;

        if (!regex.test(edad.value)) {
            mensaje += "La edad es incorrecta <br>";
            edad.focus();
            nValidation--;
        }
    }

    function validarNif() {
        let nif = document.getElementById("nif");

        /*
            /^              =   empieza.
            ([0-9]{8,8})    =   min y max 8 caracteres numéricos.
            ([\-])          =   guión obligatorio entre los caracteres numéricos y la letra.
            ([a-zA-z])      =   caracter letra.
            $/              =   finaliza.
        */
        regex = /^([0-9]{8,8})([\-])([a-zA-Z])$/;

        if (!regex.test(nif.value)) {
            mensaje += "El NIF es incorrecto <br>";
            nif.focus();
            nValidation--;
        }
    }

    function validarEmail() {
        let email = document.getElementById("email");

        /*
            /^                  =   empieza.
            ([a-zA-Z0-9\.]+)    =   admite letras mayúsculas, minusculas, numeros y puntos.
            ([\@])              =   arroba obligatoria entre el nombre del correo y el dominio.
            ([a-z\.]{1,50})     =   admite letras y puntos para el nombre del dominio, entre 1 y 50 caracteres.
            ([a-z]{2,3})        =   admite entre 2 a 3 letras para la extension del dominio.
            $/                  =   finaliza.
        */
        regex = /^([a-zA-Z0-9\.]+)([\@])([a-z\.]{1,50})([a-z]{2,3})$/;

        if (!regex.test(email.value)) {
            mensaje += "El email es incorrecto <br>";
            email.focus();
            nValidation--;
        }
    }

    function validarProvincia() {
        let provincia = document.getElementById("provincia");

        if (provincia.value == 0) {
            mensaje += "La provincia es incorrecta <br>";
            provincia.focus();
            nValidation--;
        }
    }

    function validarFechaNacimiento() {
        let fecha = document.getElementById("fecha");

        regex = /^([0-2][1-9]|[10]|[20]|[30])(\/)([0-1][1-9]|[10])(\/)([0-9][0-9][0-9][0-9])$|^([0-2][1-9]|[10]|[20]|[30])(\-)([0-1][1-9]|[10])(\-)([0-9][0-9][0-9][0-9])$/;

        if (!regex.test(fecha.value)) {
            mensaje += "La fecha de nacimiento es incorrecta <br>";
            fecha.focus();
            nValidation--;
        }
    }

    function validarTelefono() {
        let telefono = document.getElementById("telefono");

        /*
            /^              =   empieza.
            ([0-9]{9,9})    =   min y max 9 caracteres numéricos.
            $/              =   finaliza.
        */
        regex = /^([0-9]{9,9})$/;

        if (!regex.test(telefono.value)) {
            mensaje += "El teléfono es incorrecto <br>";
            telefono.focus();
            nValidation--;
        }
    }

    function validarHora() {
        let hora = document.getElementById("hora");

        /*
            /^              =   empieza.
            ([0-9][0-9])    =   dos dígitos numéricos del 0 al 9 cada uno.
            [\:]            =   caracter ':' obligatorio.
            ([0-9][0-9])    =   otros dos dígitos del 0 al 9 cada uno.
            $/              =   finaliza.
        */
        regex = /^([0-9][0-9])[\:]([0-9][0-9])$/;

        if (!regex.test(hora.value)) {
            mensaje += "La hora es incorrecta <br>";
            hora.focus();
            nValidation--;
        }
    }

    validarNombreyApellidos();
    validarEdad();
    validarNif();
    validarEmail();
    validarProvincia();
    validarFechaNacimiento();
    validarTelefono();
    validarHora();

    document.getElementById("errores").innerHTML = mensaje;


    //Comprueba que todas las validaciones esten correctas y devuelve true.
    if (nValidation === 9) {
        return true;
    } else { //devuelve false si cualquier validación da error.
        return false;
    }
}

//FUNCIONES COOKIES

//Funcion para crear cookie
function set_cookie(nombre, valor, expiracion) {
    let d = new Date();
    d.setTime(d.getTime() + expiracion * 24 * 60 * 60 * 1000);
    expiracion = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

//Funcion para obtener cookie
function get_cookie(nombre) {
    let nom = nombre + "=";
    let array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
        let c = array[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(nombre) == 0) {
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}