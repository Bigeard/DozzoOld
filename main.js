/*
main

afficherJeu
afficherIntroductionJeu
afficherFin Jeu

afficherMenu
afficherMessage
afficherVisuel

changerMenu
changerMessage
changerVisuel
*/


var main = function() {
	afficherIntroductionJeu();
	afficherJeu(menuEcranTitre, messageEcranTitre, visuelEcranTitre);
	afficherFinJeu();
}


var afficherIntroductionJeu = function() {
    //INSTRUCTIONS
}


var afficherJeu = function(menuActuel, messageActuel, visuelActuel) {
	afficherMenu(menuActuel);
	afficherMessage(messageActuel);
	afficherVisuel(visuelActuel);

    if (onPeutAppuyerSurLesTouches) {
        controleJoueur(menuActuel, messageActuel, visuelActuel);
    }
}


var changerJeu = function(menuActuel, messageActuel, visuelActuel) {
    changerMenu(menuActuel);
    console.log(nouveauMenu);
    changerMessage(messageActuel);
    changerVisuel(visuelActuel);
    return nouveauMenu, messageActuel, visuelActuel;
}


var afficherFinJeu = function() {
	//INSTRUCTIONS
}


var afficherMenu = function(menuActuel) {
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
    +positionDuCurseur
    +"]<br>[Menu : "
    +menuActuel.nom
    +"]<br>[Slot : "
    +menuActuel.emplacements[positionDuCurseur].nom
    +"]";

//ON REVOIT L'EMPLACEMENT DELECTIONNE
    return menuActuel.emplacements[positionDuCurseur];
}


var afficherMessage = function(messageActuel) {
	document.getElementById("affichageMessage").innerHTML = messageActuel.contenu;
}


var afficherVisuel = function(visuelActuel) {
	document.getElementById("affichageVisuel").innerHTML = visuelActuel.contenu;
}


var changerMenu = function(menuActuel) {
    var nouveauMenu = menuActuel.emplacements[positionDuCurseur];
    return nouveauMenu;
}


var changerMessage = function(messageActuel) {
    //var messageActuel = nouveauMessage;
    return messageActuel;
}


var changerVisuel = function(visuelActuel) {
    //var visuelActuel = nouveauVisuel;
    return visuelActuel;
}