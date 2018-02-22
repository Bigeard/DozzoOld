
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function Concentration (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Concentration.prototype = Object.create(Concentration.prototype);
Concentration.prototype.constructor = Concentration;


var concentration = new Concentration('Concentration', undefined);