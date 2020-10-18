function numero() {

    let num = document.getElementById("num").value * 1;

    if (num != null) {

        console.log("No es nulo");

        if (!isNaN(num)) {

            console.log("Es número");

            if (Number.isInteger(num)) {

                console.log("Es entero");

                let exponencial = Number(num).toExponential();
                let cuatroDecimales = Number(num).toFixed(4);
                let binario = Number(num).toString(2);
                let octal = Number(num).toString(8);
                let hexadecimal = Number(num).toString(16);

                alert("Resultado: " + '\n' +
                    "Valor exponencial: " + exponencial + '\n' +
                    "Cuatro decimales: " + cuatroDecimales + '\n' +
                    "Binario: " + binario + '\n' +
                    "Octal: " + octal + '\n' +
                    "Hexadecimal: " + hexadecimal);

            } else {
                alert("Debe introducir un número entero.")
            }
        }
    }


}