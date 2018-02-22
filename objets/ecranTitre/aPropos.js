
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function APropos (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

APropos.prototype = Object.create(APropos.prototype);
APropos.prototype.constructor = APropos;

var aPropos = new APropos('A Propos', undefined);