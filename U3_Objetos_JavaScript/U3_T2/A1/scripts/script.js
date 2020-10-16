//Terminar ejercicio
function mathOperations() {
    let formatType = parseInt(document.getElementById("options").value);

    switch (formatType) {
        case 1:
            let base = parseInt(prompt("Introduce un numero base"));
            let exponente = prompt("Introduce un numero de exponente");
            alert("La potencia de " + base + " elevado a " + exponente + " es: " + Math.pow(base, exponente));
            break;
        case 2:
            let raiz = parseInt(prompt("Introduce un numero positivo para calcular su raiz cuadrada."));
            if(raiz >= 0){
                alert("La raíz de " + raiz + " es: " + Math.sqrt(raiz));
            } else {
                alert("Debe ser un número positivo.");
            }
            break;
        case 3:
            let redondeo = parseFloat(prompt("Introduce un número decimal para redondearlo."));
            alert("A la alta: " + Math.ceil(redondeo) + '\n' + "A la baja: " + Math.floor(redondeo) + '\n' + 
            "Redondeo al más próximo: " + Math.round(redondeo));
            break;
        case 4:
            let angulo = parseInt(prompt("Introduce un ángulo entre 0 y 360."));
            let seno = Math.sin(angulo);
            let coseno = Math.cos(angulo);
            let tangente = Math.tan(angulo);
            if(angulo >= 0 && angulo <= 360){
                alert("Seno: " + seno + '\n' + "Coseno: " + coseno + '\n' + "Tangente: " + tangente);
            } else {
                alert("Escriba un numero entre 0 y 360.");
            }
            break;
    }
}