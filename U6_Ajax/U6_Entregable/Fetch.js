var tabla = document.getElementById('tabla');
var jsonArmas;

document.getElementById("cargaCatalogoFetch").addEventListener("click", mostrarArmas);

function mostrarArmas() {

    if(tabla.innerHTML === ""){

        fetch('listar_armas.php')
        .then(response => response.json())
        .then(datos => {
            jsonArmas = datos;
            cargarJSON(jsonArmas);
        })
        .catch(error => console.log("No se ha podido mostrar: " + error));

    } else {
        cargarJSON(jsonArmas);
    }
    
}

function cargarJSON(datos) {
    let bando = document.getElementById('selBando').value;
    let tabla = "<tr><th>Nombre</th><th>Imagen</th><th>Descripción</th><th>Bando</th></tr>";
    let armas = datos;

    for (let i = 0; i < armas.length; i++) {
        if (armas[i].bando === bando) {

            tabla += "<tr><td><strong>";

            tabla += armas[i].nombre;

            tabla += "</strong></td><td id='celdaImagen'>";

            tabla += "<img src='" + armas[i].imagen + "' style='width:100%;'>";

            tabla += "</img></td><td>";

            tabla += armas[i].descripcion;

            tabla += "</td><td>"

            tabla += determinarBando(armas[i].bando);

            tabla += "</td></tr>";

        }
    }
    document.getElementById("tabla").innerHTML = tabla;
}

function determinarBando(bandoInt) {
    if (parseInt(bandoInt) == 1) {
        return "Aliados";
    } else if (parseInt(bandoInt) == 2) {
        return "Eje";
    }
}