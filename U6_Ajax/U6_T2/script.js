//Hay que arreglarlo

document.getElementById("botonBuscar").addEventListener("click", lanzar_peticion, true);

function lanzar_peticion() {
  miXHR = new XMLHttpRequest();
  cargarAsync("localidad.php");
}

function cargarAsync(url) {
  if (miXHR) {
    document.getElementById("indicador").innerHTML = "<img src='./img/ajax-loader.gif'/>";

    console.log(miXHR.readyState);

    miXHR.open("GET", "http://localhost:8090/U6_Ajax/U6_T2/localidad.php", true);
    console.log(miXHR.readyState);
    
    miXHR.onreadystatechange = estadoPeticion;
    
    miXHR.send(null);
    console.log("justo después del send");
  }

  // Se llama en cada cambio de estado de la petición.
  // 1. readyState == 4 cuando la petición ha terminado.
  // 2. Status == 200 encontrado; ==404 no encontado…
  function estadoPeticion() {
    console.log(miXHR.readyState);
    if (miXHR.readyState == 4 && miXHR.status == 200) {
      document.getElementById("indicador").innerHTML = "";
      document.getElementById("resultado").innerHTML = miXHR.responseText;
    }
  }
}