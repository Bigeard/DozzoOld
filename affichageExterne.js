function affichageHero() {

    var changeClasse = [classeGuerrier, classeMage, classeAssassin, classeMageNoir];
    var chowClasse;

    for (var x = 0; x < changeClasse.length; x++) {
        chowClasse = changeClasse[x];
        document.getElementById("hero-" + x).innerHTML = chowClasse.nom + "<span class=\"tooltiptext\">" +
            chowClasse.nom +
            "<br><img class=\"img-classe\" src=\"img/" + chowClasse.nom + ".gif\">" +
            "<br> PV : " + chowClasse.ptsVie +
            "<br> ATK : " + chowClasse.attaque +
            "<br> MAG : " + chowClasse.magie +
            "<br> DEF : " + chowClasse.defense +
            "<br> RES : " + chowClasse.resistance +
            "<br> VIT : " + chowClasse.vitesse +
            "<br>---------------" + "<br> Capacité :<br>" + chowClasse.competence.nom + "</p></span>";
    }
}

function affichageStats() {

    var changeUnite = [uniteJoueur, uniteEnnemi];
    var chowUnite;

    for (var x = 0; x < changeUnite.length; x++) {
        chowUnite = changeUnite[x]
        document.getElementById("unit-" + x).innerHTML = chowUnite.nom + "<span><br>" +
            "<br> PV : " + chowUnite.ptsVie + "/" + chowUnite.ptsVieMax +
            "<br> ATK : " + chowUnite.attaqueMax +
            "<br> MAG : " + chowUnite.magieMax +
            "<br> DEF : " + chowUnite.defenseMax +
            "<br> RES : " + chowUnite.resistanceMax +
            "<br> VIT : " + chowUnite.vitesseMax + "</p>";
    }
}