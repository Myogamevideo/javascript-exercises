/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var cible = document.getElementsByClassName('target'); //it's a node but not an array
    var cible2 = Array.from(cible);
    cible2.map(x => x.innerHTML = 'owned');


})();
        


//Sélectionne les balises dont la classe est "target": remplace leurs contenus par "owned".
