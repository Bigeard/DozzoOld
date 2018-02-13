/*function OuvrirInventaire(Inventaire) {
    
    for(i = 0; i < Inventaire.Objet.length; i++) {
        console.log(Inventaire.Objet[i].nom)
    }

}µ*/

function AjouterObjet(Inventaire, Objet){
    if (Inventaire.length < 5){
    Inventaire.Objet[Inventaire.Objet.length ++] = Objet;
    }
    /*else{
        afficher un message du style "trop d'objet dans l'inventaire"
    }*/
}

    
