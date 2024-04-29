// "use strict";

// Concept One, would be better to use "let" instead of  "var".
var numberOne = 83;
var numberTwo = 25;

var result = numberOne + numberTwo;

console.log(result)

// Concept Two; function then function"name" - parent and child relationship, call function
function add() {
    var pageOne = 150;
    var pageTwo = 200;

    var combine = pageOne + pageTwo;

    console.log(combine);
}
add();
// This calla the function, like answering your parent after they called you

