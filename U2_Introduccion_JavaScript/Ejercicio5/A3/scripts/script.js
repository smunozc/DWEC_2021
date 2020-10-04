var x = 1;
var multiplos3 = [];
var noPrimos = 0;

while(x<500){
    if(x%3 === 0){
        multiplos3.push(x);
    }
    if (!primo(x)) {
        noPrimos++;
    }
    x++;
}
console.log("Numeros multiplos de 3: " + multiplos3 + '\n' + "Cantidad de numeros no primos: " + noPrimos);

function primo(x) {
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    if(x !== 1){
        return true;
    } else {
        return false;
    }
}