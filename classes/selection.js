var Selection = {

    init: function (nom, nombreDeSlot, Slot1, Slot2, Slot3, Slot4, Slot5, Slot6, LastSlot) {

        //Identification
        this.nom = nom;
        this.nombreDeSlot = nombreDeSlot;
        this.Slot1 = Slot1;
        this.Slot2 = Slot2;
        this.Slot3 = Slot3;
        this.Slot4 = Slot4;
        this.Slot5 = Slot5;
        this.Slot6 = Slot6;
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
            this.nom = "Menu"
            this.nombreDeSlot = 3
            this.Slot1 = "Nouvelle partie"
            this.Slot2 = "Options"
            this.Slot3 = "A propos"
            this.LastSlot = "Menu"
        }
        else if (page === "Nouvelle partie") {
            this.nom = "Combat"
            this.nombreDeSlot = 4
            this.Slot1 = "Attaque"
            this.Slot2 = "Concentration"
            this.Slot3 = "Capacité"
            this.Slot4 = "Inventaire"
            this.LastSlot = "Menu"
        }
        else if (page === "Options") {
            this.nom = "Options"
            this.nombreDeSlot = 3
            this.Slot1 = "Difficulté"
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
            this.nombreDeSlot = 5
            this.nom = "Equipement"
            OuvrirInventaire(InventaireEquipement);
            this.Slot1 = "Equipementa"
            this.Slot2 = "Equipementb"
            this.Slot3 = "Equipementc"
            this.Slot4 = "Equipementd"
            this.Slot5 = "Retour"
            this.LastSlot = "Inventaire"
        }
        else if (page === "Objet") {
            OuvrirInventaire(InventaireConsommable);
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