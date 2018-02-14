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

var positionDuCurseur = 1;

var main = function() {
	afficherIntroductionJeu();
	afficherJeu(EcranTitre, EcranTitre, EcranTitre);
	afficherFinJeu();
}


var afficherIntroductionJeu = function() {
    //INSTRUCTIONS
}


var afficherJeu = function(menuActuel, messageActuel, visuelActuel) {
	afficherMenu(menuActuel, positionDuCurseur);
	afficherMessage(messageActuel);
	afficherVisuel(visuelActuel);
}


var afficherFinJeu = function() {
	//INSTRUCTIONS
}


var afficherMenu = function(menuActuel, positionDuCurseur) {
//ON INDEX LES EMPLACEMENTS DU MENU
    var contenuDuMenu;
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
    var nomEmplacementActuel = menuActuel.emplacements[positionDuCurseur];
    document.getElementById(nomEmplacementActuel).style.color = "white";
//AIDE DEV SUR L'AFFICHAGE EXTERNE
    document.getElementById('select').innerHTML = "[posCurseur : "
    +positionDuCurseur
    +"]<br>[nomPage : "
    +currentPage.nom
    +"]<br>[nonSlot : "
    +nomEmplacementActuel
    +"]";
//ON REVOIT L'EMPLACEMENT DELECTIONNE
    return nomEmplacementActuel;
}


var afficherMessage = function(messageActuel) {
	document.getElementById("affichageMessage").innerHTML = messageActuel.contenu;
}


var afficherVisuel = function(visuelActuel) {
	document.getElementById("affichageVisuel").innerHTML = visuelActuel.visuel;
}


var changerMenu = function(nomEmplacementActuel) {
    //ON CHANGE LE MENU EN PRENANT L'ENPLACEMENT ACTUEL DU CURSEUR
    menuActuel = nomEmplacementActuel;
    //ON RESET LA POSITION DU CURSEUR
    positionDuCurseur = 1;
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