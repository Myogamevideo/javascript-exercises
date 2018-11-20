/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {
    var table = document.createElement("table");

    var tr, td, val;

    for(let i = 1; i <= 10; i++) {

        tr = document.createElement("tr");

        for(let j = 1; j <= 10; j++) {
            
            val = i * j;
            td = document.createElement("td");
            td.innerHTML = val;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
    document.getElementById("target").appendChild(table);
})();