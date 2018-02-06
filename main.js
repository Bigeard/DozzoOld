//INIT

var select = 1

//DISPLAY

function menu(select) {
    var page = 'menu'
    console.clear()

    document.getElementById('select').innerHTML = select
    var chn = ' - Commencer [1]              - Option [2]              - A propos [3]'
    var nouvChn = chn.replace(select, '*');

    console.log('Bienvenu Sur')
    console.log('            ______   ______   ______   ______   ______    |')
    console.log('           /_____/  /_____/  /_____/  /_____/  /_____/    o')
    console.log('\n          ( PS: tkt un jour on vas trouver un nom :3 )')
    console.log('\n _____________________________________________________________________')
    console.log(nouvChn)
}

