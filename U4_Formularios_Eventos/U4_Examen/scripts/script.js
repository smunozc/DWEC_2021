let doc = document.addEventListener('submit', (e) => {

    e.preventDefault();
    if (validar()) {
        cookieTirada();
        //No funciona, si encuntras el fallo comunicalo porfa.
        //document.getElementById('formulario').reset();
        //En cambio lo he hecho a lo bruto
        document.getElementById('nombre').value = "";
        document.getElementById('anyo').value = "";
        document.getElementById('habilidades').value = "";
        document.getElementById('tirada').value = "";
        document.getElementById('rol').value = "0";
        document.getElementById('password').value = "";
    }

})

function validar() {
    let result = false;

    let nombre = document.getElementById('nombre');
    let anyo = document.getElementById('anyo');
    let habilidades = document.getElementById('habilidades');
    let tirada = document.getElementById('tirada');
    let rol = document.getElementById('rol');
    let password = document.getElementById('password');

    let valCorrect = 0;

    /*
        Esta regex acepta uno u otro de los grupos definidos entre paréntesis.
        (^[MSTWA]$)     =   Acepta uno de los caracteres definidos.
        (^[WB][S]$)     =   Acepta WS o BS.
        (^[L][d]$)      =   Acepta Ld.
        (^[S][v]$)      =   Acepta Sv.
    */
    let regexHabilidad = /(^[MSTWA]$)|(^[WB][S]$)|(^[L][d]$)|(^[S][v]$)/;

    /*
        Esta regex acepta uno u otro de los grupos definidos entre paréntesis.
        (^[F][x][2][R][0-9][0-9]$)  =   Acepta Fx2R(numero del 00 al 99).
        (^[F][>][R][0-9][0-9]$)     =   Acepta F>R(numero del 00 al 99).
        (^[F][=][R][0-9][0-9]$)     =   Acepta F=R(numero del 00 al 99).
        (^[F][<][R][0-9][0-9]$)     =   Acepta F<R(numero del 00 al 99).
    */
    let regexTirada = /(^[F][x][2][R][0-9][0-9]$)|(^[F][>][R][0-9][0-9]$)|(^[F][=][R][0-9][0-9]$)|(^[F][<][R][0-9][0-9]$)/;

    /*
        [A-Z][A-Z]      =   Acepta dos letras mayúsculas.
        [;@.,#]         =   Acepta uno de los caracteres definidos (No sabia como hacerlo de otra manera).
        [a-zA-Z]{8,}    =   Acepta una palabra con minimo 8 caracteres.
        [#]             =   Almohadilla obligatoria.
        [0-9][0-9]      =   Número de 2 cifras desde el 00 hasta el 99.
    */
    let regexPassword = /^[A-Z][A-Z][;@.,#][a-zA-Z]{8,}[#][0-9][0-9]$/;

    if (nombre.value !== "" && nombre.value !== null) {
        console.log('Nombre correcto');
        nombre.className = 'correct';
        valCorrect++;
    } else {
        console.log('Nombre incorrecto');
        nombre.className = 'incorrect';
        nombre.focus();
    }

    if (anyo.value >= 700 && anyo.value <= 8000) {
        console.log('Año correcto');
        anyo.className = 'correct';
        valCorrect++;
    } else {
        console.log('Año incorrecto');
        anyo.className = 'incorrect';
        anyo.focus();
    }

    if (regexHabilidad.test(habilidades.value)) {
        console.log('Habilidad correcta');
        habilidades.className = 'correct';
        valCorrect++;
    } else {
        console.log('Habilidad incorrecta');
        habilidades.className = 'incorrect';
        habilidades.focus();
    }

    if (regexTirada.test(tirada.value)) {
        console.log('Tirada correcta');
        tirada.className = 'correct';
        valCorrect++;
    } else {
        console.log('Tirada incorrecta');
        tirada.className = 'incorrect';
        tirada.focus();
    }

    if (regexPassword.test(password.value)) {
        console.log('Contraseña correcta');
        password.className = 'correct';
        valCorrect++;
    } else {
        console.log('Contraseña incorrecta');
        password.className = 'incorrect';
        password.focus();
    }

    if ((rol.value * 1) !== 0) {
        console.log('Rol correcto');
        rol.className = 'correct';
        valCorrect++;
    } else {
        console.log('Rol incorrecta');
        rol.className = 'incorrect';
        rol.focus();
    }

    if (valCorrect === 6) {
        result = true;
    }

    return result;
}

function cookieTirada() {
    let ultimaTirada = document.getElementById('ultimaTirada');

    let random = Math.floor((Math.random() * 6) + 1);
    console.log(random);

    setCookie('tirada', random, 1);

    ultimaTirada.innerHTML = getCookie('tirada');
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}