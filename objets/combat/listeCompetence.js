//LISTE DES COMPETENCES

var competenceRage = {
    nom: 'Rage',
    quantiteDozzo: 3,
    attaque: 15,
    effet: function () {
        if (uniteTour.ptsDozzo === this.quantiteDozzo) {
            uniteCible.ptsVie -= this.attaque;
            uniteTour.ptsDozzo -= this.quantiteDozzo+1;
            changerUnite();
        }
        else {
            //INSTRUCTION
        }
    }
}

var competenceIncantation = {
    nom: 'Incantation',
    quantiteDozzo: 3,
    effet: function () {
        //INSTRUCTION
    }
}

var competenceCamouflage = {
    nom: 'Camouflage',
    quantiteDozzo: 3,
    effet: function () {
        //INSTRUCTION
    }
}

var competenceEntrave = {
    nom: 'Entrave',
    quantiteDozzo: 3,
    effet: function () {
        //INSTRUCTION
    }
}

var competenceEmpoisonnement = {
    nom: 'Empoisonnement',
    quantiteDozzo: 2,
    effet: function () {
        //INSTRUCTION
    }
}