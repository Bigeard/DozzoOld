var messageEcranTitre = {
    
    contenu: function() {
    	document.getElementById("affichageMessage").innerHTML = "<div class=\"nesBox messageBox\">Je suis un test qui va disparaitre.<br>Je suis sur l'écran Titre !?</div><br>";
    }
}

var messageNouvellePartie = {

	contenu: function() {
		document.getElementById("affichageMessage").innerHTML = "<div class=\"nesBox messageBox\">Hmm...</div><br>";
	}
}

var messageActuel = messageEcranTitre;