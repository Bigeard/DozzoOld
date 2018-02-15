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
    changerMessage(messageActuel);
    changerVisuel(visuelActuel);
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


var changerMenu = function(objetEmplacementActuel) {
    //ON CHANGE LE MENU EN PRENANT L'ENPLACEMENT ACTUEL DU CURSEUR
    menuActuel = objetEmplacementActuel;
	//ON RETOURNE LE NOUVEAU MENU
	return menuActuel;
}


var changerMessage = function(nouveauMessage) {
    messageActuel = nouveauMessage;
    return messageActuel;
}


var changerVisuel = function(nouveauVisuel) {
    visuelActuel = nouveauVisuel;
    return visuelActuel;
}