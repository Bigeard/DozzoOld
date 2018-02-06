
//KEY DETECTION

document.addEventListener('keydown', (event, page) => {
    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName
    

    var selectTotal = 3;
    if(selectTotal%2 == 0 ){
        var colone = 2;
        console.log(colone)
    }
    else{
        var colone = 3;
        console.log(colone)
    }

    //INPUTS

    if (keyName == 'Enter') {
        menu()
    }
    else if (keyName == 'ArrowUp' && select != colone && select != colone-1 && select != colone-2 ) {
        menu(select -= colone)
        document.getElementById('error').style.display = "none"
    }
    else if (keyName == 'ArrowDown' && select != selectTotal && select != selectTotal-1 && select != selectTotal-(colone-1)) {
        menu(select += colone)
        document.getElementById('error').style.display = "none"
    }
    else if (keyName == 'ArrowLeft' && select != 1 ) {
        menu(select -= 1)
        document.getElementById('error').style.display = "none"
    }
    else if (keyName == 'ArrowRight' && select != selectTotal ) {
        menu(select += 1)
        document.getElementById('error').style.display = "none"
    }
    else if(keyName != 'Enter' && keyName != 'ArrowUp' && keyName != 'ArrowDown' && keyName != 'ArrowLeft' && keyName != 'ArrowRight' ) {
        document.getElementById('error').style.display = "block"
    }
});
