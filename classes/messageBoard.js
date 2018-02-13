function Message (contenu) {

    this.contenu = contenu
}


Message.prototype = Object.create(Message.prototype);

var messageTest = new Message("<div class=\"nesBox messageBox\">Je suis un message de test.<br>Je suis la deuxième ligne !</div><br>");