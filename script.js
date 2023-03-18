window.addEventListener("load", init)

const KEPEK = [
    "./kepek/Kep1.jpg",
    "./kepek/Kep2.jpg",
    "./kepek/Kep3.jpg",
    "./kepek/Kep4.jpg",
    "./kepek/Kep5.jpg"]

function init() {


    let nagykep = document.querySelector(".nagykep img");
    let article = document.querySelector("article")
    let htmlValtozo = kepethozzaad(KEPEK);
    kirak(htmlValtozo, article)
    let kiskepek = document.querySelectorAll(".kiskep img")


    for (let i = 0; i < kiskepek.length; i++) {
        kiskepek[i].addEventListener("click", function () {
            kattintasKezelo(i)
        });
    }

}

function kepethozzaad(KEPEK) {
    let htmlValtozo = `<div class="kiskep">`;
    for (let i = 0; i < KEPEK.length; i++) {
        htmlValtozo += `<img src="${KEPEK[i]}"`;
        htmlValtozo += "</div>";
    }
    return htmlValtozo
}

function kirak(mit, hova) {
    hova.innerHTML += mit;
}

function kattintasKezelo(i, event) {
    //console.log(event.target)
    //console.log(event.target.src)
    const NAGYKEP = document.querySelector(".nagykep img");
    console.log(NAGYKEP);
    NAGYKEP.src = KEPEK[i];
}