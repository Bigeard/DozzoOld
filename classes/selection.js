
function Menu(nom, emplacements) {
    this.nom = nom;
    this.emplacements = emplacements;
}

function Retour(Menu) {

}

function SetMenu(Menu){
    console.clear();
    for (i = 0; i < Menu.emplacements.length; i++) {
    console.log(Menu.emplacements[i].nom);
    }
}

Menu.prototype = Object.create(Menu.prototype);
Menu.prototype.constructor = Menu;

var Equipements = new Menu ("Equipements", [Rapiere]);
var Objets = new Menu ("Objets", [PotionDeSoin]);
var Inventaire = new Menu("Inventaire", [Equipements, Objets])
var Attaque = new Menu("Attaque", ["AttaqueA", "AttaqueB", "AttaqueC", "AttaqueD", "AttaqueE"]);
var Apropos = new Menu("A Propos",[])
var Options = new Menu("Options", ["Difficultee", "Son", "Retour"]);
var NouvellePartie = new Menu("Nouvelle Partie", [Attaque, "Concentration", "Capacité", Inventaire]);
var MenuPrincipal = new Menu("menu", [NouvellePartie, Options, Apropos]);



var Selection = {

    init: function (nom, nombreDeSlot, Slots, LastSlot) {

        //Identification
        this.nom = nom;
        this.nombreDeSlot = nombreDeSlot;
        this.Slots = Slots;
        this.LastSlot = LastSlot;
    },

    //Identification

    getNom: function (nom) {
        return this.nom;
    },
    setNom: function (nom) {
        this.nom = nom;
    },

    setPage: function (page) {
        if (page === "Menu") {
            this.nom = "Menu";
            this.nombreDeSlot = 3;
            for (i = 0; i < MenuPrincipal.emplacements.lentgh; i++){
                this.Slots[i] = MenuPrincipal.emplacements[i]; 
            }
            this.LastSlot = "Menu"
            }

        else if (page === "Nouvelle partie") {
            this.nom = "Combat"
            this.nombreDeSlot = 4
            this.Slot1 = Attaque.nom
            this.Slot2 = "Concentration"
            this.Slot3 = "Capacité"
            this.Slot4 = "Inventaire"
            this.LastSlot = "Menu"
        }
        else if (page === "Options") {
            this.nom = "Options"
            this.nombreDeSlot = 3
            this.Slot1 = "Difficulter"
            this.Slot2 = "Son"
            this.Slot3 = "Retour"
            this.LastSlot = "Menu"
        }
        else if (page === "A propos") {
            this.nom = "A propos"
            this.nombreDeSlot = 1
            this.Slot1 = "Retour"
            this.LastSlot = "Menu"
        }
        else if (page === "Attaque") {
            this.nom = "Attaque"
            this.nombreDeSlot = 6
            this.Slot1 = "Attaquea"
            this.Slot2 = "Attaqueb"
            this.Slot3 = "Attaquec"
            this.Slot4 = "Attaqued"
            this.Slot5 = "Attaquee"
            this.Slot6 = "Retour"
            this.LastSlot = "Nouvelle partie"
        }
        else if (page === "Inventaire") {
            this.nom = "Inventaire"
            this.nombreDeSlot = 3
            this.Slot1 = "Equipement"
            this.Slot2 = "Objet"
            this.Slot3 = "Retour"
            this.LastSlot = "Nouvelle partie"
        }
        else if (page === "Equipement") {
            this.nom = "Equipement"
            this.nombreDeSlot = 5
            this.Slot1 = "Equipementa"
            this.Slot2 = "Equipementb"
            this.Slot3 = "Equipementc"
            this.Slot4 = "Equipementd"
            this.Slot5 = "Retour"
            this.LastSlot = "Inventaire"
        }
        else if (page === "Objet") {
            this.nom = "Objet"
            this.nombreDeSlot = 5
            this.Slot1 = "Objeta"
            this.Slot2 = "Objetb"
            this.Slot3 = "Objetc"
            this.Slot4 = "Objetd"
            this.Slot5 = "Retour"
            this.LastSlot = "Inventaire"

        }
    }
}
