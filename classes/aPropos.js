function APropos (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

APropos.prototype = Object.create(APropos.prototype);
APropos.prototype.constructor = APropos;

var aPropos = new APropos('A Propos', undefined);