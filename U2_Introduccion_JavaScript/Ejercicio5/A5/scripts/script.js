var numero = prompt("introduce un numero del 2 al 10") * 1;
var resultado = 0;

while(numero < 2 || numero > 10){
    numero = prompt("introduce un numero del 2 al 10") * 1;
}

if(numero >= 2 && numero <= 10){

    //Multiplicación
    console.log("MULTIPLICACIÓN");
    for(i = 0; i <= 10; i++){
        resultado = numero * i;
        console.log(numero + " * " + i + " = " + resultado);
    }

    resultado = 0;
    i = 0;

    //Suma
    console.log("SUMA");
    while(i <= 10){
        resultado = numero + i;
        console.log(numero + " + " + i + " = " + resultado);
        i++;
    }

    resultado = 0;
    i = -1;

    //Dividir
    console.log("DIVISIÓN");
    do{
        i++;
        resultado = numero / i;
        console.log(numero + " / " + i + " = " + resultado);
    } while(i < 10)

} else {
    console.log("error :(")
}