var visuelEcranTitre = {
    contenu: function() {
        document.getElementById("affichageVisuel").style.height = "";
    	document.getElementById("affichageVisuel").innerHTML = "<img src=\"img/dozzo.png\">";
    }
}

var visuelCombat = {
	contenu: function() {

        var unites = [uniteJoueur, uniteEnnemi];

        var healthBar1;
        var healthBar2;
        var healthBars = [healthBar1, healthBar2];

        for (var i = 0; i < healthBars.length; i++) {
            healthBars[i] = '';
            healthBars[i] += "<img src=\"img/barLeft.png\">"
            for (var j = 0; j < Math.round(unites[i].ptsVie*50/unites[i].ptsVieMax); j++) {
                healthBars[i] += "<img src=\"img/barMiddle.png\">"
            }
            for (var k = 0; k < Math.round(50-(unites[i].ptsVie*50/unites[i].ptsVieMax)); k++) {
                healthBars[i] += "<img src=\"img/barEmpty.png\">"
            }
            healthBars[i] += "<img src=\"img/barRight.png\">"
        }

        var dozzoBar1;
        var dozzoBar2;
        var dozzoBars = [dozzoBar1, dozzoBar2];

        for (var i = 0; i < dozzoBars.length; i++) {
            dozzoBars[i] = '';
            for (var j = 0; j < Math.round(unites[i].ptsDozzo*3/unites[i].ptsDozzoMax); j++) {
                dozzoBars[i] += "<img src=\"img/barreDozzo.png\">"
            }
            for (var k = 0; k < Math.round(3-(unites[i].ptsDozzo*3/unites[i].ptsDozzoMax)); k++) {
                dozzoBars[i] += "<img src=\"img/barreDozzoVide.png\">"
            }
        }

        document.getElementById("affichageVisuel").innerHTML = 
        "<div class=\"arriere-plan-combat\"><br>" +
        healthBars[0] + " VS " + healthBars[1] +
        dozzoBars[0] + " &nbsp&nbsp " + dozzoBars[1] +
        "<br><br><br><br><br><br><img class=\"img-unite-combat\" src=\"img/guerrier.gif\">" +
        "<img class=\"img-unite-combat\" src=\"img/abomination.gif\"></div>";
	}
}

var visuelSelectionClasse = {
    contenu: function() {
        document.getElementById("affichageVisuel").innerHTML = "Sélectionne ta classe !";
    }
}

var visuelNouvellePartie = {
    contenu: function() {
        document.getElementById("affichageVisuel").innerHTML = "<p> Qui es-tu ? <br><br><br>" + uniteJoueur.nom + "</p>";
    }
}


var visuelOptions = {
    contenu: function() {
        document.getElementById("affichageVisuel").innerHTML = "";
        document.getElementById("affichageVisuel").style.height = "0px";
    }
}

var visuelAPropos = {
    contenu: function() {
    	document.getElementById("affichageVisuel").innerHTML = 
        "<br><br><br><br><br><p class=\"a-propos bordure-nes\" ><br>Jeu en bêta pour le moment... Crée par :<br><br>Samy Vera<br><br>Robin Bigeard<br><br>Olivier Crochet<br><br><br></p><br>";
    }
}

var visuelActuel = {contenu:undefined};