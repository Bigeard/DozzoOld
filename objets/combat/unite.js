
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

var Unite = {

	init: function (nom, niveau, experience, concentration, classe, maitriseTypeEquipement, competance,
		ptsVie, ptsMana, attaque, magie, defense, resistance, 
		ptsVieMax, ptsManaMax, attaqueMax, magieMax, defenseMax, resistanceMax) {

		//Identification
		this.nom = nom;
		this.niveau = niveau;
		this.experience = experience;
		this.concentration = concentration;
		this.classe = undefined;
		this.competance = competance;
	
		//Statistiques

		this.ptsVie = ptsVie;
		this.ptsMana = ptsMana;
		this.attaque = attaque;
		this.magie = magie;
		this.defense = defense;
		this.resistance = resistance;

		//StatistiquesMax
		
		this.ptsVieMax = ptsVieMax;
		this.ptsManaMax = ptsManaMax;
		this.attaqueMax = attaqueMax;
		this.magieMax = magieMax;
		this.defenseMax = defenseMax;
		this.resistanceMax = resistanceMax;
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
		this.attaqueMax += 1;
		this.magieMax += 8;
		this.defenseMax += 2;
		this.resistanceMax += 4;
		this.competance = "Incantation";
		}
		else if (classe === "Guerrier") {
		this.classe = "Guerrier"

		this.ptsVieMax += 50;
		this.ptsManaMax += 5;
		this.attaqueMax += 10;
		this.magieMax += 0;
		this.defenseMax += 5;
		this.resistanceMax += 1;
		this.competance = "Rage";
		}
		else if (classe === "Assassin") {
		this.classe = "Assassin"

		this.ptsVieMax += 30;
		this.ptsManaMax += 10;
		this.attaqueMax += 15;
		this.magieMax += 5;
		this.defenseMax += 2;
		this.resistanceMax += 2;
		this.competance = "Camouflage";
		}
		else if (classe === "Mage noir") {
		this.classe = "Mage noir"

		this.ptsVieMax += 40;
		this.ptsManaMax += 30;
		this.attaqueMax += 0;
		this.magieMax += 10;
		this.defenseMax += 5;
		this.resistanceMax += 8;
		this.competance = "Entrave";
		}
		else if (classe === "Abomination") {
		this.classe = "Abomination"

		this.ptsVieMax += 50;
		this.ptsManaMax += 0;
		this.attaqueMax += 12;
		this.magieMax += 0;
		this.defenseMax += 7;
		this.resistanceMax += 4;
		this.competance = "Empoisonnement";
		}
	},


	getPtsVie: function(maitriseTypeEquipement) {
		return this.maitriseTypeEquipement;
	},
	setPtsVie: function(maitriseTypeEquipement) {
		this.maitriseTypeEquipement = maitriseTypeEquipement;
	},


	getPtsVie: function(competance) {
		return this.competance;
	},
	setPtsVie: function(competance) {
		this.competance = competance;
	},

	//Statistiques

	getPtsVieMax: function(ptsVie) {
		return this.ptsVie;
	},
	setPtsVieMax: function(ptsVie) {
		this.ptsVie = ptsVie;
	},


	getptsManaMax: function(ptsMana) {
		return this.ptsMana;
	},
	setptsManaMax: function(ptsMana) {
		this.ptsMana = ptsMana;
	},


	getAttaque: function(attaque) {
		return this.attaque;
	},
	setAttaque: function(attaque) {
		this.attaque = attaque;
	},


	getMagie: function(magie) {
		return this.magie;
	},
	setMagie: function(magie) {
		this.magie = magie;
	},


	getDefense: function(defense) {
		return this.defense;
	},
	setDefense: function(defense) {
		this.defense = defense;
	},


	getResistance: function(resistance) {
		return this.resistance;
	},
	setResistance: function(resistance) {
		this.resistance = resistance;
	},

	//StatistiquesMax

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


	getAttaque: function(attaqueMax) {
		return this.attaqueMax;
	},
	setAttaque: function(attaqueMax) {
		this.attaqueMax = attaqueMax;
	},


	getMagie: function(magieMax) {
		return this.magieMax;
	},
	setMagie: function(magieMax) {
		this.magieMax = magieMax;
	},


	getDefense: function(defenseMax) {
		return this.defenseMax;
	},
	setDefense: function(defenseMax) {
		this.defenseMax = defenseMax;
	},


	getResistance: function(resistanceMax) {
		return this.resistanceMax;
	},
	setResistance: function(resistanceMax) {
		this.resistanceMax = resistanceMax;
	}
};

function testUnite() {
	var herotest = Object.create(Unite);
	herotest.init("undefined", 0, 0, 0, "undefined", "undefined", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	
	herotest.setClasse("Mage");
	herotest.setNom(prompt("Entrez un nom : "));
	
	function decrire(personnage) {
	    var description ="Nom : " + personnage.nom + " Niveau : " + personnage.niveau + " Exp : " + personnage.experience + " Super : " + personnage.concentration + " Classe : " +
	    personnage.classe + " PV : " + personnage.ptsVieMax + " PM : " + personnage.ptsManaMax + " ATK : " + personnage.attaque + " MAG : " + personnage.magieMax + " DEF : " +
	    personnage.defenseMax + " RES : " + personnage.resistanceMax + " Competance : " + personnage.competance;
	    return description;
	}
	console.log(decrire(herotest));
}

//testUnite();