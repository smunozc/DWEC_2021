//municipio:cod_parcela@nombre|apellido1|apellido2
let codificacion = prompt("Introduce la codificacion");

let municipioDiv = document.getElementById("municipio");
let parcelaDiv = document.getElementById("parcela");
let nombreApellidosDiv = document.getElementById("nombreApellidos");

let separacionNombreYCodigo = codificacion.split("@");

//Nombre y apellidos
let nombre = separacionNombreYCodigo[1].split("|")[0];
let apellido1 = separacionNombreYCodigo[1].split("|")[1];
let apellido2 = separacionNombreYCodigo[1].split("|")[2];

nombreApellidosDiv.innerHTML = "Nombre y apellidos: " + nombre + " " + apellido1 + " " + apellido2;

//Municipio
let municipio = separacionNombreYCodigo[0].split(":")[0];

municipioDiv.innerHTML = "Municipio: " + municipio + "<br> -----------------";

//Parcela
let parcelaLetras = separacionNombreYCodigo[0].split(":")[1].split("_")[0];
let parcelaNumeros = separacionNombreYCodigo[0].split(":")[1].split("_")[1];

parcelaDiv.innerHTML = "Parcela: <br> Letras: " + parcelaLetras + " <br> Números: " + parcelaNumeros + "<br> -----------------";
