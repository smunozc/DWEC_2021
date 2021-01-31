window.addEventListener("load", inicio);

function inicio() {
    mostrarSeries();
    document.getElementById("mostrar").addEventListener("click", mostrar);
}

function mostrar() {
    let inputTitulo = document.getElementById("titulo").value;
    let inputDirector = document.getElementById("director").value;
    let inputCadena = document.getElementById("cadena").value;
    let inputAnyo = document.getElementById("anyo").value;
    let inputTerminada = document.getElementById("terminada").checked;

    let objeto = {
        titulo: inputTitulo,
        director: inputDirector,
        cadena: inputCadena,
        anyo: parseInt(inputAnyo),
        terminada: inputTerminada
    };

    fetch('create_serie.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "objeto=" + JSON.stringify(objeto)
        })
        .then(response => response.json() /*ó function (response) {return response.json();*/ )
        .then(result => {
            if (result === "ok") mostrarSeries();
        })
        .catch(error => console.log("Request failed: " + error));
}

function mostrarSeries() {
    fetch('listar_series.php')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            cargarJSON(datos);
            //document.getElementById("resultado").innerHTML = JSON.stringify(datos);
        })
        .catch(error => console.log("No se ha podido mostrar: " + error));
}

function cargarJSON(datos) {
    let tabla = "<tr><th>Título</th><th>Cadena</th><th>Director</th><th>Año</th><th>Terminada</th></tr>";
    let series = datos;
    for (let i = 0; i < series.length; i++) {
        tabla += "<tr><td><strong>";

        tabla += series[i].titulo;

        tabla += "</strong></td><td>";

        tabla += series[i].cadena;

        tabla += "</td><td><i>";

        tabla += series[i].director;

        tabla += "</i></td><td>";

        if (series[i].anyo < 2001) {

            let year = series[i].anyo;
            tabla += "<p class='rojo'>" + year + "</p>";

        } else if (series[i].anyo >= 2001 && series[i].anyo <= 2010) {

            let year = series[i].anyo;
            tabla += "<p class='amarillo'>" + year + "</p>";

        } else if (series[i].anyo > 2011) {

            let year = series[i].anyo;
            tabla += "<p class='verde'>" + year + "</p>";

        }

        tabla += "</td><td id='celdaImagen'>";

        let src = determinarImagen(series[i].terminada);
        tabla += "<img src='" + src + "' style='width:100%;'>";

        tabla += "</img></td></tr>";
    }
    document.getElementById("resultado").innerHTML = tabla;
}

function determinarImagen(estadoFinalizada) {
    if (estadoFinalizada == "1") {
        return "./img/Si.jpg";
    } else if (estadoFinalizada == "0") {
        return "./img/No.jpg";
    }
}