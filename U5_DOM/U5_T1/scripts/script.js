let infoDiv = document.createElement('div');
infoDiv.setAttribute('id', 'info');
document.body.appendChild(infoDiv);

var info = document.getElementById('info');
info.innerHTML = "------------------------------------------- <br><br>";

parrafos(info);
contenidoParrafo(info, 2);

enlaces(info);
direccionEnlace(info, 1);
direccionPenultimoEnlace(info);
numeroDeEnlacesQueApuntanA(info);
numeroEnlacesPrimerParrafo(info);

//PARRAFOS
function parrafos(element) {
    let parrafos = document.getElementsByTagName('p');
    element.innerHTML += 'Número de parrafos: ' + parrafos.length + '<br><br>';
}

function contenidoParrafo(element, numParrafo) {
    let parrafos = document.getElementsByTagName('p');
    element.innerHTML += 'Contenido del párrafo: ' + parrafos[numParrafo - 1].innerHTML + '<br><br>';
}

//ENLACES
function enlaces(element) {
    let enlaces = document.getElementsByTagName('a');
    element.innerHTML += 'Número de enlaces = ' + enlaces.length + '<br><br>';
}

function direccionEnlace(element, numEnlace) {
    let enlaces = document.getElementsByTagName('a');
    element.innerHTML += 'Dirección del enlace: ' + enlaces[numEnlace - 1].getAttribute('href') + '<br><br>';
}

function direccionPenultimoEnlace(element) {
    let enlaces = document.getElementsByTagName('a');
    element.innerHTML += 'Dirección del penúltimo enlace: ' + enlaces[enlaces.length - 2].getAttribute('href') + '<br><br>';
}

function numeroDeEnlacesQueApuntanA(element){
    let enlaces = document.getElementsByTagName('a');
    let cont = 0;
    for(let i = 0; i < enlaces.length; i++){
        if(enlaces[i].getAttribute('href') === '/wiki/Municipio'){
            cont++;
        }
    }
    element.innerHTML += 'Número enlaces que apuntan a /wiki/Municipio: ' + cont + '<br><br>';
}

function numeroEnlacesPrimerParrafo(element){
    let primerParrafo = document.getElementsByTagName('p')[0];
    let enlacesPrimerParrafo = primerParrafo.getElementsByTagName('a');
    element.innerHTML += 'Número enlaces primer párrafo: ' + enlacesPrimerParrafo.length + '<br><br>';
}