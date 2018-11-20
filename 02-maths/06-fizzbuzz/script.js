/* becode/javascrnumpt
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var num;

    for (num = 1; num <= 100; num++) {

        if (num % 15 === 0) {
            console.log("fizzbuzz " + num);

        } else if (num % 3 === 0) {
            console.log("fizz " + num);

        } else if (num % 5 === 0) {
            console.log("buzz " + num);
            
        } else {
            console.log(num);
        }
    }

})();
