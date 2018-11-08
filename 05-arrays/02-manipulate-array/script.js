/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];


    document.getElementById("run").addEventListener("click", function(){
        
        fruits.shift();
        
        console.log(fruits);

        fruits.pop();     

        console.log(fruits);

        fruits.unshift("banane"); 

        console.log(fruits);

        fruits.push("kiwi"); 

        console.log(fruits);

    });



})();


// var dogs = ["Bulldog", "Beagle", "Labrador"]; 
// var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

// alert(dogs[1]);             // access value at index, first item being [0]
// dogs[0] = "Bull Terier";    // change the first item

// for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
//     console.log(dogs[i]);
// }
