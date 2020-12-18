window.addEventListener('load', () => {
    let form = document.createElement('form');
    form.setAttribute('id','form');
    document.body.appendChild(form);

    let inputName = ['Nombre del disco: ','Grupo de música o cantante: ','Año de publicación: ','Tipo de música: ','Localización: ','Prestado: '];
    let musicType = ['rock','pop','punk','indie'];

    for(let i = 0; i < inputName.length; i++) {

        if(i !== 3){

            let label = document.createElement('label');
            label.setAttribute('for',inputName[i]);
            label.innerHTML = inputName[i];

            form.appendChild(label);

            let element = document.createElement('input');
            element.setAttribute('name',inputName[i]);
            element.setAttribute('type','text');
            element.setAttribute('style','margin-right: 20px;');

            form.appendChild(element);

        } else {

            let label = document.createElement('label');
            label.setAttribute('for',inputName[i]);
            label.innerHTML = inputName[i];

            form.appendChild(label);

            let element = document.createElement('select');
            element.setAttribute('name',inputName[i]);
            element.setAttribute('style','margin-right: 20px;');

            form.appendChild(element);

            for(i = 0; i < musicType.length; i++){
                let type = document.createElement('option');
                type.setAttribute('value',musicType[i]);
                type.innerHTML = musicType[i];

                element.appendChild(type);
            }

        }
        
    }

    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Submit';

    form.appendChild(button);
})