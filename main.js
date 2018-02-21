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
    //messageActuel = ?;
}


var changerVisuel = function() {
    //var visuelActuel = nouveauVisuel;
}