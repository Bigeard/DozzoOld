var inventaireJoueur = {
    typeAction: [ rapiere ],
    typeObjet: [ potionDeSoin, potionDeForce ],
    typeEquipement: [ ganteletDeFer ]
}

var inventaireEnnemi = {
    typeAction: [ hachette ],
    typeObjet: [ potionDeForce, potionDeSoin ],
    typeEquipement: [ casqueDeFer ]
}

var inventaireTour;

changerInventaire = function() {
	if (tourJoueur) {
    	inventaireTour = inventaireJoueur;
	}
	else {
    	inventaireTour = inventaireEnnemi;
	}
}