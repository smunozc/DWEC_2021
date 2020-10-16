function hourFormats() {
    let options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    let formatType = parseInt(document.getElementById("format").value);
    let date = new Date();

    switch (formatType) {
        case 1:
            alert(date.toLocaleTimeString());
            break;
        case 2:
            alert(date.toLocaleTimeString("en-US", options));
            break;
    }
}