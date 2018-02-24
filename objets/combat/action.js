var actionA = {
	nom:'ActionA',
	effet: function() {
	}
}

var actionB = {
	nom:'ActionB',
	effet: function() {
		//ne fonctionne pas bien jsp pour quoi ><
		console.log("actionB");
		classeAbomination.ptsVie -= 4;
		menuActuel = menuCombat;
		tourEnnemi();
    }
}

var actionC = {
	nom:'ActionC',
	effet: function() {
    	//INSTRUCTION
    }
}

var actionD = {
	nom:'ActionD',
	effet: function() {
    	//INSTRUCTION
    }
}

var actionE = {
	nom:'ActionE',
	effet: function() {
    	//INSTRUCTION
    }
}