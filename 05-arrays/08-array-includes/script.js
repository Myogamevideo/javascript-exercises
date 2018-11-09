/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
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

            fruits.find(function(apple){
                if(apple=="pomme")
                console.log(apple);
            });
    });        
})();




// Alertinative compliquée et inutile mais qui fonctionne :

// var pomme=[];

// fruits.find(function(apple){
//     if(apple=="pomme")
//     pomme.push(apple);
// });

// console.log(pomme);
// alert('Petite ' + pomme);