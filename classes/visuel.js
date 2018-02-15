function Visuel (contenu) {

    this.contenu = contenu;
}

Visuel.prototype = Object.create(Visuel.prototype);
Visuel.prototype.constructor = Visuel;


var visuelEcranTitre = new Visuel("<img src=\"img/BannerDozzo.png\"><br>");