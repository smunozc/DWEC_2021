var regexDiscNameGroup = /^.{20,}$/;
var regexReleaseYear = /^[0-9]{4}$/;
var regexLocation = /^[0-9]*$/;

window.onload = () => {

    let button = document.querySelector("#button");
    button.addEventListener("click", validation, false);

    function validation() {

        let name = document.querySelector("#name");
        let group = document.querySelector("#group");
        let year = document.querySelector("#year");
        let location = document.querySelector("#location");

        document.querySelector('#year').className = "errorInput";

        validateNameGroup(name, group);
        validateReleaseYear(year);
        validateLocation(location);

    }

}

function validateNameGroup(name, group) {

    if (regexDiscNameGroup.test(name.value)) {
        name.className = "";
        /* 
            La variable 'lineBreak' se debe a que en algunos navegadores como firefox o chrome, se interpreta un salto de linea como un nodo hijo, por lo tanto he elegido
            al anterior hermano, del anterior hermano (line break) de la etiqueta seleccionada (#name). En internet explorer no funcionará este script 
            ya que en este navegador los saltos de linea no cuentan como nodos hijos.
        */
        let lineBreak = name.previousSibling;
        lineBreak.previousSibling.className = "";
        console.log("Nombre " + name.value + " válido");
    } else {
        name.className = "errorInput";
        let lineBreak = name.previousSibling;
        lineBreak.previousSibling.className = "errorTag";
        console.log("Nombre " + name.value + " no válido");
    }

    if (regexDiscNameGroup.test(group.value)) {
        group.className = "";
        let lineBreak = group.previousSibling;
        lineBreak.previousSibling.className = "";
        console.log("Grupo " + group.value + " válido");
    } else {
        group.className = "errorInput";
        let lineBreak = group.previousSibling;
        lineBreak.previousSibling.className = "errorTag";
        console.log("Grupo " + group.value + " no válido");
    }

}

function validateReleaseYear(releaseYear) {

    if (regexReleaseYear.test(releaseYear.value)) {
        releaseYear.className = "";
        let lineBreak = releaseYear.previousSibling;
        lineBreak.previousSibling.className = "";
        console.log("Año de salida " + releaseYear.value + " válido");
    } else {
        releaseYear.className = "errorInput";
        let lineBreak = releaseYear.previousSibling;
        lineBreak.previousSibling.className = "errorTag";
        console.log("Año de salida " + releaseYear.value + " no válido");
    }

}

function validateLocation(location) {

    if (regexLocation.test(location.value)) {
        location.className = "";
        let lineBreak = location.previousSibling;
        lineBreak.previousSibling.className = "";
        console.log("Localización de estantería " + location.value + " válido");
    } else {
        location.className = "errorInput";
        let lineBreak = location.previousSibling;
        lineBreak.previousSibling.className = "errorTag";
        console.log("Localización de estantería " + location.value + " no válido");
    }

}