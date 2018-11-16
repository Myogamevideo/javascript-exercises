/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function () {

    do {

        var age = prompt("Quel est ton âge ?");
        var sexe = prompt("Quel est ton sexe ?");
        var ville = prompt("De quelle ville viens-tu?");

        alert('Ton âge est ' + age + ', ton sexe est ' + sexe + ', tu viens de ' + ville);

        var answer = prompt("Correct? oui - non");
    }
    while (answer == "non" || "No" || "non");


})();

