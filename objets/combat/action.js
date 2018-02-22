
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function Action (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Action.prototype = Object.create(Action.prototype);
Action.prototype.constructor = Action;


var actionA = new Action('ActionA', undefined);
var actionB = new Action('ActionB', undefined);
var actionC = new Action('ActionC', undefined);
var actionD = new Action('ActionD', undefined);
var actionE = new Action('ActionE', undefined);