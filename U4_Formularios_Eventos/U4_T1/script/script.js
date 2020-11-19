function Disc(name, group, year, type, location, borrowed) {
    this.name = name;
    this.group = group;
    this.year = year;
    this.type = type;
    this.location = location;
    this.borrowed = borrowed;
}

let button = document.querySelector("#button");
button.addEventListener("click",getAttributes,false);

function getAttributes(){
    let name = document.querySelector("#name");
    console.log(name);
}

