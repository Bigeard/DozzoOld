var menuObjet = {
    nom: 'Objet',
    dispositionVertciale: false,
    
    emplacements: [retour],
    message: messageObjet,
    visuel: visuelNouvellePartie,
    setObjet: function () {
        changerInventaire();
        menuObjet.emplacements = [retour];
        for (var i = 0; i < inventaireTour.typeObjet.length; i++) {
            menuObjet.emplacements.length++;
            menuObjet.emplacements[menuObjet.emplacements.length - 1] = retour;
            menuObjet.emplacements[menuObjet.emplacements.length - 2] = inventaireTour.typeObjet[menuObjet.emplacements.length - 2];
            menuObjet.emplacements[menuObjet.emplacements.length - 2].nom = menuObjet.emplacements[menuObjet.emplacements.length - 2].nomOriginel;
            if (tourJoueur) {
                menuObjet.emplacements[menuObjet.emplacements.length - 2].nom += " x" + menuObjet.emplacements[menuObjet.emplacements.length - 2].quantiteJoueur;
            }
            else {
                menuObjet.emplacements[menuObjet.emplacements.length - 2].nom += " x" + menuObjet.emplacements[menuObjet.emplacements.length - 2].quantiteEnnemi;
            }
        }
    },
    effet: function () {
        retour.emplacements[0] = menuActuel;
        menuObjet.setObjet();
        menuActuel = menuActuel.emplacements[positionDuCurseur];
    }
}
var menuAction = {
    nom: 'Action',
    dispositionVertciale: false,
    emplacements: [retour],
    message: messageNouvellePartie,
    visuel: visuelNouvellePartie,
    setAction: function () {
        changerInventaire();
        menuAction.emplacements = [retour];
        for (var i = 0; i < inventaireTour.typeAction.length; i++) {
            menuAction.emplacements.length ++;
            menuAction.emplacements[menuAction.emplacements.length - 1] = retour;
            menuAction.emplacements[menuAction.emplacements.length-2] = inventaireTour.typeAction[menuAction.emplacements.length-2];
        }
    },
    effet: function () {
        retour.emplacements[0] = menuActuel;
        menuAction.setAction();
        menuActuel = menuActuel.emplacements[positionDuCurseur];
    }
}
var menuCompetence = {
    nom: 'Compétences',
    dispositionVertciale: false,
    emplacements: [retour],
    message: messageNouvellePartie,
    visuel: visuelNouvellePartie,
    setCompetence: function () {
        changerCompetence();
        menuCompetence.emplacements = [retour];
        for (var i = 0; i < competenceTour.competence.length; i++) {
            menuCompetence.emplacements.length ++;
            menuCompetence.emplacements[menuCompetence.emplacements.length - 1] = retour;
            menuCompetence.emplacements[menuCompetence.emplacements.length-2] = competenceTour.competence[menuCompetence.emplacements.length-2];
        }
    },
    effet: function () {
        retour.emplacements[0] = menuActuel;
        menuCompetence.setCompetence();
        menuActuel = menuActuel.emplacements[positionDuCurseur];
    }
}
var menuCombat = {
    nom: 'Nouvelle Partie',
    dispositionVertciale: false,
    emplacements: [menuAction, concentration, menuCompetence, menuObjet],
    message: messageNouvellePartie,
    visuel: visuelNouvellePartie,
    effet: function () {
        retour.emplacements[0] = menuActuel;
        menuActuel = menuActuel.emplacements[positionDuCurseur];
    }
}
var menuConfiguration = {
    nom: 'Configuration',
    dispositionVertciale: true,
    emplacements: [difficulte, commandes, fondsSonores, effetsSonores, retour],
    message: messageOption,
    visuel: visuelOptions,
    effet: function () {
        retour.emplacements[0] = menuActuel;
        menuActuel = menuActuel.emplacements[positionDuCurseur];
    }
}
var menuAPropos = {
    nom: 'A Propos',
    dispositionVertciale: true,
    emplacements: [retour],
    message: messageApropos,
    visuel: visuelAPropos,
    effet: function () {
        retour.emplacements[0] = menuActuel;
        menuActuel = menuActuel.emplacements[positionDuCurseur];
    }
}
var menuEcranTitre = {
    nom: 'Ecran Titre',
    dispositionVertciale: true,
    emplacements: [menuCombat, menuConfiguration, menuAPropos],
    message: messageEcranTitre,
    visuel: visuelEcranTitre,
    effet: function () {
        retour.emplacements[0] = menuActuel;
        menuActuel = menuActuel.emplacements[positionDuCurseur];
    }
}