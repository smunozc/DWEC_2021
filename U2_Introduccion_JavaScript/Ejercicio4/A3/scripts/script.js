//Variables
var radio = prompt("Introduce el radio de la circunferencia de la base en cm",0)*1;
var altura = prompt("Introduce la altura en cm",0)*1;
var volumen;

//Condiciones
if(!isNaN(radio) && !isNaN(altura)){
    volumen = Math.PI * radio * radio * altura;
    alert("El volumen es: " + volumen);
} else {
    alert("No ha introfucido suficientes datos.");
}