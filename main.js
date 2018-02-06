
//INIT

var select = 1

//DISPLAY

function menu(select) {
    console.clear()
    
    document.getElementById('select').innerHTML = select
    var chn = ' - Comencer [1]              - Obtion [2]              - A propos [3]'
    var nouvChn = chn.replace(select, '*');

    console.log('Bienvenu Sur')
    console.log('            ______   ______   ______   ______   ______    |')
    console.log('           /_____/  /_____/  /_____/  /_____/  /_____/    o')
    console.log('\n          ( PS: tkt un jour on vas trouver un nom :3 )')
    console.log('\n____________________________________________________________________')
    console.log(nouvChn)
}

//KEY DETECTION

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName

    //INPUTS

    if (keyName == 'Enter') {
        menu()
    }
    else if (keyName == 'ArrowUp' && select != 3) {
        menu(select += 1)
    }
    else if (keyName == 'ArrowDown' && select != 1) {
        menu(select -= 1)
    }
    else if (keyName == 'ArrowLeft' && select != 1) {
        menu(select -= 1)
    }
    else if (keyName == 'ArrowRight' && select != 3) {
        menu(select += 1)
    }
});
