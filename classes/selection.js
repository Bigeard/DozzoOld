var Selection = {

    init: function (nom, id, nbSelection, Selection1, Selection2, Selection3) {

        //Identification
        this.nom = nom;
        this.id = id;
        this.nbSelection = nbSelection;
        this.Selection1 = Selection1;
        this.Selection2 = Selection2;
        this.Selection3 = Selection3;
    },

    //Identification

    getId: function (id) {
        return this.id;
    },
    setId: function (id) {
        this.id = id;
    },

    getNom: function (nom) {
        return this.nom;
    },
    setNom: function (nom) {
        this.nom = nom;
    },

    getAction: function (nbSelection) {
        return this.nbSelection;
    },
    setAction: function (nbSelection) {
        this.nbSelection = nbSelection;
    },

    getAction: function (Selection1) {
        return this.Selection1;
    },
    setAction: function (Selection1) {
        this.Selection1 = Selection1;
    },

    getAction: function (Selection2) {
        return this.Selection2;
    },
    setAction: function (Selection2) {
        this.Selection2 = Selection2;
    },

    getAction: function (Selection3) {
        return this.Selection3;
    },
    setAction: function (Selection3) {
        this.Selection3 = Selection3;
    },


    setClasse: function (classe) {
        if (classe === "Menu") {
            this.nom = "Menu"
            this.id = 0;
            this.nbSelection = 3
            this.Selection1 = "Commencer"
            this.Selection2 = "Option"
            this.Selection3 = "A propos"
        }
        else if (classe === "Commencer") {
            this.nom = "Combat"
            this.id = 1;
            this.nbSelection = 4
            this.Selection1 = "Attaque"
            this.Selection2 = "Concentration"
            this.Selection3 = "Capaciter"
            this.Selection4 = "Inventaire"
        }
        else if (classe === "Option") {
            this.nom = "Option"
            this.id = 2;
            this.nbSelection = 3
            this.Selection1 = "Difficulter"
            this.Selection2 = "Son"
            this.Selection3 = "Retour"
        }
        else if (classe === "A propos") {
            this.nom = "A propos"
            this.id = 3;
            this.nbSelection = 1
            this.Selection1 = "Retour"
        }
        else if (classe === "Attaque") {
            this.nom = "Attaque"
            this.id = 4;
            this.nbSelection = 5
            this.Selection1 = "Attaque1"
            this.Selection2 = "Attaque2"
            this.Selection3 = "Attaque3"
            this.Selection4 = "Attaque4"
            this.Selection5 = "Attaque5"
            this.Selection6 = "Attaque6"
        }
        else if (classe === "Inventaire") {
            this.nom = "Inventaire"
            this.id = 5;
            this.nbSelection = 2
            this.Selection1 = "Equipement"
            this.Selection2 = "Objet"
        }
        else if (classe === "Equipement") {
            this.nom = "Equipement"
            this.id = 6;
            this.nbSelection = 4
            this.Selection1 = "Equipement1"
            this.Selection2 = "Equipement2"
            this.Selection3 = "Equipement3"
            this.Selection4 = "Equipement4"
        }
        else if (classe === "Objet") {
            this.nom = "Objet"
            this.id = 7;
            this.nbSelection = 4
            this.Selection1 = "Objet1"
            this.Selection2 = "Objet2"
            this.Selection3 = "Objet3"
            this.Selection4 = "Objet4"
        }
    },
}