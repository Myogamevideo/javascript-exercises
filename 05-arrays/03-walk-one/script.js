/* becode/javascript
 *
 * /05-arrays/03-walk-one/script.js - 5.3: parcours de tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
        ];

    document.getElementById("run").addEventListener("click", function(){

        var i=null;

        for (i=0; i<fruits.length; i++){
            console.log(fruits[i]);
        }
    });
})();




// var dogs = ["Bulldog", "Beagle", "Labrador"]; 
// var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

// alert(dogs[1]);             // access value at index, first item being [0]
// dogs[0] = "Bull Terier";    // change the first item

// for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
//     console.log(dogs[i]);
// }



//Au clic sur le bouton, affiche (dans la console) l'une après l'autre chaque valeur
//du tableau fruits. Utilise une boucle for.