function Menu(nom, emplacements, message, visuel) {
    this.nom = nom;
    this.emplacements = emplacements;
    this.message = message;
    this.visuel = visuel;
}

Menu.prototype = Object.create(Menu.prototype);
Menu.prototype.constructor = Menu;


var menuEquipements = new Menu ("Equipements", [Rapiere], messageNouvellePartie, visuelNouvellePartie);
var menuObjets = new Menu ("Objets", [PotionDeSoin], messageNouvellePartie, visuelNouvellePartie);
var menuInventaire = new Menu("Inventaire", [menuEquipements, menuObjets], messageNouvellePartie, visuelNouvellePartie)
var menuAction = new Menu("Action", [actionA, actionB, actionC, actionD, actionE], messageNouvellePartie, visuelNouvellePartie);

var menuDifficultee = new Menu("Difficultée", [facile, medium, difficile], messageNouvellePartie, visuelNouvellePartie);

var menuNouvellePartie = new Menu("Nouvelle Partie", [menuAction, concentration, competence, menuInventaire], messageNouvellePartie, visuelNouvellePartie);
var menuOptions = new Menu("Options", [menuDifficultee, son], messageEcranTitre, visuelOptions);
var menuAPropos = new Menu("A Propos", [menuNouvellePartie], messageEcranTitre, visuelAPropos)

var menuEcranTitre = new Menu("EcranTitre", [menuNouvellePartie, menuOptions, menuAPropos], visuelEcranTitre, messageEcranTitre);

var menuActuel = new Menu((undefined, undefined, undefined, undefined));