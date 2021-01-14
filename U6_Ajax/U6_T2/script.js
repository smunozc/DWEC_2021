let localidad = document.getElementById("localidad");
let url = "http://localhost:8090/U6_Ajax/U6_T2/localidad.php";
let paramLocalidad = "?localidad=";
document.getElementById("botonBuscar").addEventListener("click", lanzar_peticion, true);

function lanzar_peticion() {
  miXHR = new XMLHttpRequest();
  console.log(url + paramLocalidad + localidad.value);
  cargarAsync(url + paramLocalidad + localidad.value);
}

function cargarAsync(url) {
  if (miXHR) {
    document.getElementById("indicador").innerHTML = "<img src='./img/ajax-loader.gif' style='width:5%;'/>";

    console.log(miXHR.readyState);
    miXHR.open("GET", url, true);
    console.log(miXHR.readyState);
    miXHR.onreadystatechange = estadoPeticion;
    miXHR.send(null);
    console.log("justo después del send");
  }

  function estadoPeticion() {
    console.log(miXHR.readyState);
    if (miXHR.readyState == 4 && miXHR.status == 200) {
      document.getElementById("indicador").innerHTML = "";
      document.getElementById("resultado").innerHTML = miXHR.responseText;
    }
  }
}