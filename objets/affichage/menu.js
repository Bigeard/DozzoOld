var menuObjet = {
    nom: 'Objet',
    dispositionVertciale: false,
    emplacements: [potionDeSoin, retour],
    message: messageObjet,
    visuel: visuelNouvellePartie,
    effet: function() {
    }
}
var menuAction = {
    nom: 'Action',
    dispositionVertciale: false,
    emplacements: [rapiere, actionB, actionC, actionD, actionE, retour],
    message: messageNouvellePartie,
    visuel: visuelNouvellePartie,
    effet: function() {
    }
}
var menuCompetence = {
	nom: 'Compétences',
	dispositionVertciale: false,
	emplacements: [retour],
	message: messageNouvellePartie,
	visuel: visuelNouvellePartie,
	effet: function() {
	}
}
var menuCombat = {
    nom: 'Nouvelle Partie',
    dispositionVertciale: false,
    emplacements: [menuAction, concentration, menuCompetence, menuObjet],
    message: messageNouvellePartie,
    visuel: visuelNouvellePartie,
    effet: function() {
    }
}
var menuConfiguration = {
    nom: 'Configuration',
    dispositionVertciale: true,
    emplacements: [difficulte, commandes, fondsSonores, effetsSonores, retour],
    message: messageOption,
    visuel: visuelOptions,
    effet: function() {
    }
}
var menuAPropos = {
    nom: 'A Propos',
    dispositionVertciale: true,
    emplacements: [retour],
    message: messageApropos,
    visuel: visuelAPropos,
    effet: function() {
    }
}
var menuEcranTitre = {
    nom: 'Ecran Titre',
    dispositionVertciale: true,
    emplacements: [menuCombat, menuConfiguration, menuAPropos],
    message: messageEcranTitre,
    visuel: visuelEcranTitre,
    effet: function() {
    }
}