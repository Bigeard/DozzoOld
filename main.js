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
//INIT

var select = 1

//DISPLAY MENU

function menu(select) {
    console.clear()

    var chn = '  - Commencer [1]              - Option [2]              - A propos [3]'
   // var chn = '              - Commencer [1]              - Option [2]\n              - A propos [3]              - A propos [4]\n              - A propos [5]              - A propos [6]'
   // var chn = ' - Commencer [1]              - Option [2]              - A propos [3]\n - Commencer [4]              - Option [5]              - A propos [6]\n - Commencer [7]              - Option [8]              - A propos [9]'
    var nouvChn = chn.replace(select, '*');
    console.log('\n\n\n')
    console.log('          ▀█████████▄  BINVENUE DANS LE DONJON DU ...')
    console.log('            ██▒     █▄                                        ᚐ ᚐ ᚐ  ')
    console.log('            ██       █▄  ▒█████  ▒███████▒▒███████▒ ▒█████')
    console.log('           ░██       ░█ ▒██▒  ██▒▒ ▒ ▒ ▄▀░▒ ▒ ▒ ▄▀░▒██▒  ██▒')
    console.log('           ░██      ░█▀ ▒██░  ██▒░ ▒ ▄▀▒░ ░ ▒ ▄▀▒░ ▒██░  ██▒')
    console.log('           ▒██     ░█▀░ ▒██   ██░  ▄▀▒   ░  ▄▀▒   ░▒██   ██░')
    console.log('          ▄█████████▀▒  ░ ████▓▒░▒███████▒▒███████▒░ ████▓▒░')
    console.log('              ▒░ ▒  ▒   ░ ▒ ▒░ ░░▒ ▒ ░ ▒░░▒ ▒ ░ ▒  ░ ▒ ▒░')
    console.log('               ░          ░ ░     ▒      ░ ░  ▒     ░')
    console.log('                           ░               ░')
    console.log('                                            Menu                                            ')
    console.log(nouvChn)
}

//DISPLAY OPTION

function option(select) {
    console.clear()

    var chn = '           - FR [1]                        - Difficulté [2] [▓░░░░]\n\n           - Son [3] [▓░░░░]               - Retour [4]'
    var nouvChn = chn.replace(select, '*');
    console.log('\n\n\n')
    console.log('          ▀█████████▄  BINVENUE DANS LE DONJON DU ...')
    console.log('            ██▒     █▄                                        ᚐ ᚐ ᚐ  ')
    console.log('            ██       █▄  ▒█████  ▒███████▒▒███████▒ ▒█████')
    console.log('           ░██       ░█ ▒██▒  ██▒▒ ▒ ▒ ▄▀░▒ ▒ ▒ ▄▀░▒██▒  ██▒')
    console.log('           ░██      ░█▀ ▒██░  ██▒░ ▒ ▄▀▒░ ░ ▒ ▄▀▒░ ▒██░  ██▒')
    console.log('           ▒██     ░█▀░ ▒██   ██░  ▄▀▒   ░  ▄▀▒   ░▒██   ██░')
    console.log('          ▄█████████▀▒  ░ ████▓▒░▒███████▒▒███████▒░ ████▓▒░')
    console.log('              ▒░ ▒  ▒   ░ ▒ ▒░ ░░▒ ▒ ░ ▒░░▒ ▒ ░ ▒  ░ ▒ ▒░')
    console.log('               ░          ░ ░     ▒      ░ ░  ▒     ░')
    console.log('                           ░               ░')
    console.log('                                           Option                                           ')
    console.log(nouvChn)
}

//DISPLAY A PROPOS

function propos(select) {
    console.clear()

    var chn = '                                Retour [1]                                '
    var nouvChn = chn.replace(select, '*');
    console.log('\n\n\n')
    console.log('          ▀█████████▄  BINVENUE DANS LE DONJON DU ...')
    console.log('            ██▒     █▄                                        ᚐ ᚐ ᚐ  ')
    console.log('            ██       █▄  ▒█████  ▒███████▒▒███████▒ ▒█████')
    console.log('           ░██       ░█ ▒██▒  ██▒▒ ▒ ▒ ▄▀░▒ ▒ ▒ ▄▀░▒██▒  ██▒')
    console.log('           ░██      ░█▀ ▒██░  ██▒░ ▒ ▄▀▒░ ░ ▒ ▄▀▒░ ▒██░  ██▒')
    console.log('           ▒██     ░█▀░ ▒██   ██░  ▄▀▒   ░  ▄▀▒   ░▒██   ██░')
    console.log('          ▄█████████▀▒  ░ ████▓▒░▒███████▒▒███████▒░ ████▓▒░')
    console.log('              ▒░ ▒  ▒   ░ ▒ ▒░ ░░▒ ▒ ░ ▒░░▒ ▒ ░ ▒  ░ ▒ ▒░')
    console.log('               ░          ░ ░     ▒      ░ ░  ▒     ░')
    console.log('                           ░               ░')
    console.log('                                         A Propos                                           ')
    console.log('\n             Crée par Samy VERA, Robin BIGEARD, Olivier CROCHET         \n\n')
    console.log(nouvChn)
}

function combat(select) {
    console.clear()

    var chn = '          - Attaque [1]                        - Concentration [2]\n          - Inventaire [3]                     - Capacité [X]'
    var nouvChn = chn.replace(select, '*');
    var msg = '                               * Slection *                                  '
    console.log('\n\n\n')
    console.log('[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]PV[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]')
    console.log('')
    console.log('')
    console.log('             [ Bigeard ]                           [ Zombie ]             ')
    console.log('               ______                                 _____               ')
    console.log('              ( ͡° ͜ʖ ͡°)/                             \\(✖╭╮✖)              ')
    console.log('                                                                             ')
    console.log('               /    \\                                 /    \\              ')
    console.log('')
    console.log('')
    console.log('                                         A Propos                                           ')
    console.log(msg)
    console.log(nouvChn)
}

function attaque(select) {
    console.clear()

    var chn = '\n           - Attaque [1]                         - Attaque [2]\n           - Attaque [3]                         - Retour  [4]'
    var nouvChn = chn.replace(select, '*');
    var msg = '                               * Slection *                                  '
    console.log('\n\n\n')
    console.log('[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]PV[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]')
    console.log('')
    console.log('')
    console.log('             [ Bigeard ]                           [ Zombie ]             ')
    console.log('               ______                                 _____               ')
    console.log('              ( ͡° ͜ʖ ͡°)/                             \\(✖╭╮✖)              ')
    console.log('                                                                             ')
    console.log('               /    \\                                 /    \\              ')
    console.log('')
    console.log('')
    console.log('                                          Attaque                                           ')
    console.log(msg)
    console.log(nouvChn)
}
