function Message (contenu) {

    this.contenu = contenu
}


Message.prototype = Object.create(Message.prototype);

var MessageTest = new Message("Hello World !");