var select = 1




function start(select) {
    console.clear()
    if (select >= 4) {
        select = 1
    }
    if (select <= 0) {
        select = 3
    }
    document.getElementById('select').innerHTML = select
    var chn = ' - Comencer [1]              - Obtion [2]              - Credit [3]'
    var nouvChn = chn.replace(select, '*');

    console.log('Bienvenu Sur')
    console.log('            ______   ______   ______   ______   ______    |')
    console.log('           /_____/  /_____/  /_____/  /_____/  /_____/    o')
    console.log('\n          ( PS: tkt un jour on vas trouver un nom :3 )')
    console.log('\n____________________________________________________________________')
    console.log(nouvChn)
}

//--------------------------------- Controle Des Touche ( Detection ) -----------------------------------
'use strict';
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName

    //--------------------------------- Touche Clée ---------------------------------------------------------

    if (keyName == 'Enter') {
        start()
    }
    else if (keyName == 'ArrowUp') {
        start(select = select + 1)
    }
    else if (keyName == 'ArrowDown') {
        start(select = select - 1)
    }
    else if (keyName == 'ArrowLeft') {
        start(select = select + 1)
    }
    else if (keyName == 'ArrowRight') {
        start(select = select - 1)
    }
    else {
        document.getElementById('error').innerHTML = '~ Error ~'
        document.getElementById('error').style.display = 'block'
    }
});
