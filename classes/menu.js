function Menu(nom, emplacements) {
    this.nom = nom;
    this.emplacements = emplacements;
}

Menu.prototype = Object.create(Menu.prototype);
Menu.prototype.constructor = Menu;

var Equipements = new Menu ("Equipements", [Rapiere]);
var Objets = new Menu ("Objets", [PotionDeSoin]);
var Inventaire = new Menu("Inventaire", [Equipements, Objets])
var Attaque = new Menu("Attaque", ["AttaqueA", "AttaqueB", "AttaqueC", "AttaqueD", "AttaqueE"]);
var Apropos = new Menu("A Propos",[])
var Options = new Menu("Options", ["Difficultee", "Son", "Retour"]);
var NouvellePartie = new Menu("Nouvelle Partie", [Attaque, "Concentration", "Capacité", Inventaire, "Retour"]);
var MenuPrincipal = new Menu("menu", [NouvellePartie, Options, Apropos, "Retour"]);


var InventaireConsommable = new Menu("Consommable",[PotionDeSoin]);
var InventaireEquipement = new Menu("Equipement",[Rapiere]);
