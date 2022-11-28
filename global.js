// function isInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)

//     );
// }




// /*
// ************************************************
// ********Self invoking funcitons syntaxe ********

// (function (parameters) {
//     //body of the function
// })(arguments);

// ************************************************
// */
// (function() {
//     const box = document.querySelectorAll('.box');
//     document.addEventListener('scroll', function() {
//         if (isInViewport(box)) {
//             document.getElementById(box.getAttribute("id")).style.display = "block";
//         }
//     }, {
//         passive: true
//     });
// })();