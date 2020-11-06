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
    let linea1;
    let linea2;
    let linea3;

    for (var i = 0; i < carton.length; i++){
        for (var j = 0; j < carton[i].length; j++){
            /*if(carton[i][j] !== lineaDesordenada[]){

            }*/
        }
    }
}

function sacaNumeroNuevo() {

}