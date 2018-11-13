/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // store valeur "data-image"
    var span = document.getElementById("source");
    var attribute = span.getAttribute("data-image");

    console.log(attribute); //prints out http://www.randomkittengenerator.com/cats/rotator.php

    // CREATE <img> IN ID "TARGET" THAT WILL PRINT OUT THE TAG

    var elem = document.createElement("img");
    elem.setAttribute("src", attribute);
    elem.setAttribute("alt", "beautiful kitties");

    console.log(elem); //print out <img src="http://www.randomkittengenerator.com/cats/rotator.php" alt="beautiful kitties">

    document.getElementById("source").appendChild(elem);

    //delete data-image
    console.log(span);
    document.getElementById('source').removeAttribute('data-image');
    console.log(span);

    //refresh page and look at cute cats for a while
    setTimeout(function(){
        window.location.reload(1);
    }, 5000);

})();



//Récupère la valeur de l'attribut "data-image" de la balise dont l'id est "source". 
//Crée ensuite une balise image dans la balise d'id "target" qui affichera cette valeur.
//Enfin, supprime la balise source.


// var elem = document.createElement("img");
// elem.setAttribute("src", "images/hydrangeas.jpg");
// elem.setAttribute("height", "768");
// elem.setAttribute("width", "1024");
// elem.setAttribute("alt", "Flower");
//document.getElementById("placehere").appendChild(elem);

//elem.src = 'images/hydrangeas.jpg';

//html
//<div id="placehere">

