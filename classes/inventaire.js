function Inventaire(Objet) {
    this.Objet = Objet;
}

Inventaire.prototype = Object.create(Inventaire.prototype);
Inventaire.prototype.constructor = Inventaire;

var InventaireConsommable = new Inventaire([PotionDeSoin]);
var InventaireEquipement = new Inventaire([Rapiere]);

function OuvrirInventaire(Inventaire) {
    
    for(i = 0; i < Inventaire.Objet.length; i++) {
        console.log(Inventaire.Objet[i].nom)
    }

}

function AjouterObjet(Inventaire, Objet){
    InventaireJoueur.Objet[InventaireJoueur.Objet.length ++] = Objet;
}
