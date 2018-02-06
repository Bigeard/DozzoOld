var Unite = {

	init: function (nom, niveau, experience, concentration, classe,
		ptsVieMax, ptsManaMax, attaque, magie, defense, resistance, competance) {

		//Identification
		this.nom = nom;
		this.niveau = niveau;
		this.experience = experience;
		this.concentration = concentration;
		this.classe = undefined;
	
		//Statistiques
		this.ptsVieMax = ptsVieMax;
		this.ptsManaMax = ptsManaMax;
		this.attaque = attaque;
		this.magie = magie;
		this.defense = defense;
		this.resistance = resistance;
		this.competance = competance;
	},

	//Identification

	getNom: function(nom) {
		return this.nom;
	},
	setNom: function(nom) {
		this.nom = nom;
	},


	getNiveau: function(niveau) {
		return this.niveau;
	},
	setNiveau: function(niveau) {
		this.niveau = niveau;
	},


	getExperience: function(experience) {
		return this.experience;
	},
	setExperience: function(experience) {
		this.experience = experience;
	},


	getPtsVie: function(ptsVie) {
		return this.ptsVie;
	},
	setPtsVie: function(ptsVie) {
		this.ptsVie = ptsVie;
	},


	getPtsMana: function(ptsMana) {
		return this.ptsMana;
	},
	setPtsMana: function(ptsMana) {
		this.ptsMana = ptsMana;
	},


	getConcentration: function(concentration) {
		return this.concentration;
	},
	setConcentration: function(concentration) {
		this.concentration = concentration;
	},


	getClasse: function(classe) {
		return this.classe;
	},
	setClasse: function(classe) {
		if (classe === "Mage") {
		this.classe = "Mage"

		this.ptsVieMax += 30;
		this.ptsManaMax += 25;
		this.attaque += 1;
		this.magie += 8;
		this.defense += 2;
		this.resistance += 4;
		this.competance = "Incantation";
		}
		else if (classe === "Guerrier") {
		this.classe = "Guerrier"

		this.ptsVieMax += 50;
		this.ptsManaMax += 5;
		this.attaque += 10;
		this.magie += 0;
		this.defense += 5;
		this.resistance += 1;
		this.competance = "Rage";
		}
		else if (classe === "Assassin") {
		this.classe = "Assassin"

		this.ptsVieMax += 30;
		this.ptsManaMax += 10;
		this.attaque += 15;
		this.magie += 5;
		this.defense += 2;
		this.resistance += 2;
		this.competance = "Camouflage";
		}
		else if (classe === "Abomination") {
		this.classe = "Abomination"

		this.ptsVieMax += 50;
		this.ptsManaMax += 0;
		this.attaque += 12;
		this.magie += 0;
		this.defense += 7;
		this.resistance += 4;
		this.competance = "Empoisonnement";
		}
		else if (classe === "Mage noir") {
		this.classe = "Mage noir"

		this.ptsVieMax += 40;
		this.ptsManaMax += 30;
		this.attaque += 0;
		this.magie += 10;
		this.defense += 5;
		this.resistance += 8;
		this.competance = "Entrave";
		}
	},

	//Statistiques

	getPtsVieMax: function(ptsVieMax) {
		return this.ptsVieMax;
	},
	setPtsVieMax: function(ptsVieMax) {
		this.ptsVieMax = ptsVieMax;
	},


	getptsManaMax: function(ptsManaMax) {
		return this.ptsManaMax;
	},
	setptsManaMax: function(ptsManaMax) {
		this.ptsManaMax = ptsManaMax;
	},


	getAttaque: function(ptsVieMax) {
		return this.ptsVieMax;
	},
	setAttaque: function(ptsVieMax) {
		this.ptsVieMax = ptsVieMax;
	},


	getMagie: function(ptsVieMax) {
		return this.ptsVieMax;
	},
	setMagie: function(ptsVieMax) {
		this.ptsVieMax = ptsVieMax;
	},


	getDefense: function(ptsVieMax) {
		return this.ptsVieMax;
	},
	setDefense: function(ptsVieMax) {
		this.ptsVieMax = ptsVieMax;
	},


	getResistance: function(ptsVieMax) {
		return this.ptsVieMax;
	},
	setResistance: function(ptsVieMax) {
		this.ptsVieMax = ptsVieMax;
	},


	getCompetance: function(ptsVieMax) {
		return this.ptsVieMax;
	},
	setCompetance: function(ptsVieMax) {
		this.ptsVieMax = ptsVieMax;
	}
};

function testUnite() {
	var herotest = Object.create(Unite);
	herotest.init("undefined", 1, 0, 0, "undefined", 10, 5, 0, 0, 0, 0, "undefined");
	
	herotest.setClasse("Mage");
	herotest.setNom(prompt("Entrez un nom : "));
	
	function decrire(personnage) {
	    var description ="Nom : " + personnage.nom + " Niveau : " + personnage.niveau + " Exp : " + personnage.experience + " Super : " + personnage.concentration + " Classe : " +
	    personnage.classe + " PV : " + personnage.ptsVieMax + " PM : " + personnage.ptsManaMax + " ATK : " + personnage.attaque + " MAG : " + personnage.magie + " DEF : " +
	    personnage.defense + " RES : " + personnage.resistance + " Competance : " + personnage.competance;
	    return description;
	}
	console.log(decrire(herotest));
}

//testUnite();