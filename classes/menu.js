function Menu(nom, emplacements) {
    this.nom = nom;
    this.emplacements = emplacements;
}

Menu.prototype = Object.create(Menu.prototype);
Menu.prototype.constructor = Menu;

var menuInventaireConsommable = new Menu("Consommable",[PotionDeSoin]);
var menuInventaireEquipement = new Menu("Equipement",[Rapiere]);

var menuEquipements = new Menu ("Equipements", [Rapiere]);
var menuObjets = new Menu ("Objets", [PotionDeSoin]);
var menuInventaire = new Menu("Inventaire", [menuEquipements, menuObjets])
var menuAction = new Menu("Action", [actionA, actionB, actionC, actionD, actionE]);

var menuDifficultee = new Menu("Difficultée", [facile, medium, difficile]);

var menuNouvellePartie = new Menu("Nouvelle Partie", [menuAction, concentration, competence, menuInventaire]);
var menuOptions = new Menu("Options", [menuDifficultee, Son, menuEcranTitre]);
var menuApropos = new Menu("A Propos",[menuEcranTitre])

var menuEcranTitre = new Menu("EcranTitre", [menuNouvellePartie, menuOptions, menuApropos]);


var positionDuCurseur = 0;