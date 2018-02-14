function AfficherMenu(Menu) {
    
    for(i = 0; i < Menu.emplacements.length; i++) {
        console.log(Menu.emplacements[i].nom)
    }

    if (Retour != undifined) {
        console.log(Retour)
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

    
