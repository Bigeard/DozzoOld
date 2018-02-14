function AfficherMenu(Menu) {
    for(i = 0; i < Menu.emplacements.length; i++) {
        console.log(Menu.emplacements[i].nom);
    }
}

function AjouterObjet(Inventaire, Objet){
    if (Inventaire.length < limiteObjet){
    Inventaire.Objet[Inventaire.Objet.length ++] = Objet;
    }
    else{
        //afficher un message du style "trop d'objet dans l'inventaire"
    }
}

    
