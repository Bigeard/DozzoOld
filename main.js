var positionDuCurseur = 0;

menuActuel = menuEcranTitre;
messageActuel = messageEcranTitre;
visuelActuel = visuelEcranTitre;

var main = function() {
	afficherJeu();
}


var afficherIntroductionJeu = function() {
    //INSTRUCTIONS
    console.log("coucou de la mort begin");
}
var afficherFinJeu = function() {
    //INSTRUCTIONS
    console.log("coucou de la mort end");
}


var changerJeu = function() {
    changerMenu();
    changerMessage();
    changerVisuel();
}


var changerMenu = function() {
    menuActuel = menuActuel.emplacements[positionDuCurseur];
}
var changerMessage = function() {
    messageActuel = menuActuel.message;
}
var changerVisuel = function() {
    visuelActuel = menuActuel.visuel
}