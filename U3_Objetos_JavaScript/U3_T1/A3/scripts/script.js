function dateFormats(){
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let formatType = parseInt(document.getElementById("format").value);
    let date = new Date(document.getElementById("dt").value);

    switch(formatType){
        case 1:
            alert(date.toLocaleDateString());
            break;
        case 2:
            alert(date.toLocaleDateString("es-ES", options));
            break;
        case 3:
            alert(date.toLocaleDateString("en-EN", options));
            break;
    }
}