var visuelEcranTitre = {
    
    contenu: function() {
    	document.getElementById("affichageVisuel").innerHTML = "<img src=\"img/BannerDozzo.png\"><br>";
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
        "<div class=\"fightBackground\"><br>" + healthBar + " VS " + healthBar +
        "<br><br><br><br><br><br><br><img class=\"combat-img\" src=\"img/guerrier.gif\">" +
        "<img class=\"combat-img\" src=\"img/abomination.gif\"></div>";
	}
}

var visuelOptions = {
    
    contenu: function() {
    	var son = "ON"
        var difficulter = "Normal"
        document.getElementById("affichageVisuel").innerHTML =
        "<div class=\"option\"><br><br><br><br><div class\"son-option\" >Son : " + son + " &nbsp;&nbsp;<label class=\"switch\"><input type=\"checkbox\"><span class=\"slider\"></span></label></div>" +
        "<br><div class\"\" >Difficultée : " + difficulter + " &nbsp;&nbsp;</div></div>";
    }
}

var visuelAPropos = {
    
    contenu: function() {
    	document.getElementById("affichageVisuel").innerHTML = 
        "<br><p class=\"a-propos nesBox\" ><br>Jeu en bêta pour le moment... Crée par :<br><br>Samy Vera<br><br>Robin Bigeard<br><br>Olivier Crochet<br><br><br></p><br>";
    }
}



var visuelActuel = {contenu:undefined};