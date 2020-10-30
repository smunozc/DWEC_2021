function Disco() {

    //Propiedades
    this.nombre = "";
    this.autor = "";
    this.anyoPublicacion = "";
    this.tipoMusica = "";
    this.localizacion = 0;
    this.prestado = false;

    //Métodos
    this.guardarDisco = function (nombre, autor, anyoPublicacion, tipoMusica, localizacion) {
        this.nombre = nombre;
        this.autor = autor;
        this.anyoPublicacion = anyoPublicacion;
        this.tipoMusica = tipoMusica;
        this.localizacion = localizacion;
    }

    this.setLocalizacion = function (nuevaLocalizacion) {
        this.localizacion = nuevaLocalizacion;
    }

    this.setPrestado = function (esPrestado) {
        this.prestado = esPrestado;
    }

    this.mostrarDisco = function () {
        let resul = "Nombre del disco: " + this.nombre + "\n Autor: " + this.autor +
            "\n Año de publicación: " + this.anyoPublicacion + "\n Genero: " + this.tipoMusica +
            "\n Numero de estanteria: " + this.localizacion + "\n Es prestado: " + this.prestado;

        return resul;
    }
}

let disco1 = new Disco();
disco1.guardarDisco("That's Life","Shawn James","2017","Cover",5);
let disco2 = new Disco();
disco2.guardarDisco("Hurt","Johnny Cash","2016","Cover",5);

//-----------------------------------------------PARTE ARRAYS-----------------------------------------------

var discos = [];

discos[0] = disco1;
discos[1] = disco2;

do {
    var opcion = prompt("Elige una opción: " + '\n' +
        "1. Mostrar número de discos" + '\n' +
        "2. Mostrar listado de discos" + '\n' +
        "3. Mostrar un intervalo de discos" + '\n' +
        "4. Añadir un disco" + '\n' +
        "5. Eliminar un disco" + '\n' +
        "6. Consultar un disco" + '\n' +
        "Dejar en blanco o introducir '0' para salir") * 1;
    console.log(opcion);

    if (opcion >= 1 && opcion <= 6) {

        switch (opcion) {
            case 1:
                if (hayElementos(discos)) {
                    numElementos(discos);
                }
                break;
            case 2:
                if (hayElementos(discos)) {
                    let opcion2 = prompt("Elige una opción: " + '\n' +
                        "1. Orden del array" + '\n' +
                        "2. Orden inverso" + '\n' +
                        "3. Orden alfabético") * 1;
                    switch (opcion2) {
                        case 1:
                            mostrarElementosArray(discos);
                            break;
                        case 2:
                            mostrarElementosArrayInverso(discos);
                            break;
                        case 3:
                            mostrarOrdenadoAlfabeticamente(discos);
                            break;
                        default:
                            alert("Debe introducir un número de los que se indican.");
                            break;
                    }
                }
                break;
            case 3:
                if (hayElementos(discos)) {
                    let opcion3 = prompt("Introduce el intervalo en formato inicio-fin");
                    let array = opcion3.split("-");
                    let inicio = array[0];
                    let fin = array[1];
                    mostrarIntervalo(discos, inicio, fin);
                }
                break;
            case 4:
                addNew(discos);
                break;
            case 5:
                if (hayElementos(discos)) {
                    deleteElement(discos);
                }
                break;
            case 6:
                if (hayElementos(discos)) {
                    let opcion6 = prompt("Elige una opción: " + '\n' +
                        "1. Consultar por posicion" + '\n' +
                        "2. Consultar por nombre") * 1;
                    switch (opcion6) {
                        case 1:
                            let posicion = prompt("Introduce la posicion del elemento a consultar: ") * 1;
                            mostrarElemento(discos, posicion);
                            break;
                        case 2:
                            let nombreDisco = prompt("Introduce el nombre disco que desee consultar: ");
                            mostrarElementoNombre(discos, nombreDisco);
                            break;
                        default:
                            alert("Debe introducir un número de los que se indican.");
                            break;
                    }
                }
                break;
            default:
                alert("Valor no reconocido");
                break;
        }
    } else if (opcion !== 0) {
        alert("Debe introducir un número del 1 al 6.");
    }

} while (opcion !== 0)

//Funcion para saber si hay elementos en el array
function hayElementos(array) {
    if (array.length > 0) {
        return true;
    } else {
        alert("El array está vacío");
        return false;
    }
}

//Funcion para saber el número de elementos en el array
function numElementos(array) {
    let contador = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] !== null) {
            contador++;
        }
    }
    alert("Numero de elementos en el array: " + contador);
}


function mostrarElementosArray(array) {
    let disco = new Disco();
    let cadena = "Elementos del array: " + '\n';
    for (i = 0; i < array.length; i++) {
        disco = array[i];
        cadena += (i + 1) + ": " + '\n' + disco.mostrarDisco() + '\n';
    }
    alert(cadena);

}

function mostrarElementosArrayInverso(array) {
    let disco = new Disco();
    let cadena = "Elementos del array en orden invertido: " + '\n';
    for (i = array.length - 1; i >= 0; i--) {
        disco = array[i];
        cadena += (i + 1) + ": " + '\n' + disco.mostrarDisco() + '\n';
    }
    alert(cadena);
}

function mostrarOrdenadoAlfabeticamente(array) {
    let disco = new Disco();
    let arrayAlfabetico = [];
    let arrayFinal = [];
    let contador = 0;
    let cadena = "Elementos del array ordenados alfabeticamente: " + '\n';

    //Ordenar nombres de discos
    for (i = 0; i < array.length; i++) {
        disco = array[i];
        arrayAlfabetico[i] = disco.nombre;
    }

    arrayAlfabetico.sort();

    //Meter objetos ordenados en nuevo array
    while (contador < array.length) {
        for (i = 0; i < array.length; i++) {
            disco = array[i];
            if (disco.nombre === arrayAlfabetico[contador]) {
                arrayFinal[contador] = disco;
                contador++;
            }
        }
    }

    //Mostrar array ordenado alfabéticamente
    for (i = 0; i < arrayFinal.length; i++) {
        disco = arrayFinal[i];
        cadena += (i + 1) + ": " + '\n' + disco.mostrarDisco() + '\n';
    }
    alert(cadena);
}

function addNew(array) {
    let nombreDisco = prompt("Introduce el nombre del disco.");
    let autorDisco = prompt("Introduce el autor del disco.");
    let anyoDisco = prompt("Introduce el año de publicación del disco.");
    let seleccionGenero = prompt("Introduce el género del disco.\n1.Rock\n2.Pop\n3.Funk\n4.Indie");
    let generoDisco;
    switch(seleccionGenero){
        case 1:
            generoDisco = "Rock";
            break;
        case 2:
            generoDisco = "Pop";
            break;
        case 3:
            generoDisco = "Funk";
            break;
        case 4:
            generoDisco = "Indie";
            break;
        default:
            generoDisco = "Rock";
            alert("No se ha introducido un numero correcto, estableciendo valor por defecto 'Rock'");
    }
    let localizacionDisco = prompt("Introduce la estanteria del disco.");
    let nuevoDisco = new Disco();
    nuevoDisco.guardarDisco(nombreDisco, autorDisco, anyoDisco, generoDisco, localizacionDisco);

    let opcion = prompt("Donde desea introducirlo en la lista: " + '\n' +
        "1. Añadir al principio" + '\n' +
        "2. Añadir al final") * 1;
    switch (opcion) {
        case 1:
            array.unshift(nuevoDisco);
            break;
        case 2:
            array.push(nuevoDisco);
            break;
        default:
            alert("Debe introducir un número de los que se indican.");
            break;
    }
}

function deleteElement(array) {
    let opcion = prompt("Que elemento desea eliminar: " + '\n' +
        "1. Eliminar al principio" + '\n' +
        "2. Eliminar al final") * 1;
    switch (opcion) {
        case 1:
            array.splice(0, 1);
            break;
        case 2:
            array.pop();
            break;
        default:
            alert("Debe introducir un número de los que se indican.");
            break;
    }
}

function mostrarElemento(array, posicion) {
    let position = posicion - 1;
    let elemento = new Disco();
    if (position >= 0 && position < array.length) {
        for (i = 0; i < array.length; i++) {
            if (i === position) {
                elemento = array[i];
            }
        }
        alert("Elemento en la posicion " + posicion + ": " + '\n' +
            elemento.mostrarDisco());
    } else {
        alert("La posicion indicada se sale del array.")
    }
}

function mostrarElementoNombre(array, nombreDisco) {
    let disco = new Disco();
    
    for (i = 0; i < array.length; i++) {
        disco = array[i];
        if (disco.nombre === nombreDisco) {
            alert("\n Datos del disco seleccionado: \n" + disco.mostrarDisco());
        }
    }    
}

function mostrarPosicion(array, nombreDisco) {
    let disco = new Disco();
    for (i = 0; i < array.length; i++) {
        disco = array[i];
        if (disco.nombre == nombreDisco) {
            alert("La posición de " + nombreDisco + " en el array es: " + (i + 1));
        }
    }
}

function mostrarIntervalo(array, inicio, fin) {
    let disco = new Disco();
    let start = inicio - 1;
    let end = fin - 1;
    if (start >= 0 && end < array.length) {
        let cadena = "Elementos del intervalo: " + '\n';
        for (i = start; i <= end; i++) {
            disco = array[i]
            cadena += (i + 1) + ": " + disco.mostrarDisco() + '\n';
        }
        alert(cadena);
    } else {
        alert("El intervalo se sale del numero de elementos del array.");
    }
}