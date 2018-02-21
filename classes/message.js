var messageEcranTitre = {

    contenu: function() {
    	document.getElementById("affichageMessage").innerHTML = "<div class=\"nesBox messageBox\">Je suis un test qui va disparaitre.<br>Je suis sur l'écran Titre !?</div><br>";
    }
}

var messageNouvellePartie = {

	contenu: function() {
		document.getElementById("affichageMessage").innerHTML = "<div class=\"nesBox messageBox\">Un monstre veut se battre...<br>Que faire !?</div><br>";
	}
}

var messageActuel = {contenu:undefined}