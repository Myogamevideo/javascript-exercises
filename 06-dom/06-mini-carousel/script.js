/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    var i = 1;

    document.getElementById("next").addEventListener("click", function() {

        var picture = gallery[i];

        document.querySelector('img').setAttribute('src', picture);

        i++;

        if (i===5){
        i=1;
        };
        
    });

})();


//Au clic sur le bouton, change la source de l'image par celle de l'image
//suivante dans le tableau gallery. Fais-en une boucle.