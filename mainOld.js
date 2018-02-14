//INITIALISATION DU JEU

var currentPage = Object.create(Selection)
    currentPage.init(undefined, 0, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
var currentSlotName = undefined;

var positionCurseur = 1;

var page = "Menu";
currentPage.setPage(page)

//MAIN

function main() {
    pageAffichageCurseur(1);
}

function afficherMenu(positionCurseur) {

    //1 ON RECUPERE LE SLOT

    var listeSlot =
    [currentPage.Slot1, currentPage.Slot2, currentPage.Slot3,
    currentPage.Slot4, currentPage.Slot5, currentPage.Slot6];

    currentSlotName = listeSlot[positionCurseur - 1];

    //2 ON CREE L'AFFICHAGE

    var affichagePage = ''
    for (let i = 1; i < currentPage.nombreDeSlot + 1; i++) {
        if (page == "Menu"){
            affichagePage += "<br>"
        } 
        affichagePage += '<button class=\"selection\" id=\"' + listeSlot[i-1] + '\">' + listeSlot[i-1] + '</button>'
    }

    //3 ON CHOISI LA PAGE A AFFICHER

    affichage(affichagePage);
    document.getElementById(currentSlotName).style.color = "white"
    //AFFICHAGE DE LA POSITION DU CURSEUR DANS LE HTML

    document.getElementById('select').innerHTML = "[posCurseur : " +positionCurseur + "]<br>[nomPage : " + currentPage.nom + "]<br>[nonSlot : " + currentSlotName + "]";

    return currentSlotName
}

function changerAffichage(currentSlotName) {

    //1 ON PREPARE LA PROCHAINE PAGE A AFFICHER

    currentPage.setPage(currentSlotName)
    positionCurseur = 1;
}

//AFFICHAGE TYPE

function afficherVisuel(affichagePageAvecCurseur) {

    if (page == "Menu") {
        document.getElementById("Dozzo").innerHTML = "<img src=\"img/BannerDozzo.png\"><br>" + affichagePageAvecCurseur;
    }
    else if (page == "Option") {
        var son = "ON"
        var difficulter = "Normal"
        document.getElementById("Dozzo").innerHTML =
        "<div class=\"option\"><br><p class\"son-option\" >Son : " + son + " &nbsp;&nbsp;<label class=\"switch\"><input type=\"checkbox\"><span class=\"slider\"></span></label></p>" +
        "<p class\"\" >Difficulter : " + difficulter + " &nbsp;&nbsp;</p></div>" +
        "                         " + currentPage.nom + "                         <br><br>" +
        affichagePageAvecCurseur ;
    }
    else if (page == "A propos") {
        document.getElementById("Dozzo").innerHTML = 
        "<br><p class=\"a-propos nesBox\" ><br><br>Jeu en bêta pour le moment... Crée par :<br><br>Samy Vera<br><br>Robin Bigeard<br><br>Olivier Crochet<br><br><br></p><br>" +
        "                         " + currentPage.nom + "                         <br><br>" +
        affichagePageAvecCurseur ;
    }
    else if (page == "Nouvelle partie") {

        /* Cette fonction permet de d"afficher dans la console
        la scène de combat en fonction des PV de l'héro, du monstre,
        du nom de la sélection de la page, sélection disponible, etc... */

        var healthBar = '';
        healthBar += "<img src=\"img/barLeft.png\">"
        for (var i = 0; i < 50; i++) {
            healthBar += "<img src=\"img/barMiddle.png\">"
        }
        healthBar += "<img src=\"img/barRight.png\">"

        document.getElementById("Dozzo").innerHTML = 
        "<div class=\"fightBackground\"><br>" + healthBar + " VS " + healthBar +
        "<br><br><br><br><br><br><br><img class=\"combat-img\" src=\"img/guerrier.gif\">" +
        "<img class=\"combat-img\" src=\"img/abomination.gif\"></div>" + messageTest.contenu + affichagePageAvecCurseur ;
    }
    else if (page == "Options" || page == "Difficulter" || page == "Son") {
        document.getElementById("Dozzo").innerHTML = affichagePageAvecCurseur;
    }
    else {
        document.getElementById("Dozzo").innerHTML =
        "<div class=\"fightBackground\"><br>" + healthBar + " VS " + healthBar +
        "<br><br><br><br><br><br><br><img class=\"combat-img\" src=\"img/guerrier.gif\">" +
        "<img class=\"combat-img\" src=\"img/abomination.gif\"></div>" + messageTest.contenu +  affichagePageAvecCurseur ;
    }
}
