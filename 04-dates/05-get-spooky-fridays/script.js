/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){

        var month;
        var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
        var friday13 = "";
        var inputYear = document.getElementById("year").value;

        for (month = 0 ; month < 12; month++) {
              
            //date = new Date(year,month,13,8,0,0);
            var date = new Date();
            date.setFullYear(inputYear);
            date.setMonth(month);
            date.setDate(13);

                if (date.getDay() == 5) { //si jour est vendredi
                    friday13 += mois[month]+" "; //la variable affiche ce mois
                }
        }

    alert(friday13);

    })

})();
