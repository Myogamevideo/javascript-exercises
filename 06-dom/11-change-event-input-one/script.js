/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var input = document.getElementById("pass-one");
    // Je range le pass-one dans une variable Input

    var string = document.getElementById("pass-one").value;
    // Je range la valeur de pass-one dans une variable String

    input.maxLength = 10;
    // je donne une longueur maximale à la variable Input

    input.onkeyup = function () {
        //je crée une fonction qui se lance à chaque fois
        // qu'on relache une touche
        // ça réactualise à chaque fin de frappe

        var count = document.getElementById("counter");
        // je range la partie compteur dans une variable count

        string = document.getElementById("pass-one").value;
        
        count.textContent = (string.length) + "/10";
        // je dis que le texte contenu dans count est = a la
        // longueur de la string sur /10
    };

})();
