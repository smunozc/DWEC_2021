function Bandeja() {
    this.tipoPastel;
    this.variedadPastel;
    this.cantidad;
    this.horaElaboracion;
    this.horaVenta;

    function Bandeja(tipoPastel, variedadPastel, cantidad, horaElaboracion) {
        this.tipoPastel = tipoPastel;
        this.variedadPastel = variedadPastel;
        this.cantidad = cantidad;
        this.horaElaboracion = horaElaboracion;
        this.horaVenta = horaVenta;
    }

    this.tiempoVenta = () => {
        let diferencia = this.horaElaboracion.valueOf() - this.horaVenta.valueOf();
        let fechaDiferencia = new Date(diferencia);
        return fechaDiferencia.getHours() + ":" + fechaDiferencia.getMinutes() + ":" + fechaDiferencia.getSeconds();
    }

    this.restar = (cantidadARestar) => {
        if (this.cantidad >= cantidadARestar) {
            this.cantidad -= cantidadARestar;
        } else {
            this.cantidad = 0;
        }
    }

    this.toString = () => {
        let cadena = "tipo: " + this.tipoPastel + ", variedad: " + this.variedadPastel +
            ", cantidad: " + this.cantidad + ", hora de elaboración: " + this.horaElaboracion.getHours +
            ":" + this.horaElaboracion.getMinutes + ":" + this.horaElaboracion.getSeconds
    }
}

const tipoDulce = {
    Caracolas: {
        Crema: 'Caracolas.crema',
        Chocolate: 'Caracolas.chocolate'
    },
    Tocinos: {
        Con: 'Tocinos.ConAzucar',
        Sin: 'Tocinos.SinAzucar'
    },
    Rignoncitos: {
        Negro: 'Rignoncitos.Negro',
        Blanco: 'Rignongcitos.Blanco'
    },
    Milhojas: {
        Caramelo: 'Milhojas.Caramelo',
        Vainilla: 'Milhojas.Vainilla',
        Chocolate: 'Milhojas.Chocolate'
    }
}

function LaPlata() {
    this.mostrador = [];

    this.ponerEnMostrador = (bandeja) => {
        let aux = 0;
        for(let i = 0; i < mostrador.length; i++) {
            if(mostrador[i].tipoPastel === bandeja.tipoPastel && mostrador[i].variedadPastel === bandeja.variedadPastel) {
                aux++;
            }
        }
        if (aux === 0) {
            mostrador.push(bandeja);
        }
    };

    this.venderPastel = (tipoPastel, variedadPastel, cantidad, ) => {
        
    };

}