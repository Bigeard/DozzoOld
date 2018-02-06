class Unite = {

	constructor(nom, niveau, experience, concentration, classe,
		sante, mana, attaque, magie, defense, resistance, competance) {

		//Identification
		this.nom = nom;
		this.niveau = niveau;
		this.experience = experience;
		this.concentration = concentration;
		this.classe = classe;

		//Statistiques de base
		this.sante = sante;
		this.mana = mana;
		this.attaque = attaque;
		this.magie = magie;
		this.defense = defense;
		this.resistance = resistance;
		this.competance = competance;
	}

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

		this.sante += 30;
		this.mana += 25;
		this.attaque += 1;
		this.magie += 8;
		this.defense += 2;
		this.resistance += 4;
		this.competance = "Incantation";
		}
		else if (classe === "Guerrier") {
		this.classe = "Guerrier"

		this.sante += 50;
		this.mana += 5;
		this.attaque += 10;
		this.magie += 0;
		this.defense += 5;
		this.resistance += 1;
		this.competance = "Rage";
		}
		else if (classe === "Assassin") {
		this.classe = "Assassin"

		this.sante += 30;
		this.mana += 10;
		this.attaque += 15;
		this.magie += 5;
		this.defense += 2;
		this.resistance += 2;
		this.competance = "Camouflage";
		}
		else if (classe === "Abomination") {
		this.classe = "Abomination"

		this.sante += 50;
		this.mana += 0;
		this.attaque += 12;
		this.magie += 0;
		this.defense += 7;
		this.resistance += 4;
		this.competance = "Empoisonnement";
		}
		else if (classe === "Mage noir") {
		this.classe = "Mage noir"

		this.sante += 40;
		this.mana += 30;
		this.attaque += 0;
		this.magie += 10;
		this.defense += 5;
		this.resistance += 8;
		this.competance = "Entrave";
		}
	}


	public get sante(sante) {
		return this.sante;
	}
	public set sante(sante) {
		this.sante = sante;
	}


	public get mana(mana) {
		return this.mana;
	}
	public set mana(mana) {
		this.mana = mana;
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

	method(...) {}
	get something(...) {}
	set something(...) {}
	static staticmethod(...) {}
}