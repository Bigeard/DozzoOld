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