
//KEY DETECTION

document.addEventListener('keydown', (event, page) => {
    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName
    document.getElementById('select').innerHTML = select

    var selectTotal = 4;
    if(selectTotal%2 == 0 ){
        var colone = 2;
    }
    else{
        var colone = 3;
    }

    //INPUTS

    if (keyName == 'Enter') {
        menu()
    }
    else if (keyName == 'ArrowUp' && select != colone && select != colone-1 && select != colone-2 ) {
        menu(select -= colone)
    }
    else if (keyName == 'ArrowDown' && select != selectTotal && select != selectTotal-1 && select != selectTotal-(colone-1)) {
        menu(select += colone)
    }
    else if (keyName == 'ArrowLeft' && select != 1 ) {
        menu(select -= 1)
    }
    else if (keyName == 'ArrowRight' && select != selectTotal ) {
        menu(select += 1)
    }
});
