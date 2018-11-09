
/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
            
    document.getElementById("run").addEventListener("click", function(){

            var array = [];

            for(i=0; i<10; i++){
                var num = document.getElementById("n-" + (i+1)).innerHTML = (getRandomInt(100));
                

                array.push(num);
                // var min = Math.min(num);

                // num.find(function(min){
                    
                // });

                console.log(array);

                //from now on, I can calculate min, max etc


            }

        


    });

})();

// var pomme=[];

// fruits.find(function(apple){
//     if(apple=="pomme")
//     pomme.push(apple);
// });

// console.log(pomme);
// alert('Petite ' + pomme);




        // var un = document.getElementById("n-1").innerHTML = (getRandomInt(100));
        // var deux = document.getElementById("n-2").innerHTML = (getRandomInt(100));
        // var trois = document.getElementById("n-3").innerHTML = (getRandomInt(100));
        // var quatre = document.getElementById("n-4").innerHTML = (getRandomInt(100));
        // var cinq = document.getElementById("n-5").innerHTML = (getRandomInt(100));
        // var six = document.getElementById("n-6").innerHTML = (getRandomInt(100));
        // var sept = document.getElementById("n-7").innerHTML = (getRandomInt(100));
        // var huit = document.getElementById("n-8").innerHTML = (getRandomInt(100));
        // var neuf = document.getElementById("n-9").innerHTML = (getRandomInt(100));
        // var dix = document.getElementById("n-10").innerHTML = (getRandomInt(100));

        // var arrayRandom = [un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix];
        // console.log(arrayRandom);

// var array1 = [2, 3, 1];

// console.log(Math.min(...array1));
// expected output: 1


//Au clic sur le bouton, affiche dans les balises prévues les dix éléments d'un
//tableau de 10 nombres (entre 1 et 100), ainsi que les statistiques suivantes :
//le plus petit nombre, le plus grand, la somme des nombres et la moyenne de ceux-ci.



// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
  
//   console.log(getRandomInt(3));