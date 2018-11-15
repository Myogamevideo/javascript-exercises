/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var input = document.getElementById("pass-one");
    // Je range le pass-one dans une variable Input

    var string = document.getElementById("pass-one").value;
    // Je range la valeur de pass-one dans une variable String

    input.onkeyup = function () {

        var validityPass = document.getElementById("validity");
        // je range la partie vérifiant la validité dans une variable validityPass

        string = document.getElementById("pass-one").value;

            var twoDigits = /\d{2}/;
                if (twoDigits.test(string)){
                    var numb = "oui";
                }

            // if (/\d{2}/.test(string))
            // console.log("Yup. 20");


            if((string.length >= 8) && (numb === "oui")){
            validityPass.textContent = "OK";
            console.log("its ok");
            }else{
                console.log("Hmm. Either it's too short or there are less than 2 numbers...");
            }

    };

})();

//Observe les changements de l'input et affiche "ok"
//si le contenu fait 8 caractères au minimum, et contient au moins 2 chiffres.