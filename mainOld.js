function affichage(affichagePageAvecCurseur) {

    else if (page == "Option") {
        var son = "ON"
        var difficulter = "Normal"
        document.getElementById("Dozzo").innerHTML =
        "<div class=\"option\"><br><p class\"son-option\" >Son : " + son + " &nbsp;&nbsp;<label class=\"switch\"><input type=\"checkbox\"><span class=\"slider\"></span></label></p>" +
        "<p class\"\" >Difficulter : " + difficulter + " &nbsp;&nbsp;</p></div>" +
        "                         " + currentPage.nom + "                         <br><br>" +
        affichagePageAvecCurseur ;
    }
    else if (page == "A propos") {
        document.getElementById("Dozzo").innerHTML = 
        "<br><p class=\"a-propos nesBox\" ><br><br>Jeu en bêta pour le moment... Crée par :<br><br>Samy Vera<br><br>Robin Bigeard<br><br>Olivier Crochet<br><br><br></p><br>" +
        "                         " + currentPage.nom + "                         <br><br>" +
        affichagePageAvecCurseur ;
    }
    else if (page == "Nouvelle partie") {

        /* Cette fonction permet de d"afficher dans la console
        la scène de combat en fonction des PV de l'héro, du monstre,
        du nom de la sélection de la page, sélection disponible, etc... */

         + messageTest.contenu + affichagePageAvecCurseur ;
    }
    else if (page == "Options" || page == "Difficulter" || page == "Son") {
        document.getElementById("Dozzo").innerHTML = affichagePageAvecCurseur;
    }
    else {
        document.getElementById("Dozzo").innerHTML =
        "<div class=\"fightBackground\"><br>" + healthBar + " VS " + healthBar +
        "<br><br><br><br><br><br><br><img class=\"combat-img\" src=\"img/guerrier.gif\">" +
        "<img class=\"combat-img\" src=\"img/abomination.gif\"></div>" + messageTest.contenu +  affichagePageAvecCurseur ;
    }
}
