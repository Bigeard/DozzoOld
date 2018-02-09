//INIT

var select = 1

//DISPLAY

function menu(select) {

    var chowStats = Object.create(Unite)
    var changeClasse = ["Guerrier", "Mage", "Assassin", "Mage noir"]

    var page = 'menu'
    console.clear()

    for (var x = 0; x < changeClasse.length; x++) {
        chowStats.init("undefined", 0, 0, 0, "undefined", "undefined", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        chowStats.setClasse(changeClasse[x])
        document.getElementById("hero-"+x).innerHTML = chowStats.classe + "<span class=\"tooltiptext\">" + 
        chowStats.classe +
        "<br><img class=\"img-class\" src=\"img/" + chowStats.classe + ".gif\">" + 
        "<br> PV : " + chowStats.ptsVieMax + 
        "<br> Mana : " + chowStats.ptsManaMax + 
        "<br> ATK : " + chowStats.attaqueMax +
        "<br> MAG : " + chowStats.magieMax +
        "<br> DEF : " + chowStats.defenseMax +
        "<br> RES : " + chowStats.resistanceMax +
        "<br>               " + "<br> Capacité :<br>" + chowStats.competance + "</p></span>" ;
    }

    document.getElementById('select').innerHTML = select
    var chn = '  - Commencer [1]              - Option [2]              - A propos [3]'
   // var chn = '              - Commencer [1]              - Option [2]\n              - A propos [3]              - A propos [4]\n              - A propos [5]              - A propos [6]'
   // var chn = ' - Commencer [1]              - Option [2]              - A propos [3]\n - Commencer [4]              - Option [5]              - A propos [6]\n - Commencer [7]              - Option [8]              - A propos [9]'
    var nouvChn = chn.replace(select, '*');

    console.log('          ▀█████████▄  BINVENUE DANS LE DONJON DU ...')
    console.log('            ██▒     █▄                                        ᚐ ᚐ ᚐ  ')
    console.log('            ██       █▄  ▒█████  ▒███████▒▒███████▒ ▒█████')
    console.log('           ░██       ░█ ▒██▒  ██▒▒ ▒ ▒ ▄▀░▒ ▒ ▒ ▄▀░▒██▒  ██▒')
    console.log('           ░██      ░█▀ ▒██░  ██▒░ ▒ ▄▀▒░ ░ ▒ ▄▀▒░ ▒██░  ██▒')
    console.log('           ▒██     ░█▀░ ▒██   ██░  ▄▀▒   ░  ▄▀▒   ░▒██   ██░')
    console.log('          ▄█████████▀▒  ░ ████▓▒░▒███████▒▒███████▒░ ████▓▒░')
    console.log('              ▒░ ▒  ▒   ░ ▒ ▒░ ░░▒ ▒ ░ ▒░░▒ ▒ ░ ▒  ░ ▒ ▒░')
    console.log('               ░          ░ ░     ▒      ░ ░  ▒     ░')
    console.log('                           ░               ░')
    console.log('                                                                                              ')
    console.log(nouvChn)
}


