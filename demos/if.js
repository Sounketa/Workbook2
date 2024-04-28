"use strict";

var numberOfKids = 4;
var price;

price = 20 + numberOfKids;

if (numberOfKids >= 3) {
    price = price * .9;
}

console.log(price);