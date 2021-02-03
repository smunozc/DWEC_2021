var tabla = document.getElementById('tabla');
var jsonArmas;

document.getElementById("cargaCatalogo").addEventListener("click", cargarCatalogo);

function cargarCatalogo() {
    if (tabla.innerHTML === "") {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                jsonArmas = JSON.parse(xhr.responseText);
                cargarJSON(jsonArmas);
            }
        };
        xhr.open("GET", "listar_armas.php", true);
        xhr.send();
    } else {
        cargarJSON(jsonArmas);
    }

}

function cargarJSON(json) {
    let bando = document.getElementById('selBando').value;
    let tabla = "<tr><th>Nombre</th><th>Imagen</th><th>Descripción</th><th>Bando</th></tr>";
    let armas = json;
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