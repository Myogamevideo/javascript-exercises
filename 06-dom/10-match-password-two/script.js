/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    // your code here
    //set attribute avec class et error 



(function() {

    document.getElementById("run").addEventListener("click", function() {
    
        var inputOne = document.getElementById("pass-one").value;

        var inputTwo = document.getElementById("pass-two").value;


        if(inputOne == inputTwo){
            document.getElementById("pass-one").className = "";
            document.getElementById("pass-one").className = "";
        } else{
            document.getElementById("pass-one").className = "error";
            document.getElementById("pass-two").className = "error";
        }

        console.log(inputOne,inputTwo);

        });

})();

