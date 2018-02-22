
//A REFAIRE EN PRENANT EXEMPLE DES OBJETS DU FICHIER VISUEL.JS !
//(C'EST IMPORTANT POUR POUVOIR DEFINIR LES FONCTIONS QUI COMPOSENT L'OBJET D'UNE MEILLEURE MANIERE)

function Menu(nom, dispositionVertciale, emplacements, message, visuel) {
    this.nom = nom;
    this.dispositionVertciale = dispositionVertciale;
    this.emplacements = emplacements;
    this.message = message;
    this.visuel = visuel;
}

Menu.prototype = Object.create(Menu.prototype);
Menu.prototype.constructor = Menu;


var menuEquipements = new Menu ("Equipements", false, [Rapiere], messageNouvellePartie, visuelNouvellePartie);
var menuObjets = new Menu ("Objets", false, [PotionDeSoin], messageNouvellePartie, visuelNouvellePartie);
var menuInventaire = new Menu("Inventaire", false, [menuEquipements, menuObjets], messageInventaire, visuelNouvellePartie)
var menuAction = new Menu("Action", false, [actionA, actionB, actionC, actionD, actionE], messageAction, visuelNouvellePartie);

var menuNouvellePartie = new Menu("Nouvelle Partie", false, [menuAction, concentration, competence, menuInventaire], messageNouvellePartie, visuelNouvellePartie);
var menuOptions = new Menu("Configuration", true, [difficulte, commandes, musiques, effetSon], messageOption, visuelOptions);
var menuAPropos = new Menu("A Propos", true, [menuNouvellePartie], messageApropos, visuelAPropos)

var menuEcranTitre = new Menu("Ecran Titre", true, [menuNouvellePartie, menuOptions, menuAPropos], visuelEcranTitre, messageEcranTitre);

var menuActuel = new Menu((undefined, undefined, undefined, undefined));