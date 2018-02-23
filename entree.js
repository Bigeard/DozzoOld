
//KEY DETECTION

    document.addEventListener('keydown', (event) => {

        //AFFICHAGE DE L'INPUT DANS LE HTML

        const touche = event.key;
        document.getElementById('touche').innerHTML = 'Touche: ' + touche

        //INPUTS
        if (menuActuel.dispositionVertciale === true) {
            //DISPOSITION VERTICALE
            if (touche === 'Enter' || touche === 'w' || touche === ' ') {
                changerJeu();
                positionDuCurseur = 0;
            }
            else if (touche === 'ArrowUp' && positionDuCurseur != 0 || touche === 'ArrowLeft' && positionDuCurseur != 0) {
                positionDuCurseur -= 1;
            }
            else if (touche === 'ArrowRight' && positionDuCurseur != menuActuel.emplacements.length - 1 || touche === 'ArrowDown' && positionDuCurseur != menuActuel.emplacements.length - 1) {
                positionDuCurseur += 1;
            }
        }
        else {
            //DISPOSITION HORIZONTALE
            if (touche === 'Enter' || touche === 'w' || touche === ' ') {
                changerJeu();
                positionDuCurseur = 0;
            }
            else if (touche === 'ArrowUp' && positionDuCurseur != 0 && positionDuCurseur != 1) {
                positionDuCurseur -= 2;
            }
            else if (touche === 'ArrowLeft' && positionDuCurseur != 0 && positionDuCurseur % 2 !== 0) {
                positionDuCurseur -= 1;
            }
            else if (touche === 'ArrowRight' && positionDuCurseur != menuActuel.emplacements.length - 1 && positionDuCurseur % 2 === 0) {
                positionDuCurseur += 1;
            }
            else if (touche === 'ArrowDown' && positionDuCurseur != menuActuel.emplacements.length - 1 && positionDuCurseur != menuActuel.emplacements.length - 2) {
                positionDuCurseur += 2;
            }
        }
        afficherJeu();
    });