function Objet (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif, effet, description) {

    this.nom = nom
    this.effet = effet
    this.description = description
}

function Consommable (nom, ptsVieModif, ptsManaModif, attaqueModif, 
magieModif, defenseModif, resistanceModif, effet, description, quantite) {

    Objet.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif,effet, description)

    this.quantite = quantite
}

function Equipement (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, 
defenseModif, resistanceModif, effet, description, typeEquipement) {

    Objet.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif,
        magieModif, defenseModif, resistanceModif, effet, description)

    this.typeEquipement = typeEquipement
}

function Armure (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif,
defenseModif, resistanceModif,effet, description, typeEquipement, estEquipe){

    Equipement.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif,
    defenseModif, resistanceModif, effet, description, typeEquipement)

    this.estEquipe = estEquipe
}

Consommable.prototype = Object.create(Objet.prototype)

Consommable.prototype.constructor = Consommable
var Rapiere = new Equipement("Rapière", 0, 0, 4, 0, 0, 0, "effet", "épée longue et fine", "épée")

var PotionDeSoin = new Consommable("Potion de soin", 10, 0, 0, 0, 0, 0, "effet", "Potion qui soigne 10PV", 2)

var ganteletDeFer = new Armure("Gantelet de fer", 0, 0, 0, 0, 2, 0, "effet", "protection pour les poignets", "gant", true)
 