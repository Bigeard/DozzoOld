//--------------------------------------- Action ---------------------------------------//

var rapiere = {
  nom: "Rapière",
  description: "Une épée fine, peu puissante mais très précise.",

  attaque: 4,
  effet: function () {
    changerUnite();
    uniteCible.ptsVie -= this.attaque;
  },
  maitrise: "épée",
  type: 'action'
}

var hachette = {
  nom: "Hachette",
  description: "Une petite hache de lancer.",

  attaque: 4,
  effet: function () {
    changerUnite();
    uniteCible.ptsVie -= this.attaque;
  },
  maitrise: "hache",
  type: 'action'
}

//--------------------------------------- Objet ---------------------------------------//

var potionDeSoin = {
  nom: "Potion de soin",
  description: "Potion qui soigne 10PV",

  ptsVie: 10,
  quantite: 1,
  effet: function () {
    if(this.quantite !== 0){
      console.log("Potion de soin");
      uniteJoueur.ptsVie += this.ptsVie;
      this.quantite --;
      }
      else{
        //instructions
      }
  },
  type: 'objet'
}

var potionDeForce = {
  nom: "Potion de force",
  description: "Potion qui augmente l'attaque",

  attaque: 3,
  quantite: 1,
  effet: function () {
    if(this.quantite !== 0){
    uniteJoueur.ptsVie += this.attaque;
    this.quantite --;
    }
    else{
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