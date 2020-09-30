//U1T3 - Comparación II - Salvador Muñoz Cordero

//Variables

var pregunta = prompt("Está seguro de que quiere hacer esto?");

//Comparación

if(pregunta !== null){
    if(pregunta){
        alert("ha respondido " + "'" + pregunta + "'");
    }
} else {
    alert("Ha rehusado contestar.")
}

