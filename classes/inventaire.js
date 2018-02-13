function Inventaire(nom, Objet) {
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
    if (Inventaire.length < 5){
    Inventaire.Objet[Inventaire.Objet.length ++] = Objet;
    }
    /*else{
        afficher un message du style "trop d'objet dans l'inventaire"
    }*/
}

    
