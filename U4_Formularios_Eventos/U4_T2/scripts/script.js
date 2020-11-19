var srcSelected = [];
var points = parseInt(document.getElementById("points").innerHTML);
console.log(points + " " + typeof(points));
var td = document.querySelectorAll('table tr td');

td.item(0).addEventListener('click', tdClick, false);
td.item(1).addEventListener('click', tdClick, false);
td.item(2).addEventListener('click', tdClick, false);
td.item(3).addEventListener('click', tdClick, false);
td.item(4).addEventListener('click', tdClick, false);
td.item(5).addEventListener('click', tdClick, false);
td.item(6).addEventListener('click', tdClick, false);
td.item(7).addEventListener('click', tdClick, false);
td.item(8).addEventListener('click', tdClick, false);
td.item(9).addEventListener('click', tdClick, false);
td.item(10).addEventListener('click', tdClick, false);
td.item(11).addEventListener('click', tdClick, false);

if (srcSelected.length <= 2) {
        
} else {
    let img1 = document.querySelector("img[src='" + srcSelected[0] + "']");
    let img2 = document.querySelector("img[src='" + srcSelected[1] + "']");

    if (srcSelected[0] === srcSelected[1]) {
        console.log("Correcto!!");
        points ++;
        setTimeout(() => {
            img1.style.visibility = "hidden";
            img2.style.visibility = "hidden";
        }, 2000)
    } else {
        setTimeout(() => {
            img1.style.visibility = "hidden";
            img2.style.visibility = "hidden";
        }, 2000)
    }
}

function tdClick() {
    this.firstChild.style.visibility = "visible";
    srcSelected.push(toString(this.firstChild.getAttribute("src")));
}