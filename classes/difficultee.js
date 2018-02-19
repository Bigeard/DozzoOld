function Difficultee (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Difficultee.prototype = Object.create(Difficultee.prototype);
Difficultee.prototype.constructor = Difficultee;

var facile = new Difficultee('Facile', undefined);
var medium = new Difficultee('Medium', undefined);
var difficile = new Difficultee('Difficile', undefined);