
/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var all = [];

    document.getElementById("run").addEventListener("click", function () {

        //BOUCLE ATTRIBUANT RANDOM NUMB
        for (let i = 0; i < 10; i++) {
            var num = document.getElementById("n-" + (i + 1)).innerHTML = (getRandomInt(100));

            all[i] = num;
        }

        console.log(all);

        //MIN 
        all.min = function (all) {
            return Math.min.apply(Math, all);
        };

        var minimum = all.min(all);

        document.getElementById("min").innerHTML = minimum;

        //MAX
        all.max = function (all) {
            return Math.max.apply(Math, all);
        };

        var maximum = all.max(all);

        document.getElementById("max").innerHTML = maximum;

        //SUM

        var count = 0;

        for (var i = 0; i < all.length; i++) {
            count = count + all[i];
        }

        document.getElementById("sum").innerHTML = count;

        //AVERAGE

        var countAv = (count / all.length);

        document.getElementById("average").innerHTML = countAv;

    });

})();



// SHORTER VERSION :
// (function() {
//     document.getElementById('run').addEventListener('click', function() {
//           var randomTen = [];
//           for (var i=1; i < 11; i++) {
//               var randomOne = document.getElementById("n-"+i).innerHTML = Math.floor(Math.random()*100) +1;
//               randomTen.push(randomOne);
//           }
//           document.getElementById("min").innerHTML = Math.min(...randomTen);
//           document.getElementById("max").innerHTML = Math.max(...randomTen);
//           document.getElementById("sum").innerHTML = randomTen.reduce((a,b) => a + b, 0);
//           document.getElementById("average").innerHTML = randomTen.reduce((a,b) => (a+b), 0)/randomTen.length;
//     })

//   })();
