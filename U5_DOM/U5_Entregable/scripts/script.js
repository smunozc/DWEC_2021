//Elementos del formulario

let columns = document.getElementById('cols');
let rows = document.getElementById('rows');
let header = document.getElementById('hasHeader');
let defaultText = document.getElementById('default');
let borderWidth = document.getElementById('borderWidth');
let borderColor = document.getElementById('borderColor');

let boton = document.getElementById('send');

//Generar tabla en caso de que el usuario presione el boton de enviar

boton.addEventListener('click', () => {

    if (columns.value !== '' && rows.value !== '' && borderWidth.value !== '') {

        if (!isNaN(parseInt(columns.value)) && !isNaN(parseInt(rows.value)) && !isNaN(parseInt(borderWidth.value))) {

            let contenedor = document.createElement('div');
            let barra1 = document.createElement('hr');
            let barra2 = document.createElement('hr');
            let tabla = document.createElement('table');
            tabla.setAttribute('id', 'tabla');

            document.body.appendChild(barra1);
            document.body.appendChild(contenedor);
            contenedor.appendChild(tabla);
            document.body.appendChild(barra2);

            tabla.style.border = borderWidth.value + 'px solid ' + borderColor.value;
            tabla.style.borderCollapse = 'collapse';

            for (let i = 0; i < rows.value; i++) {
                let row = document.createElement('tr');

                tabla.appendChild(row);

                for (let j = 0; j < columns.value; j++) {
                    if (i === 0 && header.checked) {

                        let header = document.createElement('th');
                        header.style.border = borderWidth.value + 'px solid ' + borderColor.value;
                        row.appendChild(header);

                        if (defaultText.value !== '') {
                            header.innerHTML = defaultText.value;
                        }

                    } else {

                        let data = document.createElement('td');
                        data.style.border = borderWidth.value + 'px solid ' + borderColor.value;
                        row.appendChild(data);

                        if (defaultText.value !== '') {
                            data.innerHTML = defaultText.value;
                        }

                    }
                }

            }

        } else {
            console.log('Hay campos numericos con texto');
        }

    } else {
        console.log("Hay campos importantes vacios");
    }

});