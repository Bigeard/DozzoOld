
//KEY DETECTION

var onPeutAppuyerSurLesTouches = true;

var controleJoueur = function(menuActuel, messageActuel, visuelActuel) {

    document.addEventListener('keydown', (event) => {

        //AFFICHAGE DE L'INPUT DANS LE HTML

        const keyName = event.key;
        document.getElementById('key').innerHTML = 'Keypress: ' + keyName

        //INPUTS
    
        onPeutAppuyerSurLesTouches = false;
        if (keyName == 'Enter' || keyName == 'w' || keyName == ' ') {
            changerJeu(menuActuel, messageActuel, visuelActuel);
            positionDuCurseur = 0;
        }
        else if (keyName == 'ArrowUp' && positionDuCurseur != 0) {
            positionDuCurseur -= 1;
        }
        else if (keyName == 'ArrowLeft' && positionDuCurseur != 0) {
            positionDuCurseur -= 1;
        }
        else if (keyName == 'ArrowRight' && positionDuCurseur != menuActuel.emplacements.length - 1) {
            positionDuCurseur += 1;
        }
        else if (keyName == 'ArrowDown' && positionDuCurseur != menuActuel.emplacements.length - 1) {
            positionDuCurseur += 1;
        }
        afficherJeu(menuActuel, messageActuel, visuelActuel);
    });
    onPeutAppuyerSurLesTouches;
}
