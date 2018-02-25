var competenceJoueur = {
    competence: [ classeGuerrier.competence ]
}

var competenceEnnemi = {
    competence: [ classeAbomination.competence ]
}

var competenceTour;

changerCompetence = function() {
    if (tourJoueur) {
        competenceTour = competenceJoueur;
    }
    else {
        competenceTour = competenceEnnemi;
    }
}