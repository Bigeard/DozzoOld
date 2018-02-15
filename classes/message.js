function Message (contenu) {

    this.contenu = contenu;
}

Message.prototype = Object.create(Message.prototype);
Message.prototype.constructor = Message;


var messageEcranTitre = new Message("<div class=\"nesBox messageBox\">Je suis un test qui va disparaitre.<br>Je suis sur l'écran Titre !?</div><br>");