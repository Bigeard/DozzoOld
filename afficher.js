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
            + menuActuel.emplacements[i].nom
            + '</button>';
    }
    //ON AFFICHE LE MENU
    document.getElementById("affichageMenu").innerHTML = contenuDuMenu;
    //ON RECUPERE LE NOM DE L'EMPLACEMENT DU CURSEUR ET ON LE MET EN BLANC
    document.getElementById(menuActuel.emplacements[positionDuCurseur].nom).style.color = "white";

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