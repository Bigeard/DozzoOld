var messageEcranTitre = {
    contenu: function() {
    	document.getElementById("affichageMessage").innerHTML = "";
    }
}

var messageOption = {
	contenu: function() {
		document.getElementById("affichageMessage").innerHTML = "";
	}
}

var messageApropos = {
	contenu: function() {
		document.getElementById("affichageMessage").innerHTML = "";
	}
}

var messageNouvellePartie = {
	contenu: function() {
		document.getElementById("affichageMessage").innerHTML = "<div class=\"bordure-nes message\">Un monstre veut se battre...<br>Que faire !?</div><br>";
	}
}

var messageAction = {
	contenu: function() {
		document.getElementById("affichageMessage").innerHTML = "<div class=\"bordure-nes message\">Quelle action serait la plus efficace !?</div><br>";
	}
}

var messageInventaire = {
	contenu: function() {
		document.getElementById("affichageMessage").innerHTML = "<div class=\"bordure-nes message\">Fait un choix vite !?!</div><br>";
	}
}

var messageActuel = {contenu:undefined}