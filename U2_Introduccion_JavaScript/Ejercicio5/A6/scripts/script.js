var diaSemana = prompt("Introduce un día de la semana");
diaSemana = diaSemana.toLowerCase();
diaSiguiente = "";

if(diaSemana === "lunes" || diaSemana === "martes" || diaSemana === "miercoles" || diaSemana === "jueves" 
|| diaSemana === "viernes" || diaSemana === "sabado" || diaSemana === "domingo"){
    switch (diaSemana){
        case "lunes":
            diaSiguiente = "Martes";
            break;
        case "martes":
            diaSiguiente = "Miercoles";
            break;
        case "miercoles":
            diaSiguiente = "Jueves";
            break;
        case "jueves":
            diaSiguiente = "Viernes";
            break;
        case "viernes":
            diaSiguiente = "Sabado";
            break;
        case "sabado":
            diaSiguiente = "Domingo";
            break;
        case "domingo":
            diaSiguiente = "Lunes";
            break;
        default: 
            diaSiguiente = "un Error";
            break;
    }
    alert("Mañana será " + diaSiguiente); 
} else {
    console.log("Error. Introduzca un dia de semana (Lunes - Domingo)")
}