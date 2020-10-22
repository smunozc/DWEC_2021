function nameString(){
    let nombre = String(document.getElementById("nombre").value);
    let apellido1 = String(document.getElementById("apellido1").value);
    let apellido2 = String(document.getElementById("apellido2").value);
    let cadenaEntera = nombre+apellido1+apellido2;
    let cadenaSize = cadenaEntera.length;
    let cadenaMinuscula = (nombre + " " + apellido1 + " " + apellido2).toLowerCase();
    let cadenaMayuscula = (nombre + " " + apellido1 + " " + apellido2).toUpperCase();
    let nombreUsuario1 = (nombre.substring(0,1).toLowerCase() + apellido1.toLowerCase() + apellido2.substring(0,1).toLowerCase());
    let nombreUsuario2 = (nombre.substring(0,3).toLowerCase() + apellido1.substring(0,3).toLowerCase() + apellido2.substring(0,3).toLowerCase());

    alert("Tamaño de nombre y apellidos: " + cadenaSize + '\n' +
    "Cadena en mayusculas: " + cadenaMayuscula + '\n' +
    "Cadena en minusculas: " + cadenaMinuscula + '\n' +
    "Nombre: " + nombre + '\n' + "Apellido1: " + apellido1 + '\n' + "Apellido2: " + apellido2 + '\n' +
    "Propuesta usuario 1: " + nombreUsuario1 + '\n' +
    "Propuesta usuario 2: " + nombreUsuario2);

}