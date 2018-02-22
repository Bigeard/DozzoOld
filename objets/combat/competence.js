
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function Competence (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Competence.prototype = Object.create(Competence.prototype);
Competence.prototype.constructor = Competence;


var competence = new Competence('Compétence', undefined);
