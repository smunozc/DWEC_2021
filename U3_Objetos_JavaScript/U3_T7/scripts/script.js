/*Calculos*/
function calculoImc() {
    let peso = document.getElementById("input1").value;
    let altura = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = "Resultado: " + imc(peso, altura);
}

function calculoFcm() {
    let numero = document.getElementById("input1").value;
    let edad = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = "Resultado: " + fcm(numero, edad);
}

/*Funciones con la formula de cada calculo*/
function imc(peso, altura) {
    let alturaMetros = altura / 100;
    let resultado = parseFloat(peso / (Math.pow(alturaMetros, 2))).toFixed(2);
    return resultado;
}

function fcm(num, age) {
    return num - age;
}

/*Funcion que cambia la disponibilidad de campos y algunos de sus valores dependiendo de los selectores*/
function selector() {

    let selection = document.getElementById("typeSelection").selectedIndex;
    let selectionValue = document.getElementById("typeSelection").options[selection].value;

    if (selectionValue === "IMC") {

        //Habilitar input1 y vaciar contenido
        document.getElementById("input1").disabled = false;

        //Vaciar contenidos
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        document.getElementById("result").innerHTML = "";

        //Desactivar calculo de FCM / Seleccion de genero, activar calculo de IMC
        document.getElementById("fcmBtn").disabled = true;
        document.getElementById("imcBtn").disabled = false;
        document.getElementById("genderSelection").disabled = true;

        //Cambiar contenido de etiquetas de los input
        document.getElementById("label1").innerHTML = "Peso (kg)";
        document.getElementById("label2").innerHTML = "Altura (cm)";

    } else if (selectionValue === "FCM") {

        let genderSelection = document.getElementById("genderSelection").selectedIndex;
        let selectionValue = document.getElementById("genderSelection").options[genderSelection].value;

        //Deshabilitar input1 y establecer contenido
        document.getElementById("input1").disabled = true;
        if (selectionValue === "Male") {
            document.getElementById("input1").value = "220";
        } else if (selectionValue === "Female") {
            document.getElementById("input1").value = "226";
        }

        //Vaciar contenidos
        document.getElementById("input2").value = "";
        document.getElementById("result").innerHTML = "";

        //Desactivar calculo de IMC, activar calculo de IMC / seleccion de genero
        document.getElementById("imcBtn").disabled = true;
        document.getElementById("fcmBtn").disabled = false;
        document.getElementById("genderSelection").disabled = false;

        //Cambiar contenido de etiquetas de los input
        document.getElementById("label1").innerHTML = "";
        document.getElementById("label2").innerHTML = "Edad";

    }
}