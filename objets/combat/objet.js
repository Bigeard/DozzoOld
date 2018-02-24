var rapiere = {
  nom: "Rapière",
  description: "Une épée fine, peu puissante mais très précise.",

  attaque: 4,
  effet: function () {
    console.log("Rapière");
    uniteEnnemi.ptsVie -= 4;
    menuActuel = menuCombat;
    tourEnnemi();
  },
  maitrise: "épée",
  type: 'action'
}

var potionDeSoin = {
  nom: "Potion de soin",
  description: "Potion qui soigne 10PV",

  ptsVie: 10,
  quantite: 1,
  effet: function () {
    console.log("Potion de soin");
    uniteJoueur.ptsVie += 3;
    menuActuel = menuCombat;
    tourEnnemi();
  },
  type: 'objet'
}

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