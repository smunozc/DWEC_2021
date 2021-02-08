let selection = document.getElementById('areaAlmacenamiento');
let clave = document.getElementById('clave');
let valor = document.getElementById('valor');
let textLocal = document.getElementById('local');
let textSession = document.getElementById('session');

window.onload = refrescarAreas();

//Cada método debe pintar o borrar tambien en el textarea correspondiente

// GUARDAR

document.getElementById('guardar').addEventListener('click', () => {
    guardarValor(clave.value, valor.value, selection.value);
});

function guardarValor(clave, valor, area) {
    if (clave !== "" && valor !== "") {

        if (area === "local") {

            if (localStorage.getItem(clave) !== null) {

                localStorage.setItem(clave, valor);

                textLocal.value = "";

                for (let i = 0; i < localStorage.length; i++) {
                    textLocal.value += "| " + localStorage.key(i) + ", " + localStorage.getItem(localStorage.key(i)) + " | \n";
                }

            } else {
                localStorage.setItem(clave, valor);
                textLocal.value += "| " + clave + ", " + localStorage.getItem(clave) + " | \n";
            }

        } else if (area === "session") {

            if (sessionStorage.getItem(clave) !== null) {

                sessionStorage.setItem(clave, valor);
                
                textSession.value = "";

                for (let i = 0; i < sessionStorage.length; i++) {
                    textSession.value += "| " + sessionStorage.key(i) + ", " + sessionStorage.getItem(sessionStorage.key(i)) + " | \n";
                }

            } else {
                sessionStorage.setItem(clave, valor);
                textSession.value += "| " + clave + ", " + sessionStorage.getItem(clave) + " | \n";
            }

        }

    } else {
        alert("Debe rellenar todos los campos.");
    }
}

// ELIMINAR

document.getElementById('eliminar').addEventListener('click', () => {
    eliminarValor(clave.value, valor.value, selection.value);
});

function eliminarValor(clave, valor, area) {
    if (clave !== "" && valor !== "") {

        if (area === "local") {
            if (localStorage.getItem(clave) !== null) {
                localStorage.removeItem(clave);

                textLocal.value = "";

                for (let i = 0; i < localStorage.length; i++) {
                    textLocal.value += "| " + localStorage.key(i) + ", " + localStorage.getItem(localStorage.key(i)) + " | \n";
                }
            }
        } else if (area === "session") {
            if (sessionStorage.getItem(clave) !== null) {
                sessionStorage.removeItem(clave);

                textSession.value = "";

                for (let i = 0; i < sessionStorage.length; i++) {
                    textSession.value += "| " + sessionStorage.key(i) + ", " + sessionStorage.getItem(sessionStorage.key(i)) + " | \n";
                }
            }
        }

    } else {
        alert("Debe introducir un par clave/valor.");
    }
}

// REFRESCAR

document.getElementById('refrescar').addEventListener('click', ()=>{
    refrescarAreas();
});

function refrescarAreas() {

    textLocal.value = "";

    for (let i = 0; i < localStorage.length; i++) {
        textLocal.value += "| " + localStorage.key(i) + ", " + localStorage.getItem(localStorage.key(i)) + " | \n";
    }

    textSession.value = "";

    for (let i = 0; i < sessionStorage.length; i++) {
        textSession.value += "| " + sessionStorage.key(i) + ", " + sessionStorage.getItem(sessionStorage.key(i)) + " | \n";
    }

}

// COMPROBAR COMPATIBILIDAD

document.getElementById('compatibilidad').addEventListener('click', compatibilidadNavegador);

function compatibilidadNavegador() {
    if (typeof (Storage) !== 'undefined') {
        alert("Su navegador es compatible con 'Storage'");
    } else {
        alert("Su navegador NO es compatible con 'Storage'");
    }
}