//U1T3 - Comparación II - Salvador Muñoz Cordero

//Variables

var pregunta = prompt("¿Qué densidad tiene el material elegido? (g/cm3)");

//Comparación

if(pregunta !== null){
    if(pregunta){
        if(!isNaN(pregunta)){
            if(pregunta > 1){
                alert("Se hunde en el agua.");
            } else if(pregunta < 1 && pregunta > 0){
                alert("Flota en el agua.");
            } else if(pregunta < 0 || pregunta == 0){
                alert("La densidad no puede ser igual o menor a 0");
            }
        } else {
            alert("Debe ser un número.")
        }
    }
} else {
    alert("Ha rehusado contestar.")
}

