let cadena = prompt("Introduce cadena de texto.");
let parrafo = document.getElementById("parrafo");
let parrafo2 = document.getElementById("parrafoModificado");

parrafo.innerHTML = cadena;
parrafo2.innerHTML = cambiarContenido(cadena);



function cambiarContenido(string) {
    let cadena2 = "";
    for (let i = 0; i < string.length; i++) {
        let probabilidad = Math.floor((Math.random() * 100));
        if(probabilidad < 50){
            cadena2 += string.charAt(i).toUpperCase();
        } else {
            cadena2 += string.charAt(i).toLowerCase();
        }
    }
    let cadena3 = cadena2.replaceAll(" ", "-");
    console.log(cadena3);
    return cadena3;
}