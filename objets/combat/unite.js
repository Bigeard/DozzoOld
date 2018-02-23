var uniteJoueur = {
	
	//INFOS GENERALES
	nom: 'Biloute',
	niveau: 1,
	experience: 0,
	classe: undefined,
	competance: [undefined, undefined, undefined, undefined, undefined],

	//STATS GENERALES
	ptsDozzoMax: 3,

	ptsVieMax: 20,
	attaqueMax: 3,
	magieMax: 3,
	defenseMax: 2,
	resistanceMax: 2,
	vitesseMax: 1,

	//STATS INGAME
	ptsDozzo: this.ptsDozzoMax,

	ptsVie: this.ptsVieMax,
	attaque: this.attaqueMax,
	magie: this.magieMax,
	defense: this.defenseMax,
	resistance: this.resistanceMax,
	vitesse: this.vitesseMax
}

var uniteEnnemi = {
	
	//INFOS GENERALES
	nom: 'Monstre',
	niveau: 1,
	experience: 0,
	classe: undefined,
	competance: [undefined, undefined, undefined, undefined, undefined],

	//STATS GENERALES
	ptsDozzoMax: 3,

	ptsVieMax: 30,
	attaqueMax: 7,
	magieMax: 0,
	defenseMax: 5,
	resistanceMax: 3,
	vitesseMax: 1,

	//STATS INGAME
	ptsDozzo: this.ptsDozzoMax,

	ptsVie: this.ptsVieMax,
	attaque: this.attaqueMax,
	magie: this.magieMax,
	defense: this.defenseMax,
	resistance: this.resistanceMax,
	vitesse: this.vitesseMax
}