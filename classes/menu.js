function ConstructeurMenu(nom, emplacements) {
    this.nom = nom;
    this.emplacements = emplacements;
}

ConstructeurMenu.prototype = Object.create(ConstructeurMenu.prototype);
ConstructeurMenu.prototype.constructor = ConstructeurMenu;

var Equipements = new ConstructeurMenu ('Equipements', [Rapiere]);
var Objets = new ConstructeurMenu('Objets', [PotionDeSoin]);
var Inventaire = new ConstructeurMenu('Inventaire', [Equipements, Objets])
var Attaque = new ConstructeurMenu('Attaque', ['AttaqueA', 'AttaqueB', 'AttaqueC', 'AttaqueD', 'AttaqueE']);
var Apropos = new ConstructeurMenu('A Propos',[EcranTitre])
var Options = new ConstructeurMenu('Options', ['Difficultee', 'Son', 'Retour']);
var NouvellePartie = new ConstructeurMenu('Nouvelle Partie', [Attaque, 'Concentration', 'Capacité', Inventaire, EcranTitre]);
var EcranTitre = new ConstructeurMenu('Menu', [NouvellePartie, Options, Apropos,]);

var InventaireConsommable = new ConstructeurMenu('Consommable',[PotionDeSoin]);
var InventaireEquipement = new ConstructeurMenu('Equipement',[Rapiere]);
