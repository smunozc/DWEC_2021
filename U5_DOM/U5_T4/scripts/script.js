var form = document.getElementById('form');


//Evento click para el boton de input de texto
document.getElementById('texto').addEventListener('click', () => {

    let name = prompt("Introduce el nombre del input");

    if (name !== "" && name !== null) {
        let group = document.createElement('div');
        group.classList.add('input-group', 'mb-3');

        form.appendChild(group);

        let span = document.createElement('span');
        span.setAttribute('id', 'tag');
        span.classList.add('input-group-text');
        span.innerHTML = name;

        group.appendChild(span);

        let element = document.createElement('input');
        element.setAttribute('name', name);
        element.setAttribute('type', 'text');
        element.setAttribute('placeholder', 'Text');
        element.setAttribute('aria-label', 'Text');
        element.setAttribute('aria-describedby', 'tag');
        element.classList.add('form-control');

        group.appendChild(element);
    }

});


//Evento click para el boton de input de contraseña
document.getElementById('password').addEventListener('click', () => {

    let name = prompt("Introduce el nombre del input");

    if (name !== "" && name !== null) {
        let group = document.createElement('div');
        group.classList.add('input-group', 'mb-3');

        form.appendChild(group);

        let span = document.createElement('span');
        span.setAttribute('id', 'tag');
        span.classList.add('input-group-text');
        span.innerHTML = name;

        group.appendChild(span);

        let element = document.createElement('input');
        element.setAttribute('name', name);
        element.setAttribute('type', 'password');
        element.setAttribute('placeholder', 'Password');
        element.setAttribute('aria-label', 'Text');
        element.setAttribute('aria-describedby', 'tag');
        element.classList.add('form-control');

        group.appendChild(element);
    }

});


//Evento click para el boton de textarea
document.getElementById('textarea').addEventListener('click', () => {

    let name = prompt("Introduce el nombre del input");

    if (name !== "" && name !== null) {
        let group = document.createElement('div');
        group.classList.add('input-group', 'mb-3');

        form.appendChild(group);

        let span = document.createElement('span');
        span.setAttribute('id', 'tag');
        span.classList.add('input-group-text');
        span.innerHTML = name;

        group.appendChild(span);

        let element = document.createElement('textarea');
        element.setAttribute('name', name);
        element.setAttribute('placeholder', 'Text');
        element.setAttribute('aria-label', 'Text');
        element.setAttribute('aria-describedby', 'tag');
        element.classList.add('form-control');

        group.appendChild(element);
    }

});


//Evento click para el boton de label
document.getElementById('label').addEventListener('click', () => {

    let labelFor = prompt("Introduce a que input se dirige");
    let content = prompt("Introduce el contenido");
    let exists = false;
    let existentElement = null;

    //Si el prompt no esta vacio continua
    if ((labelFor !== "" && content !== "") && (labelFor !== null && content !== null)) {

        //Si el formulario ya tiene nodos hijos
        if (form.children.length > 0) {

            //Recorre el formulario
            for (i = 0; i < form.children.length; i++) {

                //Si el elemento actual no es una etiqueta label
                if (form.children[i].tagName.toLowerCase() !== "label" && form.children[i].tagName.toLowerCase() !== "figure") {

                    let auxElement = null;
                    //Para coger un elemento si es un input o un textarea.
                    if (form.children[i].getElementsByTagName('input')[0] !== undefined) {
                        auxElement = form.children[i].getElementsByTagName('input')[0];
                    } else if (form.children[i].getElementsByTagName('textarea') !== undefined) {
                        auxElement = form.children[i].getElementsByTagName('textarea')[0];
                    }

                    //Para verificar que solo se lea el atributo name de inputs o textareas
                    if (auxElement !== null) {
                        let name = auxElement.getAttribute('name');

                        //Si el atributo 'name' del input coincide con el name asignado significa que ya existe y el label debe colocarse antes de este.
                        if (name === labelFor) {
                            exists = true;
                            existentElement = form.children[i];
                        }
                    }
                }
            }

            //Si existe un input con el name asignado a la etiqueta
            if (exists) {

                //Comprueba si el input tiene un nodo hermano antes
                if (existentElement.previousElementSibling !== null) {

                    //Comprueba si el nodo hermano anterior es una etiqueta 'label'
                    if (existentElement.previousElementSibling.tagName.toLowerCase() === 'label') {
                        existentElement.previousElementSibling.innerHTML = content;

                    } else {

                        let element = document.createElement('label');
                        element.setAttribute('for', labelFor);
                        element.innerHTML = content;

                        form.insertBefore(element, existentElement);

                    }

                } else {

                    let element = document.createElement('label');
                    element.setAttribute('for', labelFor);
                    element.innerHTML = content;

                    form.insertBefore(element, existentElement);

                }

            } else {

                let element = document.createElement('label');
                element.setAttribute('for', labelFor);
                element.innerHTML = content;

                form.appendChild(element);

            }

        } else {

            let element = document.createElement('label');
            element.setAttribute('for', labelFor);
            element.innerHTML = content;

            form.appendChild(element);

        }

    }
});


//Evento click para el boton de imagen
document.getElementById('imagen').addEventListener('click', () => {

    let src = prompt("Introduce la ruta de la imagen");
    let text = prompt("Introduce un texto de pie de imagen");

    if (src !== "" && src !== null) {
        let figure = document.createElement('figure');
        figure.classList.add('figure', 'mb-3');

        form.appendChild(figure);

        let img = document.createElement('img');
        img.setAttribute('src', src);
        img.classList.add('figure-img', 'img-fluid', 'rounded');

        figure.appendChild(img);

        let caption = document.createElement('figcaption');
        caption.classList.add('figure-caption', 'text-end');
        caption.innerHTML = text;

        figure.appendChild(caption);
    }

});


//Evento click para el boton de checkbox
document.getElementById('checkbox').addEventListener('click', () => {

    let num = prompt("Introduce la cantidad de opciones del checkbox");

    if (num !== "" && num !== null) {
        let group = document.createElement('div');
        group.setAttribute('role', 'group');
        group.setAttribute('aria-label', 'Basic checkbox toggle button group');
        group.classList.add('btn-group', 'mb-3');

        form.appendChild(group);

        for (i = 0; i < num; i++) {
            let name = prompt("Introduce el nombre del checkbox " + i);
            let value = prompt("Introduce el valor del checkbox " + i);
            let text = prompt("Introduce el texto del checkbox " + i);

            if ((name !== "" && name !== null) && (value !== "" && value !== null) && (text !== "" && text !== null)) {

                let element = document.createElement('input');
                element.setAttribute('name', name);
                element.setAttribute('type', 'checkbox');
                element.setAttribute('id', 'btncheck' + i);
                element.setAttribute('autocomplete', 'off');
                element.setAttribute('value', value);
                element.classList.add('btn-check');

                group.appendChild(element);

                let label = document.createElement('label');
                label.setAttribute('for', 'btncheck' + i);
                label.classList.add('btn', 'btn-outline-primary');
                label.innerHTML = text;

                group.appendChild(label);
            } else {
                alert('No se ha completado alguno de los campos del checkbox ' + i + 'y no se pudo crear');
            }
        }
    }

});


//Evento click para el boton de radio
//Este elemento NO funciona correctamente
document.getElementById('radio').addEventListener('click', () => {

    let num = prompt("Introduce la cantidad de opciones del radio");

    if (num !== "" && num !== null) {
        let group = document.createElement('div');
        group.setAttribute('role', 'group');
        group.setAttribute('aria-label', 'Basic radio toggle button group');
        group.classList.add('btn-group', 'mb-3');

        form.appendChild(group);

        for (i = 0; i < num; i++) {
            let name = prompt("Introduce el nombre del radio " + i);
            let value = prompt("Introduce el valor del radio " + i);
            let text = prompt("Introduce el texto del radio " + i);

            if ((name !== "" && name !== null) && (value !== "" && value !== null) && (text !== "" && text !== null)) {

                let element = document.createElement('input');
                element.setAttribute('name', name);
                element.setAttribute('type', 'radio');
                element.setAttribute('id', 'btnradio' + i);
                element.setAttribute('autocomplete', 'off');
                element.setAttribute('value', value);
                element.classList.add('btn-check');

                if (i == 0) {
                    console.log('Este tiene el check');
                    element.checked = true;
                }
                console.log('esta checkeado: ' + element.checked);

                group.appendChild(element);

                let label = document.createElement('label');
                label.setAttribute('for', 'btnradio' + i);
                label.classList.add('btn', 'btn-outline-primary');
                label.innerHTML = text;

                group.appendChild(label);
            } else {
                alert('No se ha completado alguno de los campos del radio ' + i + 'y no se pudo crear');
            }
        }
    }

});


//Evento click para el boton de imagen
document.getElementById('boton').addEventListener('click', () => {

    let name = prompt("Introduce el nombre del botón");
    let value = prompt("Introduce el valor del botón");

    if ((name !== "" && name !== null) && (value !== "" && value !== null)) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'submit');
        btn.setAttribute('name', name);
        btn.setAttribute('value', value);
        btn.classList.add('btn', 'btn-primary', 'mb-3');
        btn.innerHTML = name;

        form.appendChild(btn);
    }

});