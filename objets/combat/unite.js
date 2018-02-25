var uniteJoueur = {
	
	//INFOS GENERALES
	nom: 'Biloute',
	niveau: 1,
	experience: 0,
	classe: undefined,
	competance: [],

	//STATS GENERALES
	ptsDozzoMax: 3,

	ptsVieMax: 20,
	attaqueMax: 3,
	magieMax: 3,
	defenseMax: 2,
	resistanceMax: 2,
	vitesseMax: 1,

	//STATS INGAME
	ptsDozzo: 0,

	ptsVie: 20,
	attaque: 3,
	magie: 3,
	defense: 2,
	resistance: 2,
	vitesse: 1,

	//METHODES
	ajoutStatsClasse: function () {
		this.ptsVieMax += this.classe.ptsVie;
		this.ptsVie = this.ptsVieMax;
		this.attaqueMax += this.classe.attaque;
		this.attaque = this.attaqueMax;
		this.magieMax += this.classe.magie;
		this.magie = this.magieMax;
		this.defenseMax += this.classe.defense;
		this.defense = this.defenseMax;
		this.resistanceMax += this.classe.resistance;
		this.resistance = this.resistanceMax;
		this.vitesseMax += this.classe.vitesse;
		this.vitesse = this.vitesseMax;
	}
}

var uniteEnnemi = {
	
	//INFOS GENERALES
	nom: 'Monstre',
	niveau: 1,
	experience: 0,
	classe: undefined,
	competance: [],

	//STATS GENERALES
	ptsDozzoMax: 3,

	ptsVieMax: 30,
	attaqueMax: 7,
	magieMax: 0,
	defenseMax: 5,
	resistanceMax: 3,
	vitesseMax: 1,

	//STATS INGAME
	ptsDozzo: 0,

	ptsVie: 30,
	attaque: 7,
	magie: 0,
	defense: 5,
	resistance: 3,
	vitesse: 1,

	//METHODES
	ajoutStatsClasse: function () {
		this.ptsVieMax += this.classe.ptsVie;
		this.ptsVie = this.ptsVieMax;
		this.attaqueMax += this.classe.attaque;
		this.attaque = this.attaqueMax;
		this.magieMax += this.classe.magie;
		this.magie = this.magieMax;
		this.defenseMax += this.classe.defense;
		this.defense = this.defenseMax;
		this.resistanceMax += this.classe.resistance;
		this.resistance = this.resistanceMax;
		this.vitesseMax += this.classe.vitesse;
		this.vitesse = this.vitesseMax;
	}
}



changerUnite = function() {
	if (uniteJoueur.ptsVie <= 0){
		uniteJoueur.ptsVie = 0;
		//game over
	}
	if (uniteEnnemi.ptsVie <= 0){
		uniteEnnemi.ptsVie = 0;
		//win
	}
	else{
		if (uniteJoueur.ptsVie > uniteJoueur.ptsVieMax){
			uniteJoueur.ptsVie = uniteJoueur.ptsVieMax;
		}
		if (uniteEnnemi.ptsVie > uniteEnnemi.ptsVieMax){
			uniteEnnemi.ptsVie = uniteEnnemi.ptsVieMax;
		}
		uniteTour.ptsDozzo ++;
		if (uniteTour.ptsDozzo > uniteTour.ptsDozzoMax) {
			uniteTour.ptsDozzo = uniteTour.ptsDozzoMax;
		}
		if (uniteTour.ptsDozzo < 0) {
			uniteTour.ptsDozzo = 0;
		}
		menuActuel = menuCombat;
		if (tourJoueur) {
			uniteTour = uniteEnnemi;
			uniteCible = uniteJoueur;
			tourJoueur = false;
		}
		else {
			uniteTour = uniteJoueur;
			uniteCible = uniteEnnemi;
			tourJoueur = true;
		}
	}
}

var initialisationUniteJoueur = function () {
	uniteEnnemi.classe = classeAbomination;
	uniteEnnemi.ajoutStatsClasse();
	uniteJoueur.classe = classeGuerrier;
	uniteJoueur.ajoutStatsClasse();
}