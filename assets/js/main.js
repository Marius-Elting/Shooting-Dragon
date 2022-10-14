// Made by Marius

let leben = 100;
document.getElementById("health").innerHTML = leben;

function updateHealthPoints(points) {

    leben = points;
    let healthBar = document.querySelector("#healthBar");
    healthBar.style.width = points + "%";
    document.getElementById("health").innerHTML = leben;
    if (leben < 1) {
        alert("Du Looser!");
        document.getElementById("resButton").classList.remove("nichtsichtbar");
        document.getElementById("resButton").classList.add("sichtbar");        // window.location.reload();
        curScore = 0;
    }

}

function lebendeGegner() {
    return document.querySelectorAll(".gegner:not(.dead)");
}

let curScore = 0;
let allScore = 0;
document.getElementById("allScore").innerHTML = allScore;
document.getElementById("curScore").innerHTML = curScore;


function iShoot(gegner) {
    gegner.classList.add("dead");
    allScore++;
    curScore++;
    document.getElementById("curScore").innerHTML = curScore;
    document.getElementById("allScore").innerHTML = allScore;
    if (!lebendeGegner().length) {
        alert("Du hast gewonnen! Und hast mit " + leben + " Leben überlebt!");
        document.getElementById("resButton").classList.remove("nichtsichtbar");
        document.getElementById("resButton").classList.add("sichtbar");
        // window.location.reload();
        curScore = 0;
    }

};


function gegnerGreiftAn(gegner) {

    if (leben > 0) {

        gegner.classList.add("showing");

        setTimeout(() => {
            gegnerSchiesst(gegner);
        }, 1000);

        setTimeout(() => {
            gegner.classList.remove("showing");
        }, 3000);

    }


}


function gegnerSchiesst(gegner) {

    if (!gegner.classList.contains("dead")) {

        gegner.classList.add("shooting");
        updateHealthPoints(leben - 20);

        setTimeout(() => {
            gegner.classList.remove("shooting");
        }, 200);

    }

}


function randomGegner() {

    let randomGegnerNo = Math.random() * lebendeGegner().length;
    randomGegnerNo = Math.floor(randomGegnerNo);
    let gegner = lebendeGegner()[randomGegnerNo];

    let pruefen = document.getElementById("gegner1");
    var randomDelay = Math.random() * 2000 + 1000;
    // Prüft ob die Klasse gegner vorhanden ist
    if (document.getElementById("gegner1").classList[1] == "gegner") {
        document.getElementById("buttons").classList.add("nichtsichtbar");
        document.getElementById("buttons").classList.remove("sichtbar");
        document.getElementById("whilePlay").classList.remove("nichtsichtbar");
        document.getElementById("whilePlay").classList.add("sichtbar");
    } else {
        alert("Bitte wähle eine Schwierigkeit!");
    }
    setTimeout(() => {
        gegnerGreiftAn(gegner);
        randomGegner();
    }, randomDelay);
}

function hardest() {

    let randomGegnerNo = Math.random() * lebendeGegner().length;
    randomGegnerNo = Math.floor(randomGegnerNo);
    let gegner = lebendeGegner()[randomGegnerNo];
    let randomDelay = Math.random() * 1000 + 100;
    // Prüft ob die Klasse gegner vorhanden ist
    if (document.getElementById("gegner1").classList[1] == "gegner") {
        document.getElementById("buttons").classList.add("nichtsichtbar");
        document.getElementById("buttons").classList.remove("sichtbar");
        document.getElementById("whilePlay").classList.remove("nichtsichtbar");
        document.getElementById("whilePlay").classList.add("sichtbar");
    } else {
        alert("Bitte wähle eine Schwierigkeit!");
    }
    setTimeout(() => {
        gegnerGreiftAn(gegner);
        hardest();
    }, randomDelay);

}
function mediums() {

    var randomGegnerNo = Math.random() * lebendeGegner().length;
    randomGegnerNo = Math.floor(randomGegnerNo);
    var gegner = lebendeGegner()[randomGegnerNo];
    var randomDelay = Math.random() * 1000 + 500;
    // Prüft ob die Klasse gegner vorhanden ist
    if (document.getElementById("gegner1").classList[1] == "gegner") {
        document.getElementById("buttons").classList.add("nichtsichtbar");
        document.getElementById("buttons").classList.remove("sichtbar");
        document.getElementById("whilePlay").classList.remove("nichtsichtbar");
        document.getElementById("whilePlay").classList.add("sichtbar");
    } else {
        alert("Bitte wähle eine Schwierigkeit!");
    }
    setTimeout(() => {
        gegnerGreiftAn(gegner);
        mediums();
    }, randomDelay);

}

function resGame() {
    // let toRemove = document.querySelectorAll("div").classList.value;
    // console.log(toRemove[0]);
    // // let removeClasses = ["gegner", "dead", "showing", "shooting"];
    // document.querySelectorAll("div").classList.toggle("gegner", "dead", "showing", "shooting");
    enem1.classList.remove("gegner", "dead", "showing", "shooting");
    enem2.classList.remove("gegner", "dead", "showing", "shooting");
    enem3.classList.remove("gegner", "dead", "showing", "shooting");
    enem4.classList.remove("gegner", "dead", "showing", "shooting");
    enem5.classList.remove("gegner", "dead", "showing", "shooting");
    enem6.classList.remove("gegner", "dead", "showing", "shooting");
    enem7.classList.remove("gegner", "dead", "showing", "shooting");
    enem8.classList.remove("gegner", "dead", "showing", "shooting");
    enem9.classList.remove("gegner", "dead", "showing", "shooting");
    enem10.classList.remove("gegner", "dead", "showing", "shooting");
    enem11.classList.remove("gegner", "dead", "showing", "shooting");

    document.getElementById("buttons").classList.add("sichtbar");
    document.getElementById("buttons").classList.remove("nichtsichtbar");
    document.getElementById("whilePlay").classList.remove("sichtbar");
    document.getElementById("whilePlay").classList.add("nichtsichtbar");
    document.getElementById("resButton").classList.add("nichtsichtbar");
    document.getElementById("resButton").classList.remove("sichtbar");
    curScore = 0;
    document.getElementById("curScore").innerHTML = curScore;
    leben = 100;
    document.getElementById("health").innerHTML = leben;
    healthBar.style.width = "100%";
}





let enem1 = document.getElementById("gegner1");
let enem2 = document.getElementById("gegner2");
let enem3 = document.getElementById("gegner3");
let enem4 = document.getElementById("gegner4");
let enem5 = document.getElementById("gegner5");
let enem6 = document.getElementById("gegner6");
let enem7 = document.getElementById("gegner7");
let enem8 = document.getElementById("gegner8");
let enem9 = document.getElementById("gegner9");
let enem10 = document.getElementById("gegner10");
let enem11 = document.getElementById("gegner11");


function easy() {
    enem1.classList.add("gegner");
    enem2.classList.add("gegner");
    enem3.classList.add("gegner");
    enem4.classList.add("gegner");
    enem5.classList.add("gegner");
    enem6.classList.remove("gegner");
    enem7.classList.remove("gegner");
    enem8.classList.remove("gegner");
    enem9.classList.remove("gegner");
    enem10.classList.remove("gegner");
    enem11.classList.remove("gegner");
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Easy";



}

function medium() {
    easy();
    enem6.classList.add("gegner");
    enem7.classList.add("gegner");
    enem8.classList.add("gegner");
    enem9.classList.remove("gegner");
    enem10.classList.remove("gegner");
    enem11.classList.remove("gegner");
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Medium";
    document.getElementById("start").setAttribute("onClick", "javascript: mediums();");
}

function hard() {
    medium();
    enem9.classList.add("gegner");
    enem10.classList.add("gegner");
    enem11.classList.add("gegner");
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Hard";
    // document.getElementById("start").onclick = "hardest";
    document.getElementById("start").setAttribute("onClick", "javascript: hardest();");


}






// let llelele = document.getElementById("gegner1");

// console.log(llelele);