function mathOperations() {
    let pi = Math.PI;
    let radio = parseInt(document.getElementById("radius").value);
    let diametro = radio * 2;
    let perimetro = 2 * pi * radio;
    let areaCircunferencia = pi * Math.pow(radio,2);
    let areaEsfera = 4 * pi * Math.pow(radio,2);
    let volumenEsfera = (4 * pi * Math.pow(radio,3)) / 3;

    alert("Resultados: " + '\n' +
    "radio: " + radio + '\n' +
    "diametro: " + diametro + '\n' +
    "perimetro: " + perimetro + '\n' +
    "area circunferencia: " + areaCircunferencia + '\n' +
    "area esfera: " + areaEsfera + '\n' +
    "volumen esfera: " + volumenEsfera);
}