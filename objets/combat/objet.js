//--------------------------------------- Action ---------------------------------------//

var rapiere = {
  nom: "Rapière",
  description: "Une épée fine, peu puissante mais très précise.",

  attaque: 4,
  effet: function () {
    uniteCible.ptsVie -= this.attaque;
    changerUnite();

  },
  maitrise: "épée",
  type: 'action'
}

var hachette = {
  nom: "Hachette",
  description: "Une petite hache de lancer.",

  attaque: 4,
  effet: function () {
    uniteCible.ptsVie -= this.attaque;
    changerUnite();
  },
  maitrise: "hache",
  type: 'action'
}

//--------------------------------------- Objet ---------------------------------------//

var potionDeSoin = {
  nom: "Potion de soin",
  nomOriginel: "Potion de soin",
  description: "Potion qui soigne 10PV",

  ptsVie: 10,
  quantiteJoueur: 1,
  quantiteEnnemi: 2,
  effet: function () {
    if (this.quantiteJoueur !== 0 && uniteTour.ptsVie !== uniteTour.ptsVieMax && tourJoueur) {
      uniteTour.ptsVie += this.ptsVie;
      this.quantiteJoueur--;
      changerUnite();
    }
    else if (this.quantiteEnnemi !== 0 && uniteTour.ptsVie !== uniteTour.ptsVieMax /* a re voir car imaginom on doit faire un message trop de pv*/ && tourJoueur === false) {
      uniteTour.ptsVie += this.ptsVie;
      this.quantiteEnnemi--;
      changerUnite();
    }
    else {
      //instructions
    }
  },
  type: 'objet'
}

var potionDeForce = {
  nom: "Potion de force",
  nomOriginel: "Potion de force",
  description: "Potion qui augmente l'attaque",

  attaque: 3,
  quantiteJoueur: 1,
  quantiteEnnemi: 5,
  effet: function () {
    if (this.quantiteJoueur !== 0 && tourJoueur) {
      uniteTour.attaque += this.attaque;
      this.quantiteJoueur--;
      changerUnite();
    }
    else if (this.quantiteEnnemi !== 0 && tourJoueur === false) {
      uniteTour.attaque += this.attaque;
      this.quantiteEnnemi--;
      changerUnite();
    }
    else {
      //instructions
    }
  },
  type: 'objet'
}

//--------------------------------------- Equipement ---------------------------------------//

var ganteletDeFer = {
  nom: "Gantelet de fer",
  description: "protection pour les poignets",

  defense: 2,
  partieArmure: 'gants',
  effet: function () {
    //INSTRUCTION
  },
  type: 'equipement'
}

var casqueDeFer = {
  nom: "Casque de fer",
  description: "Un casque ayant une faible protection.",

  defense: 2,
  partieArmure: 'casque',
  effet: function () {
    //INSTRUCTION
  },
  type: 'equipement'
}