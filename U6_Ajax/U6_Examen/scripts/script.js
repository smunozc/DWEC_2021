window.addEventListener("load", inicio);

var jsonWeb;

let ccaa = document.getElementById("select").value;
let dosisAdministradas = document.getElementById("dosisAdministradas").value;
let dosisEntregadas = document.getElementById("dosisEntregadas").value;
let dosisPautaCompletada = document.getElementById("dosisPautaCompletada").value;
let porcentajeEntregadas = document.getElementById("porcentajeEntregadas").value;
let porcentajePoblacionAdministradas = document.getElementById("porcentajePoblacionAdministradas").value;
let porcentajePoblacionCompletas = document.getElementById("porcentajePoblacionCompletas").value;


function inicio() {
    obtenerDatosWeb();
    document.getElementById("modificar").addEventListener("click", enviarCambios);
}

function enviarCambios() {

    let objeto = {
        ccaa: ccaa,
        dosisEntregadas: dosisEntregadas,
        dosisAdministradas: dosisAdministradas,
        dosisPautaCompletada: dosisPautaCompletada,
        porcentajeEntregadas: porcentajeEntregadas,
        porcentajePoblacionAdministradas: porcentajePoblacionAdministradas,
        porcentajePoblacionCompletas: porcentajePoblacionCompletas
    };

    fetch('actualizar_comunidad.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: objeto
            // body: "objeto=" + JSON.stringify(objeto)
        })
        .then(response => response.json() /*ó function (response) {return response.json();*/ )
        .then(result => {
            cargarJSON(result);
        })
        .catch(error => console.log("Request failed: " + error));
}

function obtenerDatosWeb() {
    fetch('https://covid-vacuna.app/data/latest.json')
        .then(response => response.json())
        .then(datos => {
            jsonWeb = datos;
            jsonWeb.pop();
            construirFormulario(jsonWeb);
        })
        .catch(error => console.log("No se ha podido mostrar: " + error));


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

// function obtenerDatosWeb() {
//     fetch('https://covid-vacuna.app/data/latest.json')
//         .then(response => response.json())
//         .then(datos => {
//             console.table(datos);
//             cargarJSON(datos);
//             //document.getElementById("resultado").innerHTML = JSON.stringify(datos);
//         })
//         .catch(error => console.log("No se ha podido mostrar: " + error));
// }

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
botonXHR.addEventListener("click",()=>{

});

let botonFetch = document.getElementById("cargarFetch");
botonFetch.addEventListener("click",()=>{
    obtenerDatosWeb();
});