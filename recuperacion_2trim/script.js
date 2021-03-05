let film = [];
let personajes = [];
let idFilm = [];
let respuestas = document.getElementById('respuestas');

document.getElementById('cargarXHR').addEventListener('click', obtenerDatosXHR);
document.getElementById('cargarFetch').addEventListener('click', obtenerDatosFetch);
document.getElementById('cargarPersonajes').addEventListener('click', obtenerDatosPersonajesFetch);

// Funcion para obtener los datos mediante peticiones con XMLHttpRequest

function obtenerDatosXHR() {
    let xhrGet = new XMLHttpRequest();
    xhrGet.onreadystatechange = function () {
        if (xhrGet.readyState == 4 && xhrGet.status == 200) {

            respuestas.innerHTML += "Respuesta de films recibida (XMLHttpRequest) <br>";
            console.log("Respuesta de films recibida (XMLHttpRequest)");

            let aux = JSON.parse(xhrGet.responseText);

            for (let i = 0; i < aux.length; i++) {
                var tempFilm = {
                    "id": "",
                    "title": "",
                    "description": "",
                    "director": "",
                    "producer": "",
                    "release_date": "",
                    "rt_score": "",
                    "url": ""
                };

                tempFilm.id = aux[i].id;
                tempFilm.title = aux[i].title;
                tempFilm.description = aux[i].description;
                tempFilm.director = aux[i].director;
                tempFilm.producer = aux[i].producer;
                tempFilm.release_date = aux[i].release_date;
                tempFilm.rt_score = aux[i].rt_score;
                tempFilm.url = aux[i].url;

                film.push(tempFilm);
            }

            let xhrPost = new XMLHttpRequest();
            xhrPost.onreadystatechange = function () {
                if (xhrPost.readyState == 4 && xhrPost.status == 200) {
                    let result = JSON.parse(xhrPost.responseText);

                    if (result[0].id !== undefined) {
                        respuestas.innerHTML += "Respuesta de insert_films.php recibida <br>";
                        console.log("Respuesta de insert_films.php recibida");
                    }

                    cargarTabla(result);
                }
            }
            xhrPost.open("POST", "insert_films.php", true);
            xhrPost.setRequestHeader('Content-Type', "application/json");
            xhrPost.send(JSON.stringify(film));
        }
    };
    xhrGet.open("GET", "https://ghibliapi.herokuapp.com/films", true);
    xhrGet.send();
}

// Funcion para obtener los datos mediante peticiones con Fetch

function obtenerDatosFetch() {
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(datos => {
            let aux = datos;

            if (aux[0].id !== undefined) {
                respuestas.innerHTML += "Respuesta de films recibida (Fetch) <br>";
                console.log("Respuesta de films recibida (Fetch)");
            }

            for (let i = 0; i < aux.length; i++) {
                var tempFilm = {
                    "id": "",
                    "title": "",
                    "description": "",
                    "director": "",
                    "producer": "",
                    "release_date": "",
                    "rt_score": "",
                    "url": ""
                };

                tempFilm.id = aux[i].id;
                tempFilm.title = aux[i].title;
                tempFilm.description = aux[i].description;
                tempFilm.director = aux[i].director;
                tempFilm.producer = aux[i].producer;
                tempFilm.release_date = aux[i].release_date;
                tempFilm.rt_score = aux[i].rt_score;
                tempFilm.url = aux[i].url;

                film.push(tempFilm);
            }

            fetch('insert_films.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(film)
                })
                .then(response => response.json())
                .then(result => {

                    if (result[0].id !== undefined) {
                        respuestas.innerHTML += "Respuesta de insert_films.php recibida <br>";
                        console.log("Respuesta de insert_films.php recibida");
                    }

                    cargarTabla(result);

                })
                .catch(error => console.log("No se han podido subir los datos: " + error));

        })
        .catch(error => console.log("No se han podido obtener los datos: " + error));
}

// Funcion para obtener los datos de personajes mediante peticiones con Fetch

function obtenerDatosPersonajesFetch() {
    fetch('https://ghibliapi.herokuapp.com/people')
        .then(response => response.json())
        .then(datos => {

            if (datos[0].id !== undefined) {
                respuestas.innerHTML += "Respuesta de people recibida <br>";
                console.log("Respuesta de people recibida");
            }

            let aux = datos;
            
            for (let i = 0; i < aux.length; i++) {

                let tempPersonaje = {
                    "id": "",
                    "name": "",
                    "gender": "",
                    "age": "",
                    "eye_color": "",
                    "hair_color": "",
                    "films": ""
                };

                tempPersonaje.id = aux[i].id;
                tempPersonaje.name = aux[i].name;
                tempPersonaje.gender = aux[i].gender;
                tempPersonaje.age = aux[i].age;
                tempPersonaje.eye_color = aux[i].eye_color;
                tempPersonaje.hair_color = aux[i].hair_color;
                tempPersonaje.films = aux[i].films;


                personajes.push(tempPersonaje);
            }

            fetch('insert_people.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(personajes)
                })
                .then(response => response.json())
                .then(result => {

                    if (result[0].id !== undefined) {
                        respuestas.innerHTML += "Respuesta de insert_people.php recibida <br>";
                        console.log("Respuesta de insert_people.php recibida");
                    }

                })
                .catch(error => console.log("No se han podido subir los datos: " + error));

        })
        .catch(error => console.log("No se han podido obtener los datos: " + error));
}

// Funcion para obtener los datos de personajes por id de pelicula mediante peticion con Fetch

function obtenerDatosPersonajesIdFilmFetch(id) {

    let filmId = {
        "id_film": id
    };

    fetch('people_by_film_id.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filmId)
        })
        .then(response => response.json())
        .then(result => {

            if (result[0].name !== undefined) {
                respuestas.innerHTML += "Respuesta de people_by_film_id.php recibida <br>";
                console.log("Respuesta de people_by_film_id.php recibida");
            }

            cargarTablaPersonajes(result);

        })
        .catch(error => console.log("No se han podido subir los datos: " + error));
}

// Funcion cargar tabla

function cargarTabla(datos) {

    let table = document.getElementById("tablaPeliculas");

    table.innerHTML = "";

    let trHeader = document.createElement("tr");
    table.appendChild(trHeader);

    let th1 = document.createElement("th");
    th1.innerHTML = "Title";

    let th2 = document.createElement("th");
    th2.innerHTML = "Description";

    let th3 = document.createElement("th");
    th3.innerHTML = "Director";

    let th4 = document.createElement("th");
    th4.innerHTML = "Producer";

    let th5 = document.createElement("th");
    th5.innerHTML = "Release Date";

    let th6 = document.createElement("th");
    th6.innerHTML = "Rt Score";

    let th7 = document.createElement("th");
    th7.innerHTML = "Button";

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
        td1.innerHTML = datos[i].title;

        let td2 = document.createElement("td");
        td2.innerHTML = datos[i].description;

        let td3 = document.createElement("td");
        td3.innerHTML = datos[i].director;

        let td4 = document.createElement("td");
        td4.innerHTML = datos[i].producer;

        let td5 = document.createElement("td");
        td5.innerHTML = datos[i].release_date;

        let td6 = document.createElement("td");
        td6.innerHTML = datos[i].rt_score;

        let td7 = document.createElement("td");
        let button = document.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", "Personajes");
        button.setAttribute("id", "fila" + i);
        button.setAttribute("class", "buttonPersonaje");

        button.addEventListener('click', () => {
            obtenerDatosPersonajesIdFilmFetch(datos[i].id);
        });

        td7.appendChild(button);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

    }

}

// Funcion cargar tabla personajes

function cargarTablaPersonajes(datos) {

    let table = document.getElementById("tablaPersonajes");

    table.innerHTML = "";

    let trHeader = document.createElement("tr");
    table.appendChild(trHeader);

    let th1 = document.createElement("th");
    th1.innerHTML = "Name";

    let th2 = document.createElement("th");
    th2.innerHTML = "Gender";

    let th3 = document.createElement("th");
    th3.innerHTML = "Age";

    let th4 = document.createElement("th");
    th4.innerHTML = "Eye Color";

    let th5 = document.createElement("th");
    th5.innerHTML = "Hair Color";

    trHeader.appendChild(th1);
    trHeader.appendChild(th2);
    trHeader.appendChild(th3);
    trHeader.appendChild(th4);
    trHeader.appendChild(th5);

    for (let i = 0; i < datos.length; i++) {

        let tr = document.createElement("tr");
        table.appendChild(tr);

        let td1 = document.createElement("td");
        td1.innerHTML = datos[i].name;

        let td2 = document.createElement("td");
        td2.innerHTML = datos[i].gender;

        let td3 = document.createElement("td");
        td3.innerHTML = datos[i].age;

        let td4 = document.createElement("td");
        td4.innerHTML = datos[i].eye_color;

        let td5 = document.createElement("td");
        td5.innerHTML = datos[i].hair_color;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

    }

}