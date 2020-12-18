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
        element.setAttribute('placeholder', 'Text');
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
                if (form.children[i].tagName.toLowerCase() !== "label") {

                    let auxElement = form.children[i].getElementsByTagName('input')[0];
                    let name = auxElement.getAttribute('name');

                    //Si el atributo 'name' del input coincide con el name asignado significa que ya existe y el label debe colocarse antes de este.
                    if (name === labelFor) {
                        exists = true;
                        existentElement = form.children[i];
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


//Evento click para el boton de textarea
document.getElementById('imagen').addEventListener('click', () => {

    //WORK IN PROGRESS
    console.log("Functionality not yet implemented");

});