//INIT

var select = 1

//DISPLAY

function menu(select) {

    document.getElementById("classe-mage").innerHTML = Unite.classe + "<br><img class=\"img-class\" src=\"img/mage.gif\">" + "<br> PV : " + Unite.classe + "<br> Mana : " + Unite.classe + "<br> ATK : " + Unite.classe + "<br> MAG : " + Unite.classe + "<br> DEF : " + Unite.classe + "<br> RES : " + Unite.classe + "<br>               " + "<br> Capacité :<br>" + Unite.classe;
    document.getElementById("classe-guerrier").innerHTML = Unite.classe + "<br><img class=\"img-class\" src=\"img/guerrier.gif\">" + "<br> PV : " + Unite.classe + "<br> Mana : " + Unite.classe + "<br> ATK : " + Unite.classe + "<br> MAG : " + Unite.classe + "<br> DEF : " + Unite.classe + "<br> RES : " + Unite.classe + "<br>               " + "<br> Capacité :<br>" + Unite.classe;
    document.getElementById("classe-assassin").innerHTML = Unite.classe + "<br><img class=\"img-class\" src=\"img/assassin.gif\">" + "<br> PV : " + Unite.classe + "<br> Mana : " + Unite.classe + "<br> ATK : " + Unite.classe + "<br> MAG : " + Unite.classe + "<br> DEF : " + Unite.classe + "<br> RES : " + Unite.classe + "<br>               " + "<br> Capacité :<br>" + Unite.classe;
    document.getElementById("classe-mage-noir").innerHTML = Unite.classe + "<br><img class=\"img-class\" src=\"img/mage-noir.gif\">" + "<br> PV : " + Unite.classe + "<br> Mana : " + Unite.classe + "<br> ATK : " + Unite.classe + "<br> MAG : " + Unite.classe + "<br> DEF : " + Unite.classe + "<br> RES : " + Unite.classe + "<br>               " + "<br> Capacité :<br>" + Unite.classe;
    var page = 'menu'
    console.clear()

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


