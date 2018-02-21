function affichageHero() {

    var chowClasse = Object.create(Unite)
    var changeClasse = ["Guerrier", "Mage", "Assassin", "Mage noir"]

    for (var x = 0; x < changeClasse.length; x++) {
        chowClasse.init("undefined", 0, 0, 0, "undefined", "undefined", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        chowClasse.setClasse(changeClasse[x])
        document.getElementById("hero-" + x).innerHTML = chowClasse.classe + "<span class=\"tooltiptext\">" +
            chowClasse.classe +
            "<br><img class=\"img-classe\" src=\"img/" + chowClasse.classe + ".gif\">" +
            "<br> PV : " + chowClasse.ptsVieMax +
            "<br> Mana : " + chowClasse.ptsManaMax +
            "<br> ATK : " + chowClasse.attaqueMax +
            "<br> MAG : " + chowClasse.magieMax +
            "<br> DEF : " + chowClasse.defenseMax +
            "<br> RES : " + chowClasse.resistanceMax +
            "<br>---------------" + "<br> Capacité :<br>" + chowClasse.competance + "</p></span>";
    }
}

function affichageStats() {

    var chowUnit = Object.create(Unite)
    var changeUnit = ["Guerrier", "Abomination"]

    for (var x = 0; x < changeUnit.length; x++) {
        chowUnit.init("undefined", 0, 0, 0, "undefined", "undefined", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        chowUnit.setClasse(changeUnit[x])
        document.getElementById("unit-" + x).innerHTML = chowUnit.classe + "<span>" +
            "<br> PV : " + chowUnit.ptsVieMax +
            "<br> Mana : " + chowUnit.ptsManaMax +
            "<br> ATK : " + chowUnit.attaqueMax +
            "<br> MAG : " + chowUnit.magieMax +
            "<br> DEF : " + chowUnit.defenseMax +
            "<br> RES : " + chowUnit.resistanceMax + "</p>";
    }
}