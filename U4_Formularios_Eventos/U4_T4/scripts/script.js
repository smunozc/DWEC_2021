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
        name.previousSibling.className = "";
        console.log("Nombre " + name.value + " válido");
    } else {
        name.className = "errorInput";
        name.previousSibling.className = "errorInput";
        console.log("Nombre " + name.value + " no válido");
    }

    if (regexDiscNameGroup.test(group.value)) {
        group.className = "";
        group.previousSibling.className = "";
        console.log("Grupo " + group.value + " válido");
    } else {
        group.className = "errorInput";
        group.previousSibling.className = "errorInput";
        console.log("Grupo " + group.value + " no válido");
    }

}

function validateReleaseYear(releaseYear) {

    if (regexReleaseYear.test(releaseYear.value)) {
        releaseYear.className = "";
        releaseYear.previousSibling.className = "";
        console.log("Año de salida " + releaseYear.value + " válido");
    } else {
        releaseYear.className = "errorInput";
        releaseYear.previousSibling.className = "errorInput";
        console.log("Año de salida " + releaseYear.value + " no válido");
    }

}

function validateLocation(location) {

    if (regexLocation.test(location.value)) {
        location.className = "";
        location.previousSibling.className = "";
        console.log("Localización de estantería " + location.value + " válido");
    } else {
        location.className = "errorInput";
        location.previousSibling.className = "errorInput";
        console.log("Localización de estantería " + location.value + " no válido");
    }

}