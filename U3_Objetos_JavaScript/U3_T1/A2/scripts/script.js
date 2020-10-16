

function birthdaysOnSundays(fechacumple){
    let maxYear = new Date(2100,0,1);
    let birthday = new Date(document.getElementById("brthd").value);
    let contador = 0;

    do{
        console.log("año " + birthday.getFullYear());
        //La logica de este if es erronea
        if(birthday.getDay() === 0){
            contador++;
            console.log("cumpleaños que han caido en domingo: " + contador);
        }
       birthday.setFullYear((birthday.getFullYear() + 1));
    } while(birthday.getFullYear() < maxYear.getFullYear())
    alert("Numero de días que tu cumpleaños cae en Domingo: " + contador);
}