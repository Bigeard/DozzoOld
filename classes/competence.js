function Competence (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Competence.prototype = Object.create(Competence.prototype);
Competence.prototype.constructor = Competence;


var competence = new Competence('Compétence', undefined);
