
//KEY DETECTION

document.addEventListener('keydown', (event, page) => {
    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName
    

    var selectTotal = 3;


    //INPUTS

    if (keyName == 'Enter') {
        menu()
    }
    else if (keyName == 'ArrowUp' && select != 1 && select != 2 && select != 3) {
        menu(select -= 3)
    }
    else if (keyName == 'ArrowDown' && select != selectTotal && select != selectTotal-1 && select != selectTotal-2) {
        menu(select += 3)
    }
    else if (keyName == 'ArrowLeft' && select != 1 ) {
        menu(select -= 1)
    }
    else if (keyName == 'ArrowRight' && select != selectTotal) {
        menu(select += 1)
    }
});
