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

function pageAffichageCurseur(positionCurseur) {

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

    document.getElementById('select').innerHTML = "[posCurseur : " +positionCurseur + "] [nomPage : " + currentPage.nom + "] [nonSlot : " + currentSlotName + "]";

    return currentSlotName
}

function pageSelected(currentSlotName) {

    //1 ON PREPARE LA PROCHAINE PAGE A AFFICHER

    if (currentSlotName == "Retour") {
        page = currentPage.LastSlot;
    }
    else {
        page = currentSlotName
    }

    currentPage.setPage(page)
    positionCurseur = 1;
}

//AFFICHAGE TYPE

function affichage(affichagePageAvecCurseur) {

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
        "<br><p class=\"a-propos\" ><br><br>Jeu en bêta pour le moment... Crée par :<br><br>Samy Vera<br><br>Robin Bigeard<br><br>Olivier Crochet<br><br><br></p><br>" +
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
        "<br>" + healthBar + " VS " + healthBar +
        "<br><img class=\"combat-img\" src=\"img/guerrier.gif\">" +
        "<img class=\"combat-img\" src=\"img/abomination.gif\"><br>" +
        "                         " + currentPage.nom + "                         <br><br>" +
        affichagePageAvecCurseur ;
    }
    else {
        document.getElementById("Dozzo").innerHTML = 
        "                         " + currentPage.nom + "                         <br><br>" +
        affichagePageAvecCurseur ;
    }
}

//HTML PAGE CLASSE

function affichageHero() {

    var chowClasse = Object.create(Unite)
    var changeClasse = ["Guerrier", "Mage", "Assassin", "Mage noir"]
    
    for (var x = 0; x < changeClasse.length; x++) {
        chowClasse.init("undefined", 0, 0, 0, "undefined", "undefined", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        chowClasse.setClasse(changeClasse[x])
        document.getElementById("hero-"+x).innerHTML = chowClasse.classe + "<span class=\"tooltiptext\">" + 
        chowClasse.classe +
        "<br><img class=\"img-class\" src=\"img/" + chowClasse.classe + ".gif\">" +
        "<br> PV : " + chowClasse.ptsVieMax + 
        "<br> Mana : " + chowClasse.ptsManaMax + 
        "<br> ATK : " + chowClasse.attaqueMax +
        "<br> MAG : " + chowClasse.magieMax +
        "<br> DEF : " + chowClasse.defenseMax +
        "<br> RES : " + chowClasse.resistanceMax +
        "<br>---------------" + "<br> Capacité :<br>" + chowClasse.competance + "</p></span>" ;
    }
}

function affichageStats() {

    var chowUnit = Object.create(Unite)
    var changeUnit = ["Guerrier", "Abomination"]
    
    for (var x = 0; x < changeUnit.length; x++) {
        chowUnit.init("undefined", 0, 0, 0, "undefined", "undefined", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        chowUnit.setClasse(changeUnit[x])
        document.getElementById("unit-"+x).innerHTML = chowUnit.classe + "<span>" + 
        "<br> PV : " + chowUnit.ptsVieMax + 
        "<br> Mana : " + chowUnit.ptsManaMax + 
        "<br> ATK : " + chowUnit.attaqueMax +
        "<br> MAG : " + chowUnit.magieMax +
        "<br> DEF : " + chowUnit.defenseMax +
        "<br> RES : " + chowUnit.resistanceMax +"</p>" ;
    }
}