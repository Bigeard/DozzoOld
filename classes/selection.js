function Menu (nom, emplacements) {
    this.nom = nom;
    this.emplacement = emplacements;    
}

Menu.prototype = Object.create(Menu.prototype);
Menu.prototype.constructor = Menu;


