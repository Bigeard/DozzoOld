var retour = {
    nom: 'Retour',
    emplacements: [undefined],
    effet: function () {     
        menuActuel = retour.emplacements[0];
        if ( menuActuel === menuNouvellePartie ) {
            keyboard = true;
        }
        console.log(keyboard)
    }
}