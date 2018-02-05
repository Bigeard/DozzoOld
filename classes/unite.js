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

	//Classes
	public setMage() {
		this.classe = "Mage";

		this.sante += 30;
		this.mana += 25;
		this.attaque += 1;
		this.magie += 8;
		this.defense += 2;
		this.resistance += 4;
		this.competance = "Incantation";
	}
	public setGuerrier() {
		this.classe = "Guerrier";

		this.sante += 50;
		this.mana += 5;
		this.attaque += 10;
		this.magie += 0;
		this.defense += 5;
		this.resistance += 1;
		this.competance = "Rage";
	}
	public setAssassin() {
		this.classe = "Assassin";

		this.sante += 30;
		this.mana += 10;
		this.attaque += 15;
		this.magie += 5;
		this.defense += 2;
		this.resistance += 2;
		this.competance = "Camouflage";
	}
	public setAbomination() {
		this.classe = "Abomination";

		this.sante += 50;
		this.mana += 0;
		this.attaque += 12;
		this.magie += 0;
		this.defense += 7;
		this.resistance += 4;
		this.competance = "Empoisonnement";
	}
	public setMageNoir() {
		this.classe = "Mage noir";

		this.sante += 40;
		this.mana += 30;
		this.attaque += 0;
		this.magie += 10;
		this.defense += 5;
		this.resistance += 8;
		this.competance = "Entrave";
	}

	public get nom(nom) {
		return this.nom;
	}
	public set nom(nom) {
		this.nom = nom;
	}

	method(...) {}
	get something(...) {}
	set something(...) {}
	static staticmethod(...) {}
}