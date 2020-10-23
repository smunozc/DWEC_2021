var ventana1;

nuevaVentana();

function nuevaVentana() {
    let pagina = "./pages/page.html";
    let confirmacion = confirm("Se va a crear una nueva ventana ¿Estas de acuerdo?");
    console.log(confirmacion);
    if (confirmacion) {
        ventana1 = window.open("./pages/page.html", "ventane", "height=80,width=200,left=500,location=no,menubar=no,toolbar=no,resizable=no,scrollbars=yes,status=no,titlebar=yes,top=500");
    }
}

function cerrarVentana() {
    if (ventana1 !== undefined) {
        if (!ventana1.closed) {
            ventana1.close();
        } else {
            alert("La ventana ya esta cerrada.");
        }
    } else {
        alert("Primero debes crear una ventana.");
    }
}

function moverVentana() {
    if (ventana1 !== undefined) {
        if (!ventana1.closed) {
            ventana1.moveBy(10, 10);
        } else {
            alert("La ventana ya esta cerrada.");
        }
    } else {
        alert("Primero debes crear una ventana");
    }
}

function moverAPosicion(){
    if (ventana1 !== undefined) {
        if (!ventana1.closed) {
            ventana1.moveTo(100, 100);
        } else {
            alert("La ventana ya esta cerrada.");
        }
    } else {
        alert("Primero debes crear una ventana");
    }
}

function redimensionarVentana(){
    if (ventana1 !== undefined) {
        if (!ventana1.closed) {
            ventana1.resizeBy(10, 10);
        } else {
            alert("La ventana ya esta cerrada.");
        }
    } else {
        alert("Primero debes crear una ventana");
    }
}

function redimensionarA(){
    if (ventana1 !== undefined) {
        if (!ventana1.closed) {
            ventana1.resizeTo(400, 200);
        } else {
            alert("La ventana ya esta cerrada.");
        }
    } else {
        alert("Primero debes crear una ventana");
    }
}

function moverScrollArriba(){
    if (ventana1 !== undefined) {
        if (!ventana1.closed) {
            ventana1.scrollTo(0,0);
        } else {
            alert("La ventana ya esta cerrada.");
        }
    } else {
        alert("Primero debes crear una ventana");
    }
}

function moverScrollA10(){
    if (ventana1 !== undefined) {
        if (!ventana1.closed) {
            ventana1.scrollTo(0,10);
        } else {
            alert("La ventana ya esta cerrada.");
        }
    } else {
        alert("Primero debes crear una ventana");
    }
}