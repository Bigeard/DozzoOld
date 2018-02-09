var Objet = {

  init: function (nom, action, type, quantite) {

    this.nom = nom;
    this.niveau = niveau;
    this.experience = experience;
  },

  getNom: function(nom) {
    return this.nom;
  },
  setNom: function(nom) {
    this.nom = nom;
  },


  getNiveau: function(niveau) {
    return this.niveau;
  },
  setNiveau: function(niveau) {
    this.niveau = niveau;
  },


  getExperience: function(experience) {
    return this.experience;
  },
  setExperience: function(experience) {
    this.experience = experience;
  }
};