
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function Son (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Son.prototype = Object.create(Son.prototype);
Son.prototype.constructor = Son;

var musiques = new Son('Fonds Sonores', undefined);

function Difficulte (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

var effetSon = new Son('Effets Sonores', undefined);

function Difficulte (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Difficulte.prototype = Object.create(Difficulte.prototype);
Difficulte.prototype.constructor = Difficulte;

var difficulte = new Difficulte('Difficulté', undefined);

var facile = new Difficulte('Facile', undefined);
var medium = new Difficulte('Medium', undefined);
var difficile = new Difficulte('Difficile', undefined);

function Commandes (nom, effet) {

	this.nom = nom;
    this.effet = effet;
}

Commandes.prototype = Object.create(Commandes.prototype);
Commandes.prototype.constructor = Commandes;

var commandes = new Commandes('Commandes', undefined);