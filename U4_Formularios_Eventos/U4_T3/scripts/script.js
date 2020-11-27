var regexDiscNameGroup = /^.{20,}$/;
var regexReleaseYear = /^[0-9]{4}$/;
var regexLocation = /^[0-9]*$/;

window.onload = () => {

    let button = document.querySelector("#button");
    button.addEventListener("click", validation, false);

    function validation() {

        let name = document.querySelector("#name").value;
        let group = document.querySelector("#group").value;
        let year = document.querySelector("#year").value;
        let location = document.querySelector("#location").value;

        validateNameGroup(name, group);
        validateReleaseYear(year);
        validateLocation(location);

    }

}

function validateNameGroup(name, group) {

    if (regexDiscNameGroup.test(name)) {
        console.log("Nombre " + name + " válido");
    } else {
        console.log("Nombre " + name + " no válido");
    }

    if (regexDiscNameGroup.test(group)) {
        console.log("Grupo " + group + " válido");
    } else {
        console.log("Grupo " + group + " no válido");
    }

}

function validateReleaseYear(releaseYear) {

    if (regexReleaseYear.test(releaseYear)) {
        console.log("Año de salida " + releaseYear + " válido");
    } else {
        console.log("Año de salida " + releaseYear + " no válido");
    }

}

function validateLocation(location) {

    if (regexLocation.test(location)) {
        console.log("Localización de estantería " + location + " válido");
    } else {
        console.log("Localización de estantería " + location + " no válido");
    }

}