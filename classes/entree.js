
//KEY DETECTION

    document.addEventListener('keydown', (event) => {

        //AFFICHAGE DE L'INPUT DANS LE HTML

        const keyName = event.key;
        document.getElementById('key').innerHTML = 'Keypress: ' + keyName

        //INPUTS
    
        if (keyName === 'Enter' || keyName === 'w' || keyName === ' ') {
            changerMenu();
            positionDuCurseur = 0;
        }
        else if (keyName === 'ArrowUp' && positionDuCurseur != 0 || keyName === 'ArrowLeft' && positionDuCurseur != 0) {
            positionDuCurseur -= 1;
        }
        else if (keyName === 'ArrowRight' && positionDuCurseur != menuActuel.emplacements.length - 1 || keyName === 'ArrowDown' && positionDuCurseur != menuActuel.emplacements.length - 1) {
            positionDuCurseur += 1;
        }
        afficherJeu();
    });