var pass = prompt("Introduce una contraseña.");
console.log(pass);
console.log(comprobarContraseña(pass));

function comprobarContraseña(password) {
    let resul = false;
    let contador = 0;
    if (password !== null) {

        let pass = String(password);

        if (pass.length > 8 && pass.length < 16) {
            contador++;
        } else {
            alert("La contraseña debe tener entre 8 y 16 caracteres.");
        }

        if (hasUpper(pass)) {
            contador++;
        } else {
            alert("Debe tener al menos una letra mayúscula.");
        }

        if (hasLower(pass)) {
            contador++;
        } else {
            alert("Debe tener al menos una letra minuscula.");
        }

        if (hasNumber(pass)) {
            contador++;
        } else {
            alert("Debe tener al menos un número.");
        }

        if (hasChar(pass)) {
            contador++
        } else {
            alert("Debe tener al menos uno de los siguientes caracteres (-,_,@,#,$,%,&)");
        }

        if (contador === 5) {
            alert("Contraseña segura");
            resul = true;
        }

        return resul;

    } else {
        alert("Debe introducir una contraseña.");
        return resul;
    }

}

function hasUpper(word) {
    let palabra = String(word);
    let resul = false;
    for (i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) === palabra.charAt(i).toUpperCase() && isNaN(palabra.charAt(i))) {
            resul = true;
        }
    }
    console.log("hasUpper devuelve " + resul);
    return resul;
}

function hasLower(word) {
    let palabra = String(word);
    let resul = false;
    for (i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) === palabra.charAt(i).toLowerCase() && isNaN(palabra.charAt(i))) {
            resul = true;
        } else {
        }
    }
    console.log("hasLower devuelve " + resul);
    return resul;
}

function hasNumber(word) {
    let palabra = word;
    let resul = false;
    for (i = 0; i < palabra.length; i++) {
        if (!isNaN(parseInt(palabra.charAt(i)))) {
            resul = true;
        }
    }
    console.log("hasNumber devuelve " + resul);
    return resul;
}

function hasChar(word) {
    let palabra = String(word);
    let resul = false;
    let char = ["-", "_", "@", "#", "$", "%", "&"];
    for (i = 0; i < palabra.length; i++) {
        for (j = 0; j < palabra.length; j++) {
            if (palabra.charAt(i) === char[j]) {
                resul = true;
            } else {
            }
        }
    }
    console.log("hasChar devuelve " + resul);
    return resul;
}