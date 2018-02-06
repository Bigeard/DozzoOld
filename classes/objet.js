function Objet (nom, effet, description) {
    this.nom = nom
    this.effet = effet
    this.description = description
}



var baton = new Objet("baton du vide", "effet", "un baton ordinaire")

var potionDeSoin = new Objet("potion de soin", "effet", "potion qui rend 10 PV")


var inventaire = {

ajouterObjet : function() {
    return 0
},

ouvrir : function (baton, potionDeSoin) {
console.log(Objet.nom + " x" + baton.quantite)

console.log(potionDeSoin.nom + " x" + potionDeSoin.quantite)
}
}
var inventaire = Object.create(inventaire)
inventaire.ouvrir(baton, potionDeSoin)
