function Inventaire(Objet) {
    this.Objet = Objet

    function OuvrirInventaire() {
        console.log(InventaireJoueur.Objet)
    }

    function AjouterObjet(Objet){
        InventaireJoueur += Objet
    }
}

Inventaire.prototype = Object.create(Inventaire.prototype)

Inventaire.prototype.constructor = Inventaire

var InventaireJoueur = new Inventaire([PotionDeSoin, Rapiere])

InventaireJoueur.OuvrirInventaire()
    


/*if (ganteletDeFer.estEquipe == true){
    console.log(ganteletDeFer.nom + ", " + ganteletDeFer.description)
    console.warn("equipé")
    }
    else{
    console.log(ganteletDeFer.nom + ", " + ganteletDeFer.description)
    }*/