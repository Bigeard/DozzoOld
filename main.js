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
        affichagePage += '<button class=\"selection\" id=\"' + listeSlot[i-1] + '\">' + listeSlot[i-1] + '</button>'
        //document.getElementById('' + listeSlot[i-1] + '').style.backgroundColor = black
    }
    var affichagePageAvecCurseur = affichagePage.replace(positionCurseur, '■');

    //3 ON CHOISI LA PAGE A AFFICHER

    affichage(affichagePageAvecCurseur);

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
    console.log("\n\n")
    console.clear()

    if (page == "Menu") {

        /* Cette fonction permet d"afficher dans la console
        la page de Menu */

        document.getElementById("Dozzo").innerHTML = 
        "<img class=\"dozzo\" src=\"img/dozzo.svg\"><br>" +
        "                                             " + currentPage.nom + "                                             <br><br>" +
        affichagePageAvecCurseur ;



        console.log("          ▀█████████▄  BINVENUE DANS LE DONJON DU ...")
        console.log("            ██▒     █▄                                        ᚐ ᚐ ᚐ  ")
        console.log("            ██       █▄  ▒█████  ▒███████▒▒███████▒ ▒█████")
        console.log("           ░██       ░█ ▒██▒  ██▒▒ ▒ ▒ ▄▀░▒ ▒ ▒ ▄▀░▒██▒  ██▒")
        console.log("           ░██      ░█▀ ▒██░  ██▒░ ▒ ▄▀▒░ ░ ▒ ▄▀▒░ ▒██░  ██▒")
        console.log("           ▒██     ░█▀░ ▒██   ██░  ▄▀▒   ░  ▄▀▒   ░▒██   ██░")
        console.log("          ▄█████████▀▒  ░ ████▓▒░▒███████▒▒███████▒░ ████▓▒░")
        console.log("              ▒░ ▒  ▒   ░ ▒ ▒░ ░░▒ ▒ ░ ▒░░▒ ▒ ░ ▒  ░ ▒ ▒░")
        console.log("               ░          ░ ░     ▒      ░ ░  ▒     ░")
        console.log("                           ░               ░")
        console.log("                                             " + currentPage.nom + "                                             ")
        console.log()
        console.log(affichagePageAvecCurseur)
    }
    else if (page == "Commencer") {

        /* Cette fonction permet de d"afficher dans la console
        la scène de combat en fonction des PV de l'héro, du monstre,
        du nom de la sélection de la page, sélection disponible, etc... */

        document.getElementById("Dozzo").innerHTML = 
        "<img class=\"dozzo\" src=\"img/dozzo.svg\"><br>" +
        "                                             " + currentPage.nom + "                                             <br><br>" +
        affichagePageAvecCurseur ;

        console.log("[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]PV[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]")
        console.log("")
        console.log("")
        console.log("             [ Bigeard ]                           [ Zombie ]             ")
        console.log("               ______                                 _____               ")
        console.log("              ( ͡° ͜ʖ ͡°)/                             \\(✖╭╮✖)              ")
        console.log("                                                                             ")
        console.log("               /    \\                                 /    \\              ")
        console.log("")
        console.log("")
        console.log("                                             " + currentPage.nom + "                                             ")
        console.log()
        console.log(affichagePageAvecCurseur)
    }
    else {
        console.log('Affichage inexistant')
        console.log(affichagePageAvecCurseur)

        document.getElementById("Dozzo").innerHTML = 
        "<img class=\"dozzo\" src=\"img/dozzo.svg\"><br>" +
        "                                             " + currentPage.nom + "                                             <br><br>" +
        affichagePageAvecCurseur ;
    }
}

//HTML PAGE CLASSE

function affichageHero() {

    var chowStats = Object.create(Unite)
    var changeClasse = ["Guerrier", "Mage", "Assassin", "Mage noir"]
    
    for (var x = 0; x < changeClasse.length; x++) {
        chowStats.init("undefined", 0, 0, 0, "undefined", "undefined", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        chowStats.setClasse(changeClasse[x])
        document.getElementById("hero-"+x).innerHTML = chowStats.classe + "<span class=\"tooltiptext\">" + 
        chowStats.classe +
        "<br><img class=\"img-class\" src=\"img/" + chowStats.classe + ".gif\">" + 
        "<br> PV : " + chowStats.ptsVieMax + 
        "<br> Mana : " + chowStats.ptsManaMax + 
        "<br> ATK : " + chowStats.attaqueMax +
        "<br> MAG : " + chowStats.magieMax +
        "<br> DEF : " + chowStats.defenseMax +
        "<br> RES : " + chowStats.resistanceMax +
        "<br>               " + "<br> Capacité :<br>" + chowStats.competance + "</p></span>" ;
    }
}