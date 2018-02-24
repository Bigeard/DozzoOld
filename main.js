var positionDuCurseur = 0;

var tourJoueur = true;
var uniteTour = uniteJoueur;
var uniteCible = uniteEnnemi;

menuActuel = menuEcranTitre;
messageActuel = messageEcranTitre;
visuelActuel = visuelEcranTitre;

var main = function () {
    initialisationUniteJoueur();
    afficherJeu();
}


var afficherIntroductionJeu = function () {
    //INTRODUCTION
    console.log("Introduction Du Jeu");
}
var afficherFinJeu = function () {
    //FIN
    console.log("Fin Du Jeu");
}


var changerJeu = function () {
    changerMenu();
    changerMessage();
    changerVisuel();
}


var changerMenu = function () {
    menuActuel.emplacements[positionDuCurseur].effet();
    affichageStats();
}
var changerMessage = function () {
    messageActuel = menuActuel.message;
}
var changerVisuel = function () {
    visuelActuel = menuActuel.visuel
}