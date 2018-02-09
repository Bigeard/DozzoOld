function Objet (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif, effet, description) {
    this.nom = nom
    this.effet = effet
    this.description = description
}

function Consommable (nom, effet, description, quantite){
    Objet.call(this, nom, effet, description)

    this.quantite = quantite
}

function Equipement (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif, effet, description, typeEquipement){
    Objet.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif, effet, description)

    this.typeEquipement = typeEquipement
}

function Armure (nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif, effet, description, typeEquipement, estEquipe){
    Objet.call(this, nom, ptsVieModif, ptsManaModif, attaqueModif, magieModif, defenseModif, resistanceModif, effet, description)

    this.estEquipe = estEquipe
}
    //var baton = new Objet("baton du vide", "effet", "un baton ordinaire")

Consommable.prototype = Object.create(Objet.prototype)

Consommable.prototype.constructor = Consommable
var Rapiere = new Equipement("Rapière", 0, 0, 4, 0, 0, 0, "effet", "épée longue et fine", "épée")

var PotionDeSoin = new Consommable("Potion de soin","effet", "Potion qui soigne 10PV", 2)

console.log(PotionDeSoin.nom + " x" + PotionDeSoin.quantite)

console.log(Rapiere.nom)



/*var inventaire = {

    ajouterObjet : function() {
        return 0
    },
    
    ouvrir : function (baton, potionDeSoin) {
    console.log(baton.nom + " x" + baton.description)  
    
    console.log(potionDeSoin.nom + " x" + potionDeSoin.quantite)
    }
}
    
var inventaire = Object.create(inventaire)
inventaire.ouvrir(baton, potionDeSoin)*/

