var tourEnnemi = function () {

    if ( uniteEnnemi.ptsVie > uniteEnnemi.ptsVieMax){
        uniteEnnemi.ptsVie = uniteEnnemi.ptsVieMax;
    }
    if ( uniteJoueur.ptsVie > uniteJoueur.ptsVieMax){
        uniteJoueur.ptsVie = uniteJoueur.ptsVieMax;
    }
    if (uniteEnnemi.ptsVie <= 0) {
        uniteEnnemi.ptsVie = 0;
        console.log("******* Ennemi mort *******");
    }
    else{
        uniteJoueur.ptsVie -= 4;
        console.log("tourEnnemi");
        console.log("PV Ennemi = ", uniteEnnemi.ptsVie);
        console.log("PV Guerrier = ", uniteJoueur.ptsVie);
    }
    if (uniteJoueur.ptsVie <= 0) {
        uniteJoueur.ptsVie = 0;
        console.log("******* Tu est mort *******");
    }
}