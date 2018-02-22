
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function Inventaire(Objet) {
    this.Objet = Objet;
}

Inventaire.prototype = Object.create(Inventaire.prototype);

Inventaire.prototype.constructor = Inventaire;

var InventaireJoueur = new Inventaire([PotionDeSoin, Rapiere]);


function OuvrirInventaire() {
    
    for(i = 0; i < InventaireJoueur.Objet.length; i++) {
        console.log("["+ (i+1) +"] " + InventaireJoueur.Objet[i].nom + ", " + InventaireJoueur.Objet[i].description);
    }
}

function AjouterObjet(Inventaire, Objet){
    InventaireJoueur.Objet[InventaireJoueur.Objet.length ++] = Objet;
}