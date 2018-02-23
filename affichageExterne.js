function affichageHero() {

    var changeClasse = [classeGuerrier, classeMage, classeAssassin, classeMageNoir];
    var chowClasse;

    for (var x = 0; x < changeClasse.length; x++) {
        chowClasse = changeClasse[x];
        document.getElementById("hero-" + x).innerHTML = chowClasse.nom + "<span class=\"tooltiptext\">" +
            chowClasse.nom +
            "<br><img class=\"img-classe\" src=\"img/" + chowClasse.nom + ".gif\">" +
            "<br> PV : " + chowClasse.ptsVie +
            "<br> Mana : " + chowClasse.vitesse +
            "<br> ATK : " + chowClasse.attaque +
            "<br> MAG : " + chowClasse.magie +
            "<br> DEF : " + chowClasse.defense +
            "<br> RES : " + chowClasse.resistance +
            "<br>---------------" + "<br> Capacité :<br>" + chowClasse.competence.nom + "</p></span>";
    }
}

function affichageStats() {

    var changeUnite = [uniteJoueur, uniteEnnemi];
    var chowUnite;

    for (var x = 0; x < changeUnite.length; x++) {
        chowUnite = changeUnite[x]
        document.getElementById("unit-" + x).innerHTML = chowUnite.nom + "<span>" +
            "<br> PV : " + chowUnite.ptsVieMax +
            "<br> Mana : " + chowUnite.vitesseMax +
            "<br> ATK : " + chowUnite.attaqueMax +
            "<br> MAG : " + chowUnite.magieMax +
            "<br> DEF : " + chowUnite.defenseMax +
            "<br> RES : " + chowUnite.resistanceMax + "</p>";
    }
}