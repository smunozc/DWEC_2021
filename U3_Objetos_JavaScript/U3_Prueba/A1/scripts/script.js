var carton = new Array(3);
carton[0] = new Array(5);
carton[1] = new Array(5);
carton[2] = new Array(5);

comenzar();

function comenzar() {
    rellenarCarton(carton);


}

function rellenarCarton(carton) {
    for (let i = 0; i < carton.length; i++) {
        for (let j = 0; j < array[i].length; i++) {
            let numero = Math.floor(Math.random() * 99) + 1;
            if (carton.includes(numero)) {
                j--;
                continue;
            } else {
                carton[i].push(numero);
            }
        }
    }
}

function compruebaLinea(carton, lineaDesordenada) {
    let contador = 0;
    let linea = false;

    for (var i = 0; i < carton.length; i++){
        contador = 0;
        for (var j = 0; j < carton[i].length; j++){
            if(carton[i][j] === lineaDesordenada[j]){
                contador ++;
            }
            if(contador === 5){
                linea = true;
                console.log("LINEA!");
                return j;
            }
        }
    }

    if(!linea){
        return -1;
    }
}

function compruebaBingo(carton, lineaDesordenada, numLineas){
    let contador = 0;
    let linea = false;
    let bingo = false;

    if(numLineas < 3){
        
    } else {
        console.log("BINGO!!!!!");
        bingo = true;
    }

    return bingo;
}

function sacaNumeroNuevo() {

}