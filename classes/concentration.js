function Concentration (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Concentration.prototype = Object.create(Concentration.prototype);
Concentration.prototype.constructor = Concentration;


var concentration = new Concentration('Concentration', undefined);