/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var myTable = document.createElement("table");
    var body = document.createElement("tbody");
    myTable.style.color = "blue";
    var target = document.getElementById("target");
    target.appendChild(myTable);

    for (var i = 0; i < 10; i++) {
        var tr = document.createElement("tr");
        tr.innerHTML = "This is text. This is a joke.";
        body.appendChild(tr);
    };

    myTable.appendChild(body);

})();
