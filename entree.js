
//KEY DETECTION

    document.addEventListener('keydown', (event) => {

        //AFFICHAGE DE L'INPUT DANS LE HTML

        const touche = event.key;
        document.getElementById('touche').innerHTML = 'Touche: ' + touche

        //INPUTS
    
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
        afficherJeu();
    });