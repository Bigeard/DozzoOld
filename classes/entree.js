
//KEY DETECTION

document.addEventListener('keydown', (event) => {

    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName

    //AFFICHAGE DE LA SELECTION
    document.getElementById('select').innerHTML = select

    var values = selection();
    var colone = values[0];
    var selectTotal = values[1];
    var nomSelection = values[2];

    //INPUTS
    if (keyName == 'Enter') {
        selection(true)
    }
    else if (keyName == 'ArrowUp' && select != colone && select != colone - 1 && select != colone - 2) {
        selection(select -= colone)
    }
    else if (keyName == 'ArrowDown' && select != selectTotal && select != selectTotal - 1 && select != selectTotal - (colone - 1)) {
        selection(select += colone)
    }
    else if (keyName == 'ArrowLeft' && select != 1) {
        selection(select -= 1)
    }
    else if (keyName == 'ArrowRight' && select != selectTotal) {
        selection(select += 1)

    }
    else if (keyName != 'Enter' && keyName != 'ArrowUp' && keyName != 'ArrowDown' && keyName != 'ArrowLeft' && keyName != 'ArrowRight') {
        document.getElementById('error').style.display = "block"
    }
    else{
        document.getElementById('error').style.display = "none"
    }
});
