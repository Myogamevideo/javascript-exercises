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

    console.log(attribute);

    // create <img> in id target that will print it out



    //delete data-image
})();


alert(align); // shows the value of align for the element with id="div1"

//Récupère la valeur de l'attribut "data-image" de la balise dont l'id est "source".
//Crée ensuite une balise image dans la balise d'id "target" qui affichera cette valeur.
//Enfin, supprime la balise source.