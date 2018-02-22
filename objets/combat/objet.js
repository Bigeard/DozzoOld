
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function Objet (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif, effet, description) {

    this.nom = nom
    this.effet = effet
    this.description = description
}

function Consommable (nom, ptsVieModif, ptsManaModif, attaqueModif, 
magieModif, defenseModif, resistanceModif, effet, description, quantite) {

    Objet.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif,effet, description)

    this.quantite = quantite;
}

function Equipement (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, 
defenseModif, resistanceModif, effet, description, typeEquipement) {

    Objet.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif,
        magieModif, defenseModif, resistanceModif, effet, description)

    this.typeEquipement = typeEquipement;
}

function Armure (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif,
defenseModif, resistanceModif,effet, description, typeEquipement, estEquipe){

    Equipement.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif,
    defenseModif, resistanceModif, effet, description, typeEquipement)

    this.estEquipe = estEquipe;
}

Consommable.prototype = Object.create(Objet.prototype);

Consommable.prototype.constructor = Consommable;
var Rapiere = new Equipement("Rapière", 0, 0, 4, 0, 0, 0, "effet", "épée longue et fine", "épée");

var PotionDeSoin = new Consommable("Potion de soin", 10, 0, 0, 0, 0, 0, "effet", "Potion qui soigne 10PV", 2);

var ganteletDeFer = new Armure("Gantelet de fer", 0, 0, 0, 0, 2, 0, "effet", "protection pour les poignets", "gant", true);
 
/*var Objet = {

  init: function (nom, action, type, quantite) {

    this.nom = nom;
    this.niveau = niveau;
    this.experience = experience;
  },

  getNom: function(nom) {
    return this.nom;
  },
  setNom: function(nom) {
    this.nom = nom;
  },


  getNiveau: function(niveau) {
    return this.niveau;
  },
  setNiveau: function(niveau) {
    this.niveau = niveau;
  },


  getExperience: function(experience) {
    return this.experience;
  },
  setExperience: function(experience) {
    this.experience = experience;
  }
};*/