function Aeropuerto(nombre, ciudad) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.numVuelosDiarios = [];

    this.addVuelo = function (vuelo) {
        this.numVuelosDiarios.push(vuelo);
    }

}

function Vuelo(codigo) {
    this.codigo = codigo;
    this.horaLlegada;
    this.horaSalida;

    this.setHoraLlegada = function (horaLlegada) {
        this.horaLlegada = horaLlegada;
    }
    this.setHoraSalida = function (horaSalida) {
        this.horaSalida = horaSalida;
    }
    this.comprobarHora = function () {
        if (this.horaSalida > this.horaLlegada) {
            alert("La hora de salida " + this.horaSalida + " esta mal. Es posterior a la hora de llegada " +
                this.horaLlegada);
        } else {
            alert("la hora de salida " + this.horaSalida + " es correcta. Es anterior a la hora de llegada " +
                this.horaLlegada);
        }
    }

}

let aeropuerto = new Aeropuerto();

for (let i = 0; i < 10; i++) {
    let vuelo = new Vuelo("v" + i.toString());
    vuelo.setHoraSalida(11);
    vuelo.setHoraLlegada(12);
    aeropuerto.addVuelo(vuelo);
}

aeropuerto.numVuelosDiarios[0].setHoraSalida(13);
aeropuerto.numVuelosDiarios[0].comprobarHora();
aeropuerto.numVuelosDiarios[0].setHoraLlegada(14);
aeropuerto.numVuelosDiarios[0].comprobarHora();