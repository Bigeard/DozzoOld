function Son (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Son.prototype = Object.create(Son.prototype);
Son.prototype.constructor = Son;

var son = new Son('Son', undefined);