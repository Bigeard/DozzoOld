
//KEY DETECTION

document.addEventListener('keydown', (event) => {

    //AFFICHAGE DE L'INPUT DANS LE HTML

    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName

    //INPUTS

    var currentSlotName = pageAffichageCurseur(positionCurseur);
    var selectTotal = currentPage.nombreDeSlot;

    if (keyName == 'Enter') {
        pageSelected(currentSlotName)
        pageAffichageCurseur(1)
    }
    else if (keyName == 'ArrowUp' && positionCurseur != selectTotal) {
        pageAffichageCurseur(positionCurseur += 1)
    }
    else if (keyName == 'ArrowDown' && positionCurseur != 1) {
        pageAffichageCurseur(positionCurseur -= 1)
    }
    else if (keyName == 'ArrowLeft' && positionCurseur != 1) {
        pageAffichageCurseur(positionCurseur -= 1)
    }
    else if (keyName == 'ArrowRight' && positionCurseur != selectTotal) {
        pageAffichageCurseur(positionCurseur += 1)
    }
    else if (keyName != 'Enter' && keyName != 'ArrowUp' && keyName != 'ArrowDown' && keyName != 'ArrowLeft' && keyName != 'ArrowRight') {
        document.getElementById('error').style.display = "block"
    }
    else{
        document.getElementById('error').style.display = "none"
    }
});