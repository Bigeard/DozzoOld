
//KEY DETECTION

document.addEventListener('keydown', (event) => {

    //AFFICHAGE DE L'INPUT DANS LE HTML

    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName

    //INPUTS

    var currentSlotName = pageAffichageCurseur(positionCurseur);
    var selectTotal = currentPage.nombreDeSlot;

    if (keyName == 'Enter' || keyName == 'w' || keyName == ' ') {
        pageSelected(currentSlotName)
        pageAffichageCurseur(1)
    }
    else if (keyName == 'ArrowDown' && positionCurseur != selectTotal) {
        pageAffichageCurseur(positionCurseur += 1)
    }
    else if (keyName == 'ArrowUp' && positionCurseur != 1) {
        pageAffichageCurseur(positionCurseur -= 1)
    }
    else if (keyName == 'ArrowLeft' && positionCurseur != 1) {
        pageAffichageCurseur(positionCurseur -= 1)
    }
    else if (keyName == 'ArrowRight' && positionCurseur != selectTotal) {
        pageAffichageCurseur(positionCurseur += 1)
    }
});