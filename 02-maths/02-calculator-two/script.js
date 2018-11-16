/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {

    var performOperation = function(operation) {

        var a = parseInt(document.getElementById("op-one").value);
        var b = parseInt(document.getElementById("op-two").value);

        switch (operation){
            case "addition":
            var result = a+b;
            alert(result);

            break;

            case "substraction":
            var result = a-b;
            alert(result);

            break;

            case "multiplication":
            var result = a*b;
            alert(result);

            break;

            case "division":
            var result = a/b;
            alert(result);

            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
