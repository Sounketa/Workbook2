"use strict";

function add() {
    var pageOne = 150;
    var pageTwo = 200;

    var combine = pageOne + pageTwo;

    console.log(combine);
}
// add();

function init() {
    console.log("hello")
}
// init();
window.onload = init;
button.onclick = add