var nombre = prompt("¿Cómo te llamas?");
var edad = prompt("¿Cuantos años tienes?");
var diasVividos;
var mayorMenor;

if(nombre !== null && edad !== null){
    if(edad >= 18){
        mayorMenor = "mayor";
    } else {
        mayorMenor = "menor";
    }
    diasVividos = edad * 365;
    alert("Hola " + nombre + '\n' + "Eres " + mayorMenor + " de edad y has vivido " + diasVividos + " días.")
} else {
    alert("No ha introducido correctamente los datos.")
}