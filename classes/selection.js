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
            this.Slot1 = "Commencer"
            this.Slot2 = "Option"
            this.Slot3 = "A propos"
            this.LastSlot = "Menu"
        }
        else if (page === "Commencer") {
            this.nom = "Combat"
            this.nombreDeSlot = 4
            this.Slot1 = "Attaque"
            this.Slot2 = "Concentration"
            this.Slot3 = "Capaciter"
            this.Slot4 = "Inventaire"
            this.LastSlot = "Commencer"
        }
        else if (page === "Option") {
            this.nom = "Option"
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
            this.Slot1 = "Attaque"
            this.Slot2 = "Attaque"
            this.Slot3 = "Attaque"
            this.Slot4 = "Attaque"
            this.Slot5 = "Attaque"
            this.Slot6 = "Retour"
            this.LastSlot = "Commencer"
        }
        else if (page === "Inventaire") {
            this.nom = "Inventaire"
            this.nombreDeSlot = 3
            this.Slot1 = "Equipement"
            this.Slot2 = "Objet"
            this.Slot3 = "Retour"
            this.LastSlot = "Commencer"
        }
        else if (page === "Equipement") {
            this.nom = "Equipement"
            this.nombreDeSlot = 5
            this.Slot1 = "Equipement"
            this.Slot2 = "Equipement"
            this.Slot3 = "Equipement"
            this.Slot4 = "Equipement"
            this.Slot5 = "Retour"
            this.LastSlot = "Inventaire"
        }
        else if (page === "Objet") {
            this.nom = "Objet"
            this.nombreDeSlot = 5
            this.Slot1 = "Objet1"
            this.Slot2 = "Objet2"
            this.Slot3 = "Objet3"
            this.Slot4 = "Objet4"
            this.Slot5 = "Retour"
            this.LastSlot = "Inventaire"

        }
    }
}