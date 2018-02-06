class Unite = {

	constructor(nom, niveau, experience, ptsVie, ptsMana, concentration, classe,
		ptsVieMax, ptsManaMax, attaque, magie, defense, resistance, competance) {

		//Identification
		this.nom = nom;
		this.niveau = niveau;
		this.experience = experience;
		this.ptsVie = ptsVie;
		this.ptsMana = ptsMana;
		this.concentration = concentration;
		this.classe = classe;

		//Statistiques
		this.ptsVieMax = ptsVieMax;
		this.ptsManaMax = ptsManaMax;
		this.attaque = attaque;
		this.magie = magie;
		this.defense = defense;
		this.resistance = resistance;
		this.competance = competance;
	}

	//Identification

	public get nom(nom) {
		return this.nom;
	}
	public set nom(nom) {
		this.nom = nom;
	}


	public get niveau(niveau) {
		return this.niveau;
	}
	public set niveau(niveau) {
		this.niveau = niveau;
	}


	public get experience(experience) {
		return this.experience;
	}
	public set experience(experience) {
		this.experience = experience;
	}


	public get ptsVie(ptsVie) {
		return this.ptsVie;
	}
	public set ptsVie(ptsVie) {
		this.ptsVie = ptsVie;
	}


	public get ptsMana(ptsMana) {
		return this.ptsMana;
	}
	public set ptsMana(ptsMana) {
		this.ptsMana = ptsMana;
	}


	public get concentration(concentration) {
		return this.concentration;
	}
	public set concentration(concentration) {
		this.concentration = concentration;
	}


	public get classe(classe) {
		return this.classe;
	}
	public set classe(classe) {
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
	}

	//Statistiques

	public get ptsVieMax(ptsVieMax) {
		return this.ptsVieMax;
	}
	public set ptsVieMax(ptsVieMax) {
		this.ptsVieMax = ptsVieMax;
	}


	public get ptsManaMax(ptsManaMax) {
		return this.ptsManaMax;
	}
	public set ptsManaMax(ptsManaMax) {
		this.ptsManaMax = ptsManaMax;
	}


	public get attaque(attaque) {
		return this.attaque;
	}
	public set attaque(attaque) {
		this.attaque = attaque;
	}


	public get magie(magie) {
		return this.magie;
	}
	public set magie(magie) {
		this.magie = magie;
	}


	public get defense(defense) {
		return this.defense;
	}
	public set defense(defense) {
		this.defense = defense;
	}


	public get resistance(resistance) {
		return this.resistance;
	}
	public set resistance(resistance) {
		this.resistance = resistance;
	}


	public get competance(competance) {
		return this.competance;
	}
	public set competance(competance) {
		this.competance = competance;
	}

	recoitDegat() {

	}

	recoitSoin() {

	}

	method(...) {}
	get something(...) {}
	set something(...) {}
	static staticmethod(...) {}
}