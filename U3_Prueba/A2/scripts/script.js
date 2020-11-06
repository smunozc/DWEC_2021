var cadena = prompt("Escribe tus datos con formato nombre:apellidos:telefono:email:codigopostal");
var arrayDeCadenas = cadena.split(":");
var codigoPostal = arrayDeCadenas[4];
var apellidos = arrayDeCadenas[1];
var email = arrayDeCadenas[3];

var arrayEmail1 = arrayDeCadenas[3].split("@");
var arrayEmail2 = arrayEmail1[1].split(".");
var servidorEmail = arrayEmail2[0];

alert("Código Postal: " + codigoPostal + "\nApellidos: " + apellidos + "\nEmail: " + email +
    "\nServidor del email: " + servidorEmail);