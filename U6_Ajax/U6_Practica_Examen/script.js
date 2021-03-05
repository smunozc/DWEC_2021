let jsonWeb = [];
let selectCCAA = document.getElementById('selectCCAA');

document.getElementById('cargarXHR').addEventListener('click', obtenerDatosXHR);
document.getElementById('cargarFetch').addEventListener('click', obtenerDatosFetch); //Cambiar
selectCCAA.addEventListener('change', () => {

    // Este addEventListener escucha el cambio en el elemento select y pinta en la segunda tabla 
    // los valores de la seleccion

    for (let i = 0; i < jsonWeb.length; i++) {
        if (jsonWeb[i].ccaa === selectCCAA.value) {
            console.log(jsonWeb[i]);
            cargarTabla(jsonWeb[i], "tablaCCAA");
        }
    }
});

// Funcion para obtener los datos mediante peticiones con XMLHttpRequest

function obtenerDatosXHR() {
    let xhrGet = new XMLHttpRequest();
    xhrGet.onreadystatechange = function () {
        if (xhrGet.readyState == 4 && xhrGet.status == 200) {
            jsonWeb = JSON.parse(xhrGet.responseText);
            jsonWeb.pop();

            let xhrPost = new XMLHttpRequest();
            xhrPost.onreadystatechange = function () {
                if (xhrPost.readyState == 4 && xhrPost.status == 200) {
                    let result = JSON.parse(xhrPost.responseText);

                    cargarTabla(result, "tablaPeticion");
                    rellenarSelect(result);
                }
            }
            xhrPost.open("POST", "insertar_comunidades.php", true);
            xhrPost.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
            xhrPost.send(JSON.stringify(jsonWeb));
        }
    };
    xhrGet.open("GET", "https://covid-vacuna.app/data/latest.json", true);
    xhrGet.send();
}

// Funcion para obtener los datos mediante peticiones con Fetch

function obtenerDatosFetch(){
    fetch('https://covid-vacuna.app/data/latest.json')
        .then(response => response.json())
        .then(datos => {
            jsonWeb = datos;
            jsonWeb.pop();

            fetch('insertar_comunidades.php', {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(jsonWeb)
                })
                .then(response => response.json())
                .then(result => {
                    cargarTabla(result, "tablaPeticion");
                    rellenarSelect(result);

                })
                .catch(error => console.log("No se han podido subir los datos: " + error));

        })
        .catch(error => console.log("No se han podido obtener los datos: " + error));
}

// Funcion rellenar select

function rellenarSelect(json) {
    selectCCAA.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", json[i].ccaa);
        option.innerHTML = json[i].ccaa;

        selectCCAA.appendChild(option);
    }
}

// Funcion cargar tabla

function cargarTabla(datos, idDestino) {

    let table = document.getElementById(idDestino);

    table.innerHTML = "";

    let trHeader = document.createElement("tr");
    table.appendChild(trHeader);

    let th1 = document.createElement("th");
    th1.innerHTML = "Comunidad";

    let th2 = document.createElement("th");
    th2.innerHTML = "D.Entregadas";

    let th3 = document.createElement("th");
    th3.innerHTML = "D.Admin";

    let th4 = document.createElement("th");
    th4.innerHTML = "D.Completa";

    let th5 = document.createElement("th");
    th5.innerHTML = "% Entregadas";

    let th6 = document.createElement("th");
    th6.innerHTML = "% Pobl. Admin";

    let th7 = document.createElement("th");
    th7.innerHTML = "% Pobl. Completa";

    trHeader.appendChild(th1);
    trHeader.appendChild(th2);
    trHeader.appendChild(th3);
    trHeader.appendChild(th4);
    trHeader.appendChild(th5);
    trHeader.appendChild(th6);
    trHeader.appendChild(th7);

    if (idDestino === "tablaPeticion") {
        for (let i = 0; i < datos.length; i++) {

            let tr = document.createElement("tr");
            table.appendChild(tr);

            let td1 = document.createElement("td");
            td1.innerHTML = datos[i].ccaa;

            let td2 = document.createElement("td");
            td2.innerHTML = datos[i].dosisEntregadas;

            let td3 = document.createElement("td");
            td3.innerHTML = datos[i].dosisAdministradas;

            let td4 = document.createElement("td");
            td4.innerHTML = datos[i].dosisPautaCompletada;

            let td5 = document.createElement("td");
            td5.innerHTML = datos[i].porcentajeEntregadas;

            let td6 = document.createElement("td");
            td6.innerHTML = datos[i].porcentajePoblacionAdministradas;

            let td7 = document.createElement("td");
            td7.innerHTML = datos[i].porcentajePoblacionCompletas;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);

        }
    } else {

        let tr = document.createElement("tr");
        table.appendChild(tr);

        let td1 = document.createElement("td");
        td1.innerHTML = datos.ccaa;

        let td2 = document.createElement("td");
        td2.innerHTML = datos.dosisEntregadas;

        let td3 = document.createElement("td");
        td3.innerHTML = datos.dosisAdministradas;

        let td4 = document.createElement("td");
        td4.innerHTML = datos.dosisPautaCompletada;

        let td5 = document.createElement("td");
        td5.innerHTML = datos.porcentajeEntregadas;

        let td6 = document.createElement("td");
        td6.innerHTML = datos.porcentajePoblacionAdministradas;

        let td7 = document.createElement("td");
        td7.innerHTML = datos.porcentajePoblacionCompletas;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

    }

}