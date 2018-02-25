var afficherJeu = function () {
    afficherMenu();
    afficherMessage();
    afficherVisuel();
}


var afficherMenu = function () {
    //ON INDEX LES EMPLACEMENTS DU MENU
    var contenuDuMenu = '';
    for (var i = 0; i < menuActuel.emplacements.length; i++) {
        contenuDuMenu += '<button class=\"selection\"id=\"'
            + menuActuel.emplacements[i].nom
            + '\">'
            + '&nbsp&nbsp'
            + menuActuel.emplacements[i].nom
            + '</button>';

        if (menuActuel.dispositionVertciale) {
            contenuDuMenu += "<br>";
        }
    }

    //ON AFFICHE LE MENU
    document.getElementById("affichageMenu").innerHTML = contenuDuMenu;
    //ON RECUPERE LE NOM DE L'EMPLACEMENT DU CURSEUR ET ON LE MET EN BLANC
    document.getElementById(menuActuel.emplacements[positionDuCurseur].nom).innerHTML = "► " + menuActuel.emplacements[positionDuCurseur].nom;
    
    document.getElementById(menuActuel.emplacements[positionDuCurseur].nom).style.color = "white";

    //STYLE DIFFERENCES EN F0NCTION DE LA DISPOSITION
    if (menuActuel.dispositionVertciale) {
        document.getElementById("affichageMenu").style.textAlign = "left";
        document.getElementById("affichageMenu").style.paddingLeft = "155px";
        document.getElementById("affichageMenu").style.backgroundImage = "none";
        document.getElementById("affichageMenu").style.display = "block";
        document.getElementById("affichageMenu").style.flexWrap = "none";
    }
    else {
        document.getElementById("affichageMenu").style.textAlign = "center";
        document.getElementById("affichageMenu").style.paddingLeft = "0px";
        document.getElementById("affichageMenu").style.backgroundImage = "url('img/affichageMenuBackground.png')";
        document.getElementById("affichageMenu").style.display = "flex";
        document.getElementById("affichageMenu").style.flexWrap = "wrap";
    }

    //AIDE DEV SUR L'AFFICHAGE EXTERNE
    document.getElementById('aideDev').innerHTML = "[posCurseur : "
        + positionDuCurseur
        + "]<br>[Menu : "
        + menuActuel.nom
        + "]<br>[Slot : "
        + menuActuel.emplacements[positionDuCurseur].nom
        + "]";
}


var afficherMessage = function () {
    messageActuel.contenu();
}


var afficherVisuel = function () {
    visuelActuel.contenu();
}