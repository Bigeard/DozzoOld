//INIT

var select = 1
var page = "Menu"
var pageDavant = "Menu"
var enJeu
var selection = function classeSelect(condition) {

    var chowStats = Object.create(Unite)
    var changeClasse = ["Guerrier", "Mage", "Assassin", "Mage noir"]
    
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

    //IMPOTATION DE LA CLASSE SELECTION
    var classeSelection = Object.create(Selection)
    classeSelection.init("undifined", 0, 0, "undifined", "undifined", "undifined")
    classeSelection.setClasse(page)

    var trans = [classeSelection.Selection1, classeSelection.Selection2, classeSelection.Selection3, classeSelection.Selection4]
    var nomSelection = trans[select - 1]
    var v = 0
    var chn = ' '
    var colone
    var selectTotal = classeSelection.nbSelection;

    if (condition === true) {
        if (nomSelection === "Retour") {
            page = pageDavant
        }
        else {
            pageDavant = page
            page = nomSelection
        }
    }

    //DISERNATION DE 3 COLONE OU 2 COLONE
    if (selectTotal % 2 == 0) {
        colone = 2;
    }
    else {
        colone = 3;
    }
    for (let i = 1; i < classeSelection.nbSelection + 1; i++) {
        if (i == colone + 1) {
            chn += '\n'
        }
        chn += '         - ' + trans[v] + '[' + i + ']'
        v++
    }
    var nouvChn = chn.replace(select, '*');
    if (nomSelection === "Attaque") {
        enJeu = true
    }
    if (enJeu === true) {
        affichageCombat(nouvChn, page)
    }
    else {
        affichageMenu(nouvChn, page)
    }

    return [colone, selectTotal, nomSelection]
}

//DISPLAY

function affichageMenu(nouvChn, page) {

    console.clear()
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
    console.log('                                             ' + page + '                                             ')
    console.log()
    console.log(nouvChn)
}

function affichageCombat(nouvChn, page) {

    console.clear()
    console.log('\n\n\n')
    console.log('[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]PV[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]')
    console.log('')
    console.log('')
    console.log('             [ Bigeard ]                           [ Zombie ]             ')
    console.log('               ______                                 _____               ')
    console.log('              ( ͡° ͜ʖ ͡°)/                             \\(✖╭╮✖)              ')
    console.log('                                                                             ')
    console.log('               /    \\                                 /    \\              ')
    console.log('')
    console.log('')
    console.log('                                             ' + page + '                                             ')
    console.log()
    console.log(nouvChn)
}