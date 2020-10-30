var paises = ["España", "Portugal", "Francia", "Italia", "EEUU"];

do {
    var opcion = prompt("Elige una opción: " + '\n' +
        "1. Mostrar número de paises" + '\n' +
        "2. Mostrar listado de países" + '\n' +
        "3. Mostrar un intervalo de países" + '\n' +
        "4. Añadir un país" + '\n' +
        "5. Eliminar un país" + '\n' +
        "6. Consultar un país" + '\n' +
        "Dejar en blanco o introducir '0' para salir") * 1;
    console.log(opcion);

    if (opcion >= 1 && opcion <= 6) {

        switch (opcion) {
            case 1:
                numElementos(paises);
                break;
            case 2:
                let opcion2 = prompt("Elige una opción: " + '\n' +
                    "1. Orden del array" + '\n' +
                    "2. Orden inverso" + '\n' +
                    "3. Orden Alfabético") * 1;
                switch (opcion2) {
                    case 1:
                        mostrarElementosArray(paises);
                        break;
                    case 2:
                        mostrarElementosArrayInverso(paises);
                        break;
                    case 3:
                        mostrarOrdenadoAlfabeticamente(paises);
                        break;
                    default:
                        alert("Debe introducir un número de los que se indican.");
                        break;
                }
                break;
            case 3:
                let opcion3 = prompt("Introduce el intervalo en formato inicio-fin");
                let array = opcion3.split("-");
                let inicio = array[0];
                let fin = array[1];
                mostrarIntervalo(paises, inicio, fin);
                break;
            case 4:
                let opcion4 = prompt("Elige una opción: " + '\n' +
                    "1. Añadir al principio" + '\n' +
                    "2. Añadir al final") * 1;
                switch (opcion4) {
                    case 1:
                        let addPrincipio = prompt("Introduce el país que desea introducir al principio.");
                        addFirst(paises, addPrincipio);
                        break;
                    case 2:
                        let addFinal = prompt("Introduce el país que desea introducir al final.");
                        addEnd(paises, addFinal);
                        break;
                    default:
                        alert("Debe introducir un número de los que se indican.");
                        break;
                }
                break;
            case 5:
                let opcion5 = prompt("Elige una opción: " + '\n' +
                    "1. Eliminar al principio" + '\n' +
                    "2. Eliminar al final") * 1;
                switch (opcion5) {
                    case 1:
                        deleteFirst(paises);
                        break;
                    case 2:
                        deleteEnd(paises);
                        break;
                    default:
                        alert("Debe introducir un número de los que se indican.");
                        break;
                }
                break;
            case 6:
                let opcion6 = prompt("Elige una opción: " + '\n' +
                    "1. Consultar por posicion" + '\n' +
                    "2. Consultar por nombre") * 1;
                switch (opcion6) {
                    case 1:
                        let posicion = prompt("Introduce la posicion del elemento a consultar: ") * 1;
                        mostrarElemento(paises, posicion);
                        break;
                    case 2:
                        let pais = prompt("Introduce el país del que desee saber su posición: ");
                        mostrarPosicion(paises, pais);
                        break;
                    default:
                        alert("Debe introducir un número de los que se indican.");
                        break;
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

function numElementos(array) {
    let contador = 0;
    if (array.length > 0) {
        for (i = 0; i < array.length; i++) {
            if (array[i] !== null) {
                contador++;
            }
        }
        alert("Numero de objetos en el array: " + contador);
    }
}

function mostrarElementosArray(array) {
    let cadena = "Elementos del array: " + '\n';
    for (i = 0; i < array.length; i++) {
        cadena += (i + 1) + ": " + array[i] + '\n';
    }
    alert(cadena);
}

function mostrarElementosArrayInverso(array) {
    let cadena = "Elementos del array en orden invertido: " + '\n';
    for (i = array.length - 1; i >= 0; i--) {
        cadena += (i + 1) + ": " + array[i] + '\n';
    }
    alert(cadena);
}

function mostrarOrdenadoAlfabeticamente(array) {
    let arrayAlfabetico = [];
    let cadena = "Elementos del array ordenados alfabeticamente: " + '\n';

    for (i = 0; i < array.length; i++) {
        arrayAlfabetico[i] = array[i];
    }

    arrayAlfabetico.sort();

    for (i = 0; i < array.length; i++) {
        cadena += (i + 1) + ": " + arrayAlfabetico[i] + '\n';
    }
    alert(cadena);
}

function addFirst(array, elemento) {
    array.unshift(elemento);
    let cadena = "Elemento añadido al principio: " + elemento + '\n' + "Array ahora: " + '\n';
    for (i = 0; i < array.length; i++) {
        cadena += (i + 1) + ": " + array[i] + '\n';
    }
    alert(cadena);
}

function addEnd(array, elemento) {
    array.push(elemento);
    let cadena = "Elemento añadido al final: " + elemento + '\n' + "Array ahora: " + '\n';
    for (i = 0; i < array.length; i++) {
        cadena += (i + 1) + ": " + array[i] + '\n';
    }
    alert(cadena);
}

function deleteFirst(array) {
    let cadena = "Elemento eliminado al principio: " + array[0] + '\n' + "Array ahora: " + '\n';
    array.splice(0, 1);
    for (i = 0; i < array.length; i++) {
        cadena += (i + 1) + ": " + array[i] + '\n';
    }
    alert(cadena);
}

function deleteEnd(array) {
    let cadena = "Elemento eliminado al final: " + array[array.length - 1] + '\n' + "Array ahora: " + '\n';
    array.pop();
    for (i = 0; i < array.length; i++) {
        cadena += (i + 1) + ": " + array[i] + '\n';
    }
    alert(cadena);
}

function mostrarElemento(array, posicion) {
    let position = posicion - 1;
    let elemento = "";
    if(position >= 0 && position < array.length){
        for(i=0;i<array.length;i++){
            if(i === position){
                elemento = array[i];
            }
        }
        alert("Elemento en la posicion " + posicion + ": " + '\n' +
            elemento);
    } else {
        alert("La posicion indicada se sale del array.")
    }
}

function mostrarPosicion(array, element) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == element) {
            alert("La posición de " + element + " en el array es: " + (i + 1));
        }
    }
}

function mostrarIntervalo(array, inicio, fin) {
    let start = inicio - 1;
    let end = fin - 1;
    if(start >= 0 && end < array.length){
        let cadena = "Elementos del intervalo: " + '\n';
        for (start; start <= end; start++) {
            cadena += (start + 1) + ": " + array[start] + '\n';
        }
        alert(cadena);
    } else {
        alert("El intervalo se sale del numero de elementos del array.");
    }
}