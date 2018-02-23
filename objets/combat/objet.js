var rapiere = {
  nom: "Rapière",
  description: "Une épée fine, peu puissante mais très précise.",

  attaque: 4,
  effet: function() {
      //INSTRUCTION
    },
  maitrise: "épée",
  type: 'action'
}

var potionDeSoin = {
  nom:"Potion de soin",
  description:"Potion qui soigne 10PV",

  ptsVie: 10,
  quantite: 1,
  effet: function() {
      //INSTRUCTION
    },
  type: 'objet'
}

var ganteletDeFer = {
  nom: "Gantelet de fer",
  description: "protection pour les poignets",

  defense: 2,
  partieArmure: 'gants',
  effet:function() {
      //INSTRUCTION
    },
  type: 'equipement'
}