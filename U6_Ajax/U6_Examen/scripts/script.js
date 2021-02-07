window.addEventListener("load", inicio);

var jsonWeb = "";
var table = document.getElementById("resultado");
let state = document.getElementById("state");

let ccaa = document.getElementById("select");
let dosisAdministradas = document.getElementById("dosisAdministradas");
let dosisEntregadas = document.getElementById("dosisEntregadas");
let dosisPautaCompletada = document.getElementById("dosisPautaCompletada");
let porcentajeEntregadas = document.getElementById("porcentajeEntregadas");
let porcentajePoblacionAdministradas = document.getElementById("porcentajePoblacionAdministradas");
let porcentajePoblacionCompletas = document.getElementById("porcentajePoblacionCompletas");


function inicio() {
    document.getElementById("modificar").addEventListener("click", enviarCambios);
}

function enviarCambios() {

    let json = {
        "ccaa": ccaa.value,
        "dosisEntregadas": dosisEntregadas.value,
        "dosisAdministradas": dosisAdministradas.value,
        "dosisPautaCompletada": dosisPautaCompletada.value,
        "porcentajeEntregadas": porcentajeEntregadas.value,
        "porcentajePoblacionAdministradas": porcentajePoblacionAdministradas.value,
        "porcentajePoblacionCompletas": porcentajePoblacionCompletas.value
    };

    console.log(jsonWeb);

    if (jsonWeb !== "") {
        console.log("Enviados cambios de " + ccaa.value);

        fetch('actualizar_comunidad.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json)
            })
            .then(response => response.json() /*ó function (response) {return response.json();*/ )
            .then(result => {

                console.log(result);

                for (let i = 0; i < jsonWeb.length; i++) {
                    if(jsonWeb[i].ccaa === result.ccaa){
                        jsonWeb[i].dosisEntregadas = result.dosisEntregadas;
                        jsonWeb[i].dosisAdministradas = result.dosisAdministradas;
                        jsonWeb[i].dosisPautaCompletada = result.dosisPautaCompletada;
                        jsonWeb[i].porcentajeEntregadas = result.porcentajeEntregadas;
                        jsonWeb[i].porcentajePoblacionAdministradas = result.porcentajePoblacionAdministradas;
                        jsonWeb[i].porcentajePoblacionCompletas = result.porcentajePoblacionCompletas;
                    }
                }

                if (table.innerHTML === "") {
                    cargarJSON(jsonWeb);
                } else {
                    table.innerHTML = "";
                    cargarJSON(jsonWeb);
                }

                state.innerHTML = "Tabla actualizada";

            })
            .catch(error => console.log("Request failed: " + error));
    } else {
        console.log("Aún no se han cargado datos de la Web en la BDD");
    }

}

function construirFormulario(json) {
    let select = document.getElementById("select");

    for (let i = 0; i < json.length; i++) {
        //Select
        let comunidad = json[i].ccaa;
        let option = document.createElement("option");
        option.setAttribute("value", comunidad);
        option.innerHTML = comunidad;

        select.appendChild(option);
    }
}

function cargarJSON(datos) {

    let table = document.getElementById("resultado");

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

}

let botonXHR = document.getElementById("cargarXHR");
botonXHR.addEventListener("click", () => {
    insertarComunidadesXHR();
});

let botonFetch = document.getElementById("cargarFetch");
botonFetch.addEventListener("click", () => {
    insertarComunidadesFetch();
});

function insertarComunidadesFetch() {

    fetch('https://covid-vacuna.app/data/latest.json')
        .then(response => response.json())
        .then(datos => {
            jsonWeb = datos;
            jsonWeb.pop();

            fetch('insertar_comunidades.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonWeb)
                })
                .then(response => response.json())
                .then(result => {

                    console.log(result);
                    construirFormulario(result);

                    if(table.innerHTML === ""){
                        cargarJSON(result);
                    } else {
                        table.innerHTML = "";
                        cargarJSON(result);
                    }

                    state.innerHTML = "Datos de la web descargados";

                })
                .catch(error => console.log("Request failed: " + error));

        })
        .catch(error => console.log("No se ha podido mostrar: " + error));

}

function insertarComunidadesXHR() {

    let xhrGet = new XMLHttpRequest();
    xhrGet.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            jsonWeb = JSON.parse(this.responseText);
            jsonWeb.pop();

            let xhrPost = new XMLHttpRequest();
            xhrPost.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    let result = JSON.parse(this.responseText);
                    console.log(result);
                    construirFormulario(result);
                    
                    if(table.innerHTML === ""){
                        cargarJSON(result);
                    } else {
                        table.innerHTML = "";
                        cargarJSON(result);
                    }

                    state.innerHTML = "Datos de la web descargados";

                }
            }

            xhrPost.open("POST", "insertar_comunidades.php", true);
            xhrPost.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
            );
            xhrPost.send(JSON.stringify(jsonWeb));

        }
    };

    xhrGet.open("GET", "https://covid-vacuna.app/data/latest.json", true);
    xhrGet.send();

}