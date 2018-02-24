var classeMage = {
	nom: 'Mage',
	maitriseArmes: ['magie'],
	competence: competenceIncantation,

	ptsVieMax: 0,
	ptsVie: 0,
	attaque: 0,
	magie: 8,
	defense: 2,
	resistance: 4,
	vitesse: 3
}

var classeGuerrier = {
	nom: 'Guerrier',
	maitriseArmes: ['épée','hache'],
	competence: competenceRage,

	ptsVieMax: 10,
	ptsVie: 10,
	attaque: 10,
	magie: 0,
	defense: 5,
	resistance: 1,
	vitesse: 2
}

var classeAssassin = {
	nom: 'Assassin',
	maitriseArmes: ['épée','dague'],
	competence: competenceCamouflage,

	ptsVieMax: 0,
	ptsVie: 0,
	attaque: 15,
	magie: 0,
	defense: 2,
	resistance: 2,
	vitesse: 5
}

var classeMageNoir = {
	nom: 'Mage noir',
	maitriseArmes: ['magie','magieNoire'],
	competence: competenceEntrave,

	ptsVieMax: 0,
	ptsVie: 0,
	attaque: 0,
	magie: 10,
	defense: 5,
	resistance: 4,
	vitesse: 0
}

var classeAbomination = {
	nom: 'Abomination',
	maitriseArmes: ['hache','magieNoire'],
	competence: competenceEmpoisonnement,

	ptsVieMax: 10,
	ptsVie: 10,
	attaque: 12,
	magie: 10,
	defense: 7,
	resistance: 4,
	vitesse: 2
}