
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
       
    var all = [];

    document.getElementById("run").addEventListener("click", function(){

        //BOUCLE ATTRIBUANT RANDOM NUMB
            for(i=0; i<10; i++){
                var num = document.getElementById("n-" + (i+1)).innerHTML = (getRandomInt(100));

                all[i]=num;
            }

            console.log(all);

    //MIN 
    all.min = function(all){
        return Math.min.apply(Math, all);
    };
            
    var minimum = all.min(all);

    document.getElementById("min").innerHTML = minimum;

    //MAX
    all.max = function(all){
        return Math.max.apply(Math, all);
    };

    var maximum = all.max(all);

    document.getElementById("max").innerHTML = maximum;

    //SUM
        
    var count = 0;

    for(var i = 0; i < all.length; i++) {
        count = count + all[i];
    }

    document.getElementById("sum").innerHTML = count;

    //AVERAGE

    var countAv = (count/all.length);

    document.getElementById("average").innerHTML = countAv;

   });

})();

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

