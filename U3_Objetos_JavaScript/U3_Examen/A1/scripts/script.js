function Carta() {
    this.palo;
    this.valor;

    this.darValor = (palo, valor) => {
        if ((palo >= 1 && palo <= 4) && (valor >= 1 && valor <= 10)) {
            this.palo = palo;
            this.valor = valor;
        }
    }

    this.toString = () => {
        let cadena = "";
        switch (this.valor) {

            case 1:
                cadena += "As "
                switch (this.palo) {
                    case 1:
                        cadena += "de Oros";
                        break;
                    case 2:
                        cadena += "de Copas";
                        break;
                    case 3:
                        cadena += "de Espadas";
                        break;
                    case 4:
                        cadena += "de Bastos";
                        break;
                    default:
                        cadena += "de Desconocido";
                        break;
                }
                break;

            case 8:
                cadena += "Sota "
                switch (this.palo) {
                    case 1:
                        cadena += "de Oros";
                        break;
                    case 2:
                        cadena += "de Copas";
                        break;
                    case 3:
                        cadena += "de Espadas";
                        break;
                    case 4:
                        cadena += "de Bastos";
                        break;
                    default:
                        cadena += "de Desconocido";
                        break;
                }
                break;

            case 9:
                cadena += "Caballo "
                switch (this.palo) {
                    case 1:
                        cadena += "de Oros";
                        break;
                    case 2:
                        cadena += "de Copas";
                        break;
                    case 3:
                        cadena += "de Espadas";
                        break;
                    case 4:
                        cadena += "de Bastos";
                        break;
                    default:
                        cadena += "de Desconocido";
                        break;
                }
                break;

            case 10:
                cadena += "Rey "
                switch (this.palo) {
                    case 1:
                        cadena += "de Oros";
                        break;
                    case 2:
                        cadena += "de Copas";
                        break;
                    case 3:
                        cadena += "de Espadas";
                        break;
                    case 4:
                        cadena += "de Bastos";
                        break;
                    default:
                        cadena += "de Desconocido";
                        break;
                }
                break;

            default:
                cadena += this.valor + " ";
                switch (this.palo) {
                    case 1:
                        cadena += "de Oros";
                        break;
                    case 2:
                        cadena += "de Copas";
                        break;
                    case 3:
                        cadena += "de Espadas";
                        break;
                    case 4:
                        cadena += "de Bastos";
                        break;
                    default:
                        cadena += "de Desconocido";
                        break;
                }
                break;
        }
        return cadena;
    }

}

function Baraja() {
    this.cartas = new Array(40);

    this.construccion = (carta) => {
        for (let i = 0; i < 40; i++) {
            if (carta.palo === 1) {
                this.cartas[carta.valor] = carta;
            } else if (carta.palo === 2) {
                this.cartas[carta.valor] = carta;
            } else if (carta.palo === 3) {
                this.cartas[carta.valor] = carta;
            } else if (carta.palo === 4) {
                this.cartas[carta.valor] = carta;
            }
        }
    }

    this.barajar = () => {

    }

    this.toString = () => {
        let cadena = "";
        for(let i = 0; i < this.cartas.length; i++){
            cadena += this.cartas[i].toString() + "\n";
        }
        return cadena;
    }
}

let baraja1 = new Baraja();

for (let i = 1; i <= 4; i++) {
    let carta = new Carta();
    for (let j = 1; j <= 10; j++) {
        if (i === 1) {
            carta.darValor(1, j);
            console.log(carta.toString());
            baraja1.construccion(carta);
        } else if (i === 2) {
            carta.darValor(2, j);
            console.log(carta.toString());
            baraja1.construccion(carta);
        } else if (i === 3) {
            carta.darValor(3, j);
            console.log(carta.toString());
            baraja1.construccion(carta);
        } else if (i === 4) {
            carta.darValor(4, j);
            console.log(carta.toString());
            baraja1.construccion(carta);
        }
    }
}

let barajaDiv = document.getElementById("baraja");
barajaDiv.innerHTML = baraja1.toString();