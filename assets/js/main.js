// Made by Marius
let easyButton = document.getElementById('easyButton');
let medButton = document.getElementById('medButton');
let hardButton = document.getElementById('hardButton');
let ultraHardButton = document.getElementById('ultraHardButton');
let ultraHardPlusButton = document.getElementById('ultraHardPlusButton');




let leben = 100;
document.getElementById("health").innerHTML = leben;

function updateHealthPoints(points) {

    leben = points;
    let healthBar = document.querySelector("#healthBar");
    healthBar.style.width = points + "%";
    document.getElementById("health").innerHTML = leben;
    if (leben < 1) {
        killAll();
        setTimeout(() => {
            alert("Du Looser!");
            document.getElementById("resButton").classList.remove("nichtsichtbar");
            document.getElementById("resButton").classList.add("sichtbar");
        }, 500);
        // window.location.reload();
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
        killAll();
        setTimeout(() => {
            alert("Du hast gewonnen! Und hast mit " + leben + " Leben überlebt!");
            document.getElementById("resButton").classList.remove("nichtsichtbar");
            document.getElementById("resButton").classList.add("sichtbar");
        }, 500);

        // window.location.reload();
        curScore = 0;
    }

};

let shotDelay = 1000;
function gegnerGreiftAn(gegner) {

    if (leben > 0) {

        gegner.classList.add("showing");

        setTimeout(() => {
            gegnerSchiesst(gegner);
        }, shotDelay);

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

let malvar = 2000;
let plusvar = 1000;


function randomGegner() {

    let randomGegnerNo = Math.random() * lebendeGegner().length;
    randomGegnerNo = Math.floor(randomGegnerNo);
    let gegner = lebendeGegner()[randomGegnerNo];

    let pruefen = document.getElementById("gegner1");
    var randomDelay = Math.random() * malvar + plusvar;
    // Prüft ob die Klasse gegner vorhanden ist
    if (document.getElementById("gegner1").classList[1] == "gegner") {
        document.getElementById("buttons").classList.add("nichtsichtbar");
        document.getElementById("buttons").classList.remove("sichtbar");
        document.getElementById("whilePlay").classList.remove("nichtsichtbar");
        document.getElementById("whilePlay").classList.add("sichtbar");
        // leben = 100;
        // document.getElementById("health").innerHTML = leben;
        // healthBar.style.width = "100%";
    } else {
        alert("Bitte wähle eine Schwierigkeit!");
    }
    setTimeout(() => {
        gegnerGreiftAn(gegner);
        randomGegner();
    }, randomDelay);
}


function resGame() {
    // let toRemove = document.querySelectorAll("div").classList.value;
    // console.log(toRemove[0]);
    // // let removeClasses = ["gegner", "dead", "showing", "shooting"];
    // document.querySelectorAll("div").classList.toggle("gegner", "dead", "showing", "shooting");
    killAll();
    enem1.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem2.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem3.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem4.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem5.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem6.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem7.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem8.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem9.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem10.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem11.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem12.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem13.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem14.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem15.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem16.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem17.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem18.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem19.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
    enem20.classList.remove("gegner", "dead", "showing", "shooting", "gegnerSpawnFast");
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
    easyButton.classList.remove("selected");;
    medButton.classList.remove("selected");;
    hardButton.classList.remove("selected");;
    ultraHardButton.classList.remove("selected");;
    document.getElementById("displayschw").innerHTML = "Bitte wähle eine Schwierigkeit";
    shotDelay = 1000;
}

function killAll() {
    enem1.classList.add("dead");
    enem2.classList.add("dead");
    enem3.classList.add("dead");
    enem4.classList.add("dead");
    enem5.classList.add("dead");
    enem6.classList.add("dead");
    enem7.classList.add("dead");
    enem9.classList.add("dead");
    enem8.classList.add("dead");
    enem11.classList.add("dead");
    enem10.classList.add("dead");
    enem13.classList.add("dead");
    enem12.classList.add("dead");
    enem15.classList.add("dead");
    enem14.classList.add("dead");
    enem17.classList.add("dead");
    enem16.classList.add("dead");
    enem19.classList.add("dead");
    enem18.classList.add("dead");
    enem20.classList.add("dead");
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
let enem12 = document.getElementById("gegner12");
let enem13 = document.getElementById("gegner13");
let enem14 = document.getElementById("gegner14");
let enem15 = document.getElementById("gegner15");
let enem16 = document.getElementById("gegner16");
let enem17 = document.getElementById("gegner17");
let enem18 = document.getElementById("gegner18");
let enem19 = document.getElementById("gegner19");
let enem20 = document.getElementById("gegner20");


// Buttons für die Schwierigkeits buttons

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
    enem12.classList.remove("gegner");
    enem13.classList.remove("gegner");
    enem14.classList.remove("gegner");
    enem15.classList.remove("gegner");
    enem16.classList.remove("gegner");
    enem17.classList.remove("gegner");
    enem18.classList.remove("gegner");
    enem19.classList.remove("gegner");
    enem20.classList.remove("gegner");
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Easy";
    easyButton.classList.add("selected");
    medButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    ultraHardButton.classList.remove("selected");

    leben = 100;
    document.getElementById("health").innerHTML = leben;
    healthBar.style.width = "100%";
    shotDelay = 800;

}

function medium() {
    easy();
    enem6.classList.add("gegner");
    enem7.classList.add("gegner");
    enem8.classList.add("gegner");
    enem9.classList.remove("gegner");
    enem10.classList.remove("gegner");
    enem11.classList.remove("gegner");
    enem12.classList.remove("gegner");
    enem13.classList.remove("gegner");
    enem14.classList.remove("gegner");
    enem15.classList.remove("gegner");
    enem16.classList.remove("gegner");
    enem17.classList.remove("gegner");
    enem18.classList.remove("gegner");
    enem19.classList.remove("gegner");
    enem20.classList.remove("gegner");
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Medium";
    medButton.classList.add("selected");
    easyButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    ultraHardButton.classList.remove("selected");
    ultraHardPlusButton.classList.remove("selected");;
    leben = 100;
    document.getElementById("health").innerHTML = leben;
    healthBar.style.width = "100%";
    shotDelay = 800;
    malvar = 1000;
    plusvar = 500;
}

function hard() {
    medium();
    enem9.classList.add("gegner");
    enem10.classList.add("gegner");
    enem11.classList.add("gegner");
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Hard";
    // document.getElementById("start").onclick = "hardest";
    hardButton.classList.add("selected");
    medButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    ultraHardButton.classList.remove("selected");
    leben = 100;
    document.getElementById("health").innerHTML = leben;
    healthBar.style.width = "100%";
    enem12.classList.remove("gegner");
    enem13.classList.remove("gegner");
    enem14.classList.remove("gegner");
    enem15.classList.remove("gegner");
    enem16.classList.remove("gegner");
    enem17.classList.remove("gegner");
    enem18.classList.remove("gegner");
    enem19.classList.remove("gegner");
    enem20.classList.remove("gegner");
    shotDelay = 650;
    malvar = 1000;
    plusvar = 100;
}

function ultraHard() {
    hard();
    enem1.classList.add("gegner", "gegnerSpawnFast");
    enem2.classList.add("gegner", "gegnerSpawnFast");
    enem3.classList.add("gegner", "gegnerSpawnFast");
    enem4.classList.add("gegner", "gegnerSpawnFast");
    enem5.classList.add("gegner", "gegnerSpawnFast");
    enem6.classList.add("gegner", "gegnerSpawnFast");
    enem7.classList.add("gegner", "gegnerSpawnFast");
    enem8.classList.add("gegner", "gegnerSpawnFast");
    enem9.classList.add("gegner", "gegnerSpawnFast");
    enem10.classList.add("gegner", "gegnerSpawnFast");
    enem11.classList.add("gegner", "gegnerSpawnFast");
    enem12.classList.add("gegner", "gegnerSpawnFast");
    enem13.classList.add("gegner", "gegnerSpawnFast");
    enem14.classList.add("gegner", "gegnerSpawnFast");
    enem15.classList.add("gegner", "gegnerSpawnFast");
    enem16.classList.add("gegner", "gegnerSpawnFast");
    enem17.classList.add("gegner", "gegnerSpawnFast");
    enem18.classList.add("gegner", "gegnerSpawnFast");
    enem19.classList.add("gegner", "gegnerSpawnFast");
    enem20.classList.add("gegner", "gegnerSpawnFast");
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Ultra Hard";
    hardButton.classList.remove("selected");
    medButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    ultraHardButton.classList.add("selected");
    ultraHardPlusButton.classList.remove("selected");;

    leben = 100;
    document.getElementById("health").innerHTML = leben;
    healthBar.style.width = "100%";
    shotDelay = 500;
    malvar = 600;
    plusvar = 100;
}


function anleitung() {
    alert("Töte die Gegner in dem du sie anklickst, doch pass auf sie schießen zurück, halte deshalb deine Leben immer gut im Auge");
}


function ultraHardPlus() {
    ultraHard();
    document.getElementById("displayschw").innerHTML = "Schwierigkeit: Ultra Hard+";
    hardButton.classList.remove("selected");
    medButton.classList.remove("selected");
    easyButton.classList.remove("selected");
    ultraHardButton.classList.remove("selected");
    ultraHardPlusButton.classList.add("selected");;
    leben = 100;
    document.getElementById("health").innerHTML = leben;
    healthBar.style.width = "100%";
    shotDelay = 500;
    malvar = 300;
    plusvar = 300;
}