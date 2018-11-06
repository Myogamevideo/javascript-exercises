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
    // to get the value of an input: document.getElementById("element-id").value

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

        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();



/* PREVIOUS EXERCISE


(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        var a = parseInt(document.getElementById("op-one").value);
        var b = parseInt(document.getElementById("op-two").value);

        var result = a+b;
        alert(result);

        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var a = parseInt(document.getElementById("op-one").value);
        var b = parseInt(document.getElementById("op-two").value);

        var result = a-b;
        alert(result);        
        
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var a = parseInt(document.getElementById("op-one").value);
        var b = parseInt(document.getElementById("op-two").value);

        var result = a*b;
        alert(result);
        
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        var a = parseInt(document.getElementById("op-one").value);
        var b = parseInt(document.getElementById("op-two").value);

        var result = a/b;
        alert(result);
        
        // perform an division
    });
})();
*/