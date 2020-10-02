var x = 1;
var multiplos3 = 0;
var noPrimos = 0;

while(x<500){
    if(x%3 === 0 || x%2 === 0){
        if(x%3 === 0){
            multiplos3++;
        }
        //El calculo de los no primos es erróneo
        if(x%2 === 0){
            noPrimos++;
        }
    }
    x++;
}
console.log("Cantidad de numeros multiplos de 3: " + multiplos3 + '\n' + "Cantidad de numeros no primos: " + noPrimos);

