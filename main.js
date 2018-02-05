
function start(){

console.log('Bienvenu Sur')
console.log('            ______   ______   ______   ______   ______    |')
console.log('           /_____/  /_____/  /_____/  /_____/  /_____/    o')
console.log('\n          ( PS: tkt un jour on vas trouver un nom :3 )')
console.log('\n___________________________________________________________________')

console.log('  - Comencer                  - Obtion                  - Credit')

}

//--------------------------------- Controle Des Touche ( Detection ) -----------------------------------
'use strict';
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    document.getElementById('key').innerHTML = 'Keypress: ' + keyName

//--------------------------------- Touche Clée ---------------------------------------------------------

    if (keyName == 'Enter') {
        document.getElementById('error').style.display = 'none'

    }
    if (keyName == 'ArrowUp') {
        document.getElementById('error').style.display = 'none'
        
    }
    if (keyName == 'ArrowDown') {
        document.getElementById('error').style.display = 'none'
        
    }
    if (keyName == 'ArrowLeft') {
        document.getElementById('error').style.display = 'none'
        
    }
    if (keyName == 'ArrowRight') {
        document.getElementById('error').style.display = 'none'
        
    }
    else{
        document.getElementById('error').innerHTML = '~ Error ~'
        document.getElementById('error').style.display = 'block'
    }
});

