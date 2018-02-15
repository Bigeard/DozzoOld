function Menu(nom, emplacements) {
    this.nom = nom;
    this.emplacements = emplacements;
}

Menu.prototype = Object.create(Menu.prototype);
Menu.prototype.constructor = Menu;


var menuNouvellePartie = new Menu("Nouvelle Partie", [menuAttaque, "Concentration", "Capacité", menuInventaire, "Retour"]);
var menuOptions = new Menu("Options", ["Difficultee", "Son", menuEcranTitre]);
var menuApropos = new Menu("A Propos",[menuEcranTitre])

var menuEcranTitre = new Menu("EcranTitre", [menuNouvellePartie, menuOptions, menuApropos]);

var menuEquipements = new Menu ("Equipements", [Rapiere]);
var menuObjets = new Menu ("Objets", [PotionDeSoin]);
var menuInventaire = new Menu("Inventaire", [menuEquipements, menuObjets])
var menuAttaque = new Menu("Attaque", ["AttaqueA", "AttaqueB", "AttaqueC", "AttaqueD", "AttaqueE"]);


var menuInventaireConsommable = new Menu("Consommable",[PotionDeSoin]);
var menuInventaireEquipement = new Menu("Equipement",[Rapiere]);


var positionDuCurseur = 0;