var visuelEcranTitre = {
    contenu: function() {
        document.getElementById("affichageVisuel").style.height = "";
    	document.getElementById("affichageVisuel").innerHTML = "<img src=\"img/dozzo.png\">";
    }
}

var visuelNouvellePartie = {
	contenu: function() {
		var healthBar = '';
        healthBar += "<img src=\"img/barLeft.png\">"
        for (var i = 0; i < 50; i++) {
            healthBar += "<img src=\"img/barMiddle.png\">"
        }
        healthBar += "<img src=\"img/barRight.png\">"

        document.getElementById("affichageVisuel").innerHTML = 
        "<div class=\"arriere-plan-combat\"><br>" + healthBar + " VS " + healthBar +
        "<br><br><br><br><br><br><br><img class=\"img-unite-combat\" src=\"img/guerrier.gif\">" +
        "<img class=\"img-unite-combat\" src=\"img/abomination.gif\"></div>";
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