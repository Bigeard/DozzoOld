var visuelEcranTitre = {
    
    contenu: function() {
    	document.getElementById("affichageVisuel").innerHTML = "<img src=\"img/BannerDozzo.png\"><br>"
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

        document.getElementById("Dozzo").innerHTML = 
        "<div class=\"fightBackground\"><br>" + healthBar + " VS " + healthBar +
        "<br><br><br><br><br><br><br><img class=\"combat-img\" src=\"img/guerrier.gif\">" +
        "<img class=\"combat-img\" src=\"img/abomination.gif\"></div>"
	}
}

var visuelActuel = visuelEcranTitre;