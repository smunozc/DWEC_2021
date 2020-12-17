document.getElementById('add').addEventListener('click',addItem);
document.getElementById('delFirst').addEventListener('click',delFirst);
document.getElementById('delLast').addEventListener('click',delLast);

function addItem(){
    let content = prompt('Introduce el contenido del item');
    if(content !== ''){
        let list = document.getElementById('list');
        let li = document.createElement('li');
        li.innerHTML = content;
        list.appendChild(li);
    } else {
        alert('Está vacío, no has escrito nada :(');
    }
}

function delFirst(){
    console.log('Ejecutado');
    let list = document.getElementById('list');
    let firstChild = list.firstElementChild;
    list.removeChild(firstChild);
}

function delLast(){
    let list = document.getElementById('list');
    let lastChild = list.lastElementChild;
    list.removeChild(lastChild);
}