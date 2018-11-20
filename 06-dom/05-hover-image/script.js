/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var data_img = document.querySelector('img').getAttribute('data-hover');  

    document.querySelector('img').addEventListener('mouseover', function(){

        document.querySelector('img').setAttribute('src', data_img);

    });

    //faire la même chose avec mouseleave et mettre la source de l'image 
    
    console.log(data_img);

})();

//Au survol de l'image, change sa source par celle qui se trouve dans son attribut "data-hover".

/* <section class="material">
<figure>
    <img src="../../_shared/img/kiss.svg" alt="Kiss?" data-hover="../../_shared/img/kiss-wink-heart.svg" />
</figure>
</section> */