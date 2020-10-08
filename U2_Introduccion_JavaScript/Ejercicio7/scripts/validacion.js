//EJERCICIO 7 JAVASCRIPT
function getDni(){

    var dni = document.getElementById("dni").value;
    
    var letra = document.getElementById("letra");
    // Obtener el índice de la opción que se ha seleccionado
    var indiceSeleccionado = letra.selectedIndex;
    // Con el índice y el array "options", obtener la opción seleccionada
    var opcionSeleccionada = letra.options[indiceSeleccionado];
    // Obtener el valor y el texto de la opción seleccionada
    var valorSeleccionado = opcionSeleccionada.value;
    
    console.log(dni);

    if(dni !== ""){
        dni = parseInt(dni);

        if(!isNaN(dni)){
            var string = dni.toString();

            if(string.length === 8){
                var letraCalculada = calcularLetra(dni);
                //console.log(letraCalculada);

                if(valorSeleccionado === letraCalculada){
                    alert("DNI Correcto.");
                } else {
                    alert("La letra del NIF es incorrecta. Seleccionar la letra " + letraCalculada + ".");
                }
                
            } else {
                alert("Los números del DNI deben de ser 8.");
            }
            
        } else {
            alert("Teclear un DNI (sin letras, sólo números).");
        }

    } else {
        alert("Completar el campo DNI.");
    }

    
}

function calcularLetra(x){
    var resto = x%23;
    var cadenaLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
    return cadenaLetras.substr(resto,1);
}