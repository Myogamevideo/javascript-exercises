/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
    
        var inputOne = document.getElementById("pass-one").value;

        var inputTwo = document.getElementById("pass-two").value;


        if(inputOne != inputTwo){
            document.getElementById("pass-one").style.border = "1px solid red";
            document.getElementById("pass-two").style.border = "1px solid red"; 
            
        } else {
            document.getElementById("pass-two").style.border = "0px"; 
            document.getElementById("pass-one").style.border = "0px"; 
        }

        console.log(inputOne,inputTwo);

        });

})();


//Au clic sur le bouton, vérifie que les deux mots de passe dans les inputs
//sont identiques. Si ça n'est pas le cas, colore les bordures des inputs en rouge