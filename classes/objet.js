class objet{

   constructor(nom, effet, quantite) {
       this.nom = nom
       this.effet = effet
       this.quantite = quantite

   }

   get nom(nom){
       return this.nom
   }

    get effet(effet){
        return this.effet
    }
    get quantite(quantite){
        return this.quantite
    }

    set nom(nom){
        return this.nom
    }
    set effet(effet){
        return this.effet
    }
    set quantite(quantite){
        return this.quantite
    }

   
}
